function getHTTPObject() {
	//  因为其他浏览器是基于XMLHttpRequest来创建新的请求对象的
	//  而微软最早在IE5中以ActiveX对象的形式实现了一个名叫XMLHTTP的对象
	//  所以在IE中创建请求对象应该使用ActiveXObject来创建
	//  同时，因为不同IE版本中使用的XMLHTTP对象也完全不相同，故应这么写
	if(typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try{return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
				catch(e) {}
			try{return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
				catch(e) {}
			try{return new ActiveXObject("Msxml2.XMLHTTP");}
				catch(e) {}
			return false;
		}
	return new XMLHttpRequest();
}