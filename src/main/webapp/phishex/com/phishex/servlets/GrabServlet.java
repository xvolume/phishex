package com.phishex.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.Scanner;

@WebServlet("/grab")
public class GrabServlet extends HttpServlet {
    public static String url = "";
    public static String setupPath = "";
    public static ArrayList<String> cmdOut = new ArrayList<String>();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        url = req.getParameter("url");

        if (!url.isEmpty() && urlValidator(url)) {
            String grabbedDir = null;

            try {
                grabbedDir = new URI(url).getHost();
            } catch (URISyntaxException e) {
                getErrorMessage(req, resp, e.getMessage(), "/index.jsp");
            }

            try{
                try {
                    File myObj = new File("phishex.cfg");
                    Scanner myReader = new Scanner(myObj);

                    while (myReader.hasNextLine()) {
                        setupPath = myReader.nextLine();
                    }

                    myReader.close();
                } catch (FileNotFoundException e) {
                    getErrorMessage(req, resp, e.getMessage(), "/WEB-INF/jsp/terminal_emulator.jsp");
                }
                if(!setupPath.isEmpty()) {

                    String cmd = "httrack " + url + " -r2 -O "+setupPath+"/httrack";
                    Process proc = Runtime.getRuntime().exec(cmd);
                    BufferedReader reader = new BufferedReader(new InputStreamReader(proc.getInputStream()));

                    String line = "";
                    while ((line = reader.readLine()) != null) {
                        cmdOut.add(line);
                    }
                    reader.close();

                    resp.setContentType("text/html");
                    resp.sendRedirect("/output");
                }
                else{
                    getErrorMessage(req, resp, "[Error] You need to run 'setup.py' before starting app", "/WEB-INF/jsp/terminal_emulator.jsp");
                }
            }
            catch (Exception e){
                getErrorMessage(req, resp, e.getMessage(), "/WEB-INF/jsp/terminal_emulator.jsp");
            }
        }
        else{
            getErrorMessage(req, resp, "URL field are not filled correctly!", "/index.jsp");
        }
    }

    public static boolean urlValidator(String urlStr) throws IOException {
        try {
            URL url = new URL(urlStr);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();
            return connection.getResponseCode() == 200;
        }
        catch(Exception e){
            System.err.println(e.getMessage());
            return false;
        }
    }

    public void getErrorMessage(HttpServletRequest req, HttpServletResponse resp, String mess, String path) throws ServletException, IOException {
        resp.setContentType("text/html");
        req.setAttribute("errMessage", mess);
        req.getRequestDispatcher(path).forward(req, resp);
    }
}