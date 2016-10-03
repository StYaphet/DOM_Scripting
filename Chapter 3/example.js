var paras = document.getElementsByTagName("p");
for(var i = 0; i < paras.length; i++) {

	var titleText = paras[i].getAttribute("title");
	if(titleText) {
		paras[i].setAttribute("title","brand new title text");
		alert(paras[i].getAttribute("title"));
	} 
}

var shopping = document.getElementById("purchases");
alert(shopping.getAttribute("title"));
shopping.setAttribute("title","a list of goods");
alert(shopping.getAttribute("title"));