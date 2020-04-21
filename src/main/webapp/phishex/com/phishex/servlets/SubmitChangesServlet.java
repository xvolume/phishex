package com.phishex.servlets;

import com.phishex.dao.CredentialsDao;
import com.phishex.entity.Credentials;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@WebServlet("/submit_changes")
public class SubmitChangesServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            String[] id = req.getParameterValues("id");
            String[] site = req.getParameterValues("site");
            String[] data = req.getParameterValues("data");

            CredentialsDao credentialsDao = new CredentialsDao();

            if (data.length != 0 && id.length != 0) {
                for (int i = 0; i < id.length - 1; ) {
                    Credentials creds = new Credentials();

                    creds.setId(Integer.parseInt(id[i]));
                    creds.setSite(site[i]);
                    creds.setData(data[i]);
                    if (!site[i].isEmpty() && !data[i].isEmpty()) {
                        credentialsDao.update(creds);
                    } else {
                        emptyFieldError(req, resp);
                    }
                    i++;
                }
            } else {
                emptyFieldError(req, resp);
            }
            resp.sendRedirect("/dashboard");
        }catch (Exception e){
            resp.setContentType("text/html");
            req.setAttribute("error", e.getMessage());
            req.getRequestDispatcher("/WEB-INF/jsp/edit.jsp").forward(req, resp);
        }
    }

    public void emptyFieldError(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        CredentialsDao credentialsDao = new CredentialsDao();
        List<Credentials> credentials = credentialsDao.findAll();

        resp.setContentType("text/html");
        if(credentials.isEmpty()){
            req.setAttribute("credsError", "No data");
        }
        if(!credentials.isEmpty()) {
            req.setAttribute("credentials", credentials);
        }
        req.setAttribute("error", "error: Can't edit with empty fields");
        req.getRequestDispatcher("/WEB-INF/jsp/edit.jsp").forward(req, resp);
    }
}