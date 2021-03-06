function stripeTables() {
	if(!document.getElementsByTagName)	return false;
	var tables = document.getElementsByTagName("table");
	var odd,rows;
	for(var i = 0;i<tables.length;i++) {
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for(var j=0; j<rows.length;j++) {
			if(odd==true)	{addClass(rows[j],"odd"); odd=false}
			else {odd=true;}
		}
	}
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function highlightRows() {
	if(!document.getElementsByTagName)	return false;
	var rows = document.getElementsByTagName("tr");
	for(var i = 0;i < rows.length; i++) {
		rows[i].onmouseover = function() {
			this.style.fontWeight = "bold";
		}
		rows[i].onmouseout = function() {
			this.style.fontWeight = "normal";
		}
	}
}

function addClass(element,value) {
	if(!element.className){
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);