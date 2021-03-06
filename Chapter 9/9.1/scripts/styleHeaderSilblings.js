function getNextElement(node) {
	if(node.nodeType == 1) {
		return node;
	}
	if(node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}

function styleHeaderSibling() {
	if(!document.getElementsByTagName)	return false;
	var headers = document.getElementsByTagName("h1");
	var elem;
	for(var i=0;i<headers.length;i++) {
		elem = getNextElement(headers[i]);
		//  style对象的属性值必须放在括号里，单引号、双引号均可
		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeif window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}