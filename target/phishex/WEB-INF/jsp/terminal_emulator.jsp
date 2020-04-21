<%--
  Created by IntelliJ IDEA.
  User: xuser
  Date: 3/28/20
  Time: 9:46 AM
  To change this template use File | Settings | File Templates.
--%>
<jsp:include page="header.jsp"/>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>

<div class="wrapper fadeInDown">
    <div id="formContent_back">
    <c:if test="${error != null}">
        <form name="grabber" action="${pageContext.request.contextPath}/">
    </c:if>
    <c:if test="${error == null}">
        <form name="grabber" action="${pageContext.request.contextPath}/dashboard">
    </c:if>
            <c:set var="error" scope="page" value="${errMessage}"/>
            <div id="formContent_terminal">
                <div class="fadeIn first">
                    <c:forEach items="${cmdOut}" var="cmd">
                        <span style='color: #F8E23B'>phishex</span><span style='color:royalblue'>:~$ </span>${cmd}<br>
                    </c:forEach>


                    <c:if test="${error != null}">
                        <span style='color: #F8E23B'>phishex</span><span style='color:royalblue'>:~$ </span><c:out value="${error}"/><br><br>
                    </c:if>
                </div>
            </div>
            <c:if test="${error != null}">
                <input type="submit" class="fadeIn third" value="Return">
            </c:if>
            <c:if test="${error == null}">
                <input type="submit" class="fadeIn third" value="Dashboard">
            </c:if>
        </form>
    </div>
</div>