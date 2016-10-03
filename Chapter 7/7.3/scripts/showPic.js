function showPic(whichPic) {
	if(!document.getElementById("placeholder"))	return false;
	var source = whichPic.getAttribute("href");
	var placeHolder = document.getElementById("placeholder");
	if(placeHolder.nodeName != "IMG")	return false;
	placeHolder.setAttribute("src",source);//  第一个参数：哪个属性；第二个参数：属性的值	

	if(document.getElementById("description")) {
		var text = whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}	
	return true;
}

//function countBodyChildren() {
//	var bodyElement = document.getElementsByTagName("body")[0];//getElementByTag得到的是一个数组，包含tag为指定值的所有元素
//	alert(bodyElement.nodeType);
//}

//window.onload = countBodyChildren;

function prepareGallery() {
	if(!document.getElementsByTagName)	return false;
	if(!document.getElementById)	return false;
	if(!document.getElementById("imagegallery"))	return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0;i < links.length ;i++) {
		links[i].onclick = function() {
			return showPic(this) ? false : true;
		}
		//  最好不要加这个，因为onclick就能完成任务
		//links[i].onkeypress = links[i].onclick;
	}
}
//  这将把那些在页面接在完毕时执行的函数创建为一个队列
//  只有一个参数：打算在页面加载完毕时执行的函数的名字
//  1. 把现有的window.onload事件处理函数的值存入变量oldonload
//  2. 如果在这个处理函数上还没有绑定任何函数，就像平时那样把新函数添加给它
//  3. 如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现有指令的末尾
function addLoadEvent(func) {
	var oldOnLoad = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldOnLoad();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChile(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function preparePlaceholder() {
	if(!document.createElement)	return;
	if(!document.createTextNode)	return;
	if(!document.getElementById)	return;
	if(!document.getElementById("imagegallery")) return;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	//  第一个参数是新元素，第二个参数标识在这个元素之后插入
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);

}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);