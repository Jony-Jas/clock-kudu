setInterval(function time(){
var date = new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
document.getElementById("hrmin").innerHTML=h+":"+m;
document.getElementById("sec").innerHTML=s;
},1000);

setInterval(function dates(){
var date = new Date();
var d = date.getDate();
var y = date.getFullYear();
var m = date.getMonth()+1;
function month(){
	if(m<10)
	{
		return "0"+m;
	}
	else
	{
		return m;
	}
} 
var dy = day();

document.getElementById("dte").innerHTML = d+"-"+month();
document.getElementById("yr").innerHTML = dy+"|"+y;
},1000);

function day() {
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]="SUN";
	weekday[1]="MON";
	weekday[2]="TUE";
	weekday[3]="WED";
	weekday[4]="THU";
	weekday[5]="FRI";
	weekday[6]="SAT";
	var n = weekday[d.getDay()];
	return n;
}


var txt = '{"tile":{"name":["Stopwatch","Time Converter"],"boxid":["tile1","tile2"],"inboxid":["tile1_box","tile2_box"],"img":["link1","link2"]}}';
var tx="";
var assets="";
var obj = JSON.parse(txt);
for(x in obj.tile.name)
{
 tx += "<div id="+obj.tile.boxid[x]+" class="+"col-md-6 col-sm-6 col-xs-12"+"><div id="+obj.tile.inboxid[x]+"><span>"+obj.tile.name[x]+"</span></div></div>";
}
document.getElementById("tiles").innerHTML = tx;

document.getElementById("tile1_box").addEventListener("click", openBox1);
function openBox1() {
  window.open("stopwatch.html");
}

document.getElementById("tile2_box").addEventListener("click", openBox2);
function openBox2() {
	window.open("timeconverter.html");
}