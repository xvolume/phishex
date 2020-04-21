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

@WebServlet("/edit")
public class EditServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            CredentialsDao credentialsDao = new CredentialsDao();
            List<Credentials> credentials = credentialsDao.findAll();


            resp.setContentType("text/html");
            if (credentials.isEmpty()) {
                req.setAttribute("credsError", "No data");
            }
            if (!credentials.isEmpty()) {
                req.setAttribute("credentials", credentials);
            }
            req.getRequestDispatcher("/WEB-INF/jsp/edit.jsp").forward(req, resp);

        } catch (Exception e){
            resp.setContentType("text/html");
            req.setAttribute("error", e.getMessage());
            req.getRequestDispatcher("/WEB-INF/jsp/edit.jsp").forward(req, resp);
        }
    }
}
