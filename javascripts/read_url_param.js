var returnPage = "/main.html";

function verifyReturnPageAndPopulateLinks() {
	'use strict';
	if (window.location.href.indexOf("#") === -1) {
		document.location.href = '/404.html';
	} else {
		returnPage = window.location.href.split("#").pop();
		document.getElementById("confirmButton").href = returnPage + ".html" + "?AgeVerified";
	}
}