function getNewContent() {
	var request = getHTTPObject();
	if(request) {
		//  XMLHttpRequest最有用的方法是open方法
		//  第一个参数指定请求的类型，
		//  第二个参数指定服务器上将要方位的文件，
		//  第三个参数用于指定请求是否以异步方式发送和处理
		request.open("GET", "example.txt", true);
		request.onreadystatechange = function() {
			if(request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert("Sorry, your browser doesn\'t support XMLHttpRequest!");
	}
}

addLoadEvent(getNewContent)