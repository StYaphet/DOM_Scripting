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