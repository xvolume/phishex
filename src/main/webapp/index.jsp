<jsp:include page="WEB-INF/jsp/header.jsp"/>
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>

<div class="wrapper fadeInDown">
    <div id="formContent">
        <div class="fadeIn first">
            <c:set var="errCheck" scope="page" value="${errMessage}"/>

            <c:if test="${errCheck != null}"><br>
                <span style="color: #cc0000"><c:out value="${errCheck}"/>
            </c:if>
            <form name="grabber" action="${pageContext.request.contextPath}/grab"><br><br>
                <input type="text" id="url" class="fadeIn first" name="url" placeholder="login page url" required><br>
                <input type="submit" class="fadeIn third" value="Grab it">
            </form>
        </div>
    </div>
</div>