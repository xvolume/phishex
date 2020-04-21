package com.phishex.servlets;

import com.phishex.dao.CredentialsDao;
import com.phishex.dao.SysInfoDao;
import com.phishex.entity.Credentials;
import com.phishex.entity.SysInfo;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/wipe")
public class WipeAllServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            CredentialsDao credentialsDao = new CredentialsDao();
            SysInfoDao sysInfoDao = new SysInfoDao();

            List<Credentials> credentials = credentialsDao.findAll();
            List<SysInfo> sysInfo = sysInfoDao.findAll();

            for(Credentials creds: credentials){
                credentialsDao.delete(creds);
            }
            for(SysInfo si: sysInfo){
                sysInfoDao.delete(si);
            }

            // Check
            List<Credentials> credCheck = credentialsDao.findAll();
            List<SysInfo> siCheck = sysInfoDao.findAll();

            if(credCheck.isEmpty() && siCheck.isEmpty()){
                resp.setContentType("text/html");
                req.setAttribute("credsError", "No data");
                req.setAttribute("sysInfoError", "No data");
                req.getRequestDispatcher("/WEB-INF/jsp/dashboard.jsp").forward(req, resp);
            }

        }catch (Exception e){
            getErrorMessage(req, resp, e.getMessage());
        }
    }

    public void getErrorMessage(HttpServletRequest req, HttpServletResponse resp, String mess) throws ServletException, IOException {
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
            req.setAttribute("error", mess);
            req.setAttribute("credentials", credentials);
            req.setAttribute("sysInfo", sysInfo);
        }
        req.getRequestDispatcher("/WEB-INF/jsp/dashboard.jsp").forward(req, resp);
    }
}
