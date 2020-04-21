package com.phishex.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URI;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@WebServlet("/output")
public class TerminalServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            resp.setContentType("text/html");
            req.setAttribute("cmdOut", GrabServlet.cmdOut);
            req.getRequestDispatcher("/WEB-INF/jsp/terminal_emulator.jsp").forward(req, resp);
        } catch (Exception e) {
            getErrorMessage(req, resp, e.getMessage());
        }
    }

    public void getErrorMessage(HttpServletRequest req, HttpServletResponse resp, String mess) throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setAttribute("errMessage", mess);
        req.getRequestDispatcher("/WEB-INF/jsp/terminal_emulator.jsp").forward(req, resp);
    }
}
