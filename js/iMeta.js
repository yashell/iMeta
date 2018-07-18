// JavaScript Document  To Mir_Ys  面向对象 1.01  最终更新时间2017-12-15
 var Y={
//开放用来写公共变量---
HTTP:"http://127.0.0.1:8080",
ProjectID:"slfhdevelop",
PAGESIZE:11,

//得到页面高度
Yscroll:(document.documentElement.scrollHeight >document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight,
//得到页面宽度
Xscroll:(document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth : document.documentElement.scrollWidth,
//定义Y.$() 来决定返回 ID还是TagName---
$:function(ID){
		return document.getElementById(ID)
	},
$T:function(ID,TAG){
	return document.getElementById(ID).getElementsByTagName(TAG)
	},
//tabel  innerHTML的兼容---
setTableInnerHTML:function(table,html) {
table=document.getElementById(table);
if(navigator && navigator.userAgent.match(/msie/i)){
var temp = table.ownerDocument.createElement('div');
temp.innerHTML = '<table><tbody>' + html + '</tbody></table>';
if(table.tBodies.length == 0){
var tbody=document.createElement("tbody");
table.appendChild(tbody);
}
table.replaceChild(temp.firstChild.firstChild, table.tBodies[0]);
} else {
table.innerHTML=html;
}
},
<!-------------------------------select相关--------------------------------->
//根据value值选中对应选项------
ChooseSelectValue:function(SelectID,SelectValue){
    var select = document.getElementById(SelectID);  
    for(var i=0; i<select.options.length; i++){  
        if(select.options[i].value == SelectValue){  
            select.options[i].selected = true;  
            break;  
        }  
    }  
},
//根据text值选中对应选项---
ChooseSelectInnerHTML:function(SelectID,InnerHTML){
    var select = document.getElementById(SelectID);  
    for(var i=0; i<select.options.length; i++){  
        if(select.options[i].innerHTML == InnerHTML){  
            select.options[i].selected = true;  
            break;  
        }  
    }  
},
//根据value值返回text值
BlackSelectInner:function(SelectID,SelectValue){
    var select = document.getElementById(SelectID);  
    for(var i=0; i<select.options.length; i++){  
        if(select.options[i].value == SelectValue){  
           return  select.options[i].text
        }  
    }  
	return ""
},

BlackSelectText:function(SelectID,SelectValue){
    var select = document.getElementById(SelectID);  
    for(var i=0; i<select.options.length; i++){  
        if(select.options[i].value == SelectValue){  
           return  select.options[i].text
        }  
    }  
	return ""
},
<!-------------------------------select相关  end--------------------------------->

<!-------------------------------Radio相关--------------------------------->
//单选  根据值判断哪选被选中

ChooseRadioValue:function(RadioName,RadioValue){
 for(i=0;i<document.getElementsByName(RadioName).length;i++)
		{
			
			if(document.getElementsByName(RadioName)[i].value==RadioValue)  
			{
			
	
			document.getElementsByName(RadioName)[i].checked=true;
			}
		}
},
//单选  获取值

ReRadioValue:function(RadioName){
 for(i=0;i<document.getElementsByName(RadioName).length;i++)
		{
			
			if(document.getElementsByName(RadioName)[i].checked)  
			{
			return  document.getElementsByName(RadioName)[i].value
			}
		}
},





<!-------------------------------Radio相关 end--------------------------------->


// 只允许输入数字---
Digit:function(obj){   
obj.value=obj.value.replace(/\D/g,'')
} ,
// 只允许输入一个小数点和数字
DotDigit:function(obj){   
  obj.value = obj.value.replace(/[^\d.]/g,"");     //先把非数字的都替换掉，除了数字和.
  obj.value = obj.value.replace(/^\./g,"");         //必须保证第一个为数字而不是.
  obj.value = obj.value.replace(/\.{2,}/g,".");   //保证只有出现一个.而没有多个.
  obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");    //保证.只出现一次，而不能出现两次以上
},
//限制几位小数几位整数---
limitNum:function(a,int,dec){
 a.value = a.value.replace(/[^\d.]/g,"");     //先把非数字的都替换掉，除了数字和.
 a.value = a.value.replace(/^\./g,"");         //必须保证第一个为数字而不是.
 a.value = a.value.replace(/\.{2,}/g,".");   //这句不知道用来干啥
 a.value = a.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); //保证只有出现一个.而没有多个
	if(a!=""){
		if(a.value.indexOf(".")==-1){
			a.value=a.value.substr(0,int)   //限制整数能输几位
			}
		else{
			a.value=a.value.substring(0,a.value.indexOf(".") + eval(dec+1)) //限制小数点后能输几位
		}
		}
},
//只能是正负整数
MinusDigit:function(obj){   
  obj.value = obj.value.replace(/[^\d-]/g,"");     //先把非数字的都替换掉，除了数字和.
 obj.value = obj.value.replace(/^\./,"");         //必须保证第一个为数字而不是.
  obj.value = obj.value.replace(/\-{2,}/g,"-");   //保证只有出现一个.而没有多个.
  obj.value = obj.value.replace("-","$#$").replace(/\-/g,"").replace("$#$","-");    //保证.只出现一次，而不能出现两次以上
},
//正常字符 不包括特殊字符---
NormData:function(a) {
//a.value=a.value.replace(/[^\u4e00-\u9fa5\w]/g,"")  //一句话全部搞定
//a.value=a.value.replace(/'|"|\\|&/g,"")  //只限制' " \ &
a.value=a.value.replace(/'|"|\\|&|\^|`/g,"")     //只限制' " \ & ^ `

/* if(/["'&#\\]/.test(a.value)){
          $(a).val(a.value.replace(/["'&#\\]/,""));
    }*/
},

//根据日期返回星期几
//Y.ReWeek('2017-04-27')
//Y.ReWeek(new Date()) //获取当天是星期几
ReWeek:function(a){
			//下边这段多定义了一个date值把时间传成IE7 IE8可以识别的，完了再返回 
	var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
       date = new Date(NaN), month,
       parts = isoExp.exec(a);

   if(parts) {
     month = +parts[2];
     date.setFullYear(parts[1], month - 1, parts[3]);
     if(month != date.getMonth() + 1) {
       date.setTime(NaN);
     }
   }
   //
var d =new Date(date)
var weekday=new Array(7);
weekday[0]="周天";
weekday[1]="周一";
weekday[2]="周二";
weekday[3]="周三";
weekday[4]="周四";
weekday[5]="周五";
weekday[6]="周六";
return weekday[d.getDay()]
	},

//根据日期返回月日
//Y.ReDateMMdd('2017-04-27')
ReDateMMdd:function(a){
	//下边这段多定义了一个date值把时间传成IE7 IE8可以识别的，完了再返回 
	var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
       date = new Date(NaN), month,
       parts = isoExp.exec(a);

   if(parts) {
     month = +parts[2];
     date.setFullYear(parts[1], month - 1, parts[3]);
     if(month != date.getMonth() + 1) {
       date.setTime(NaN);
     }
   }
   //
   var date =new Date(date);
    // var year = date.getFullYear();
     var month = date.getMonth()+1;    //js从0开始取 
     var date1 = date.getDate(); 
     //var hour = date.getHours(); 
     //var minutes = date.getMinutes(); 
     //var second = date.getSeconds();
	 return month+"月"+date1+"日"
},
//根据日期返回YYYY年MM月dd日
//Y.ReDateMMdd('2017-04-27')
ReDateYYYYMMdd:function(a){
	if(a==null || a=="")
	{
		return ""}
		else{
		//下边这段多定义了一个date值把时间传成IE7 IE8可以识别的，完了再返回 
	var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
       date = new Date(NaN), month,
      parts = isoExp.exec(a.substr(0,10));

   if(parts) {
     month = +parts[2];
     date.setFullYear(parts[1], month - 1, parts[3]);
     if(month != date.getMonth() + 1) {
       date.setTime(NaN);
     }
   }
   //			
	
   var date =new Date(date);
   	 var year = date.getFullYear();
     var month = date.getMonth()+1;    //js从0开始取 
     var date1 = date.getDate(); 
     //var hour = date.getHours(); 
     //var minutes = date.getMinutes(); 
     //var second = date.getSeconds();
	 return year+"年"+month+"月"+date1+"日"
		}
},
//根据日期返回yyyy-MM-dd
//Y.ReDateMMdd('2017-04-27')
ReDateYYYYMMddB:function(a){
	if(a==null || a=="")
	{
		return ""}
		else{
		//下边这段多定义了一个date值把时间传成IE7 IE8可以识别的，完了再返回 
	var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
       date = new Date(NaN), month,
       parts = isoExp.exec(a.substr(0,10));

   if(parts) {
     month = +parts[2];
     date.setFullYear(parts[1], month - 1, parts[3]);
     if(month != date.getMonth() + 1) {
       date.setTime(NaN);
     }
   }
   //			
   var date =new Date(date);
   	 var year = date.getFullYear();
	var month=(date.getMonth() + 101).toString().substr(1)
     var date1 = (date.getDate() + 100).toString().substr(1); 
	 return year+"-"+month+"-"+date1
		}
},
//------------------------------CheckBox------------------------
CheckBoxSecled2:function(CheckboxName,Checkboxvalue){
	for(i=0;i<document.getElementsByName(CheckboxName).length;i++)
	{
		if(Checkboxvalue==document.getElementsByName(CheckboxName)[i].value)
		{
			document.getElementsByName(CheckboxName)[i].checked=true
		}			
	}
},

CheckBoxSecled:function(a,name){
 if(a.checked==true)
  {
var test = document.getElementsByName(name);
for(var i=0; i<test.length; i++){
test[i].checked=true
}
  }
  else
  {
 var test = document.getElementsByName(name);
for(var k=0; k<test.length; k++){
test[k].checked=false
}
  }
},
//获取当前时间，并按 yyyy-MM-dd HH:MM:SS 显示
NowLongTime:function(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
} ,
//获取当前时间，并按 yyyy-MM-dd显示
NowShortTime:function(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = (date.getDate() + 100).toString().substr(1); 
	
	
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
} ,

//获取当前时间，并按 yyyy-MM-dd显示
NowShortTimeB:function(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = (date.getDate() + 100).toString().substr(1); 
	
	
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    var currentdate = date.getFullYear() + "年" + month + "月" + strDate+"日";
    return currentdate;
} ,

GetDateStr:function(AddDayCount) {   
   var dd = new Date();  
   dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期  
   var y = dd.getFullYear();   
   var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0  
   var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0  
   return y+"-"+m+"-"+d;   
},


//淡入---
/*
//使用方法
Y.FadeIn("test",50,100)
*/
FadeIn:function(elem, speed, opacity){ 
 elem=document.getElementById(elem)
  /* 
   * 参数说明 
   * elem==>需要淡入的元素 
   * speed==>淡入速度,正整数(可选) 
   * opacity==>淡入到指定的透明度,0~100(可选) 
   */ 
  speedspeed = speed || 20; 
  opacityopacity = opacity || 100; 
  //显示元素,并将元素值为0透明度(不可见) 
  elem.style.display = 'block'; 
  elem.filters ? elem.style.filter = 'alpha(opacity=0)' : elem.style.opacity = 0; 
  //初始化透明度变化值为0 
  var val = 0; 
  //循环将透明值以5递增,即淡入效果 
  (function(){ 
    elem.filters ? elem.style.filter = 'alpha(opacity=' + val + ')' : elem.style.opacity = val / 100; 
    val += 5; 
   if (val <= opacity) { 
    setTimeout(arguments.callee, speed) 
   } 
  })(); 
 }, 

//淡出---
/*
//使用方法
Y.FadeOut("test",50,0)
*/
FadeOut:function(elem, speed, opacity){ 
  /* 
   * 参数说明 
   * elem==>需要淡入的元素 
   * speed==>淡入速度,正整数(可选) 
   * opacity==>淡入到指定的透明度,0~100(可选) 
   */ 
  elem=document.getElementById(elem)
  speedspeed = speed || 20; 
  opacityopacity = opacity || 0; 
  //初始化透明度变化值为0 
  var val = 100; 
  //循环将透明值以5递减,即淡出效果 
  (function(){ 
  elem.filters ? elem.style.filter = 'alpha(opacity=' + val + ')' : elem.style.opacity = val / 100; 
   val -= 5; 
   if (val >= opacity) { 
    setTimeout(arguments.callee, speed); 
   }else if (val < 0) { 
    //元素透明度为0后隐藏元素 
    elem.style.display = 'none'; 
   } 
  })(); 
 }, 
 
 
//拖动DIV-- 

/*
//使用方法
//CSS
#boxA{ width:100%; height:100%; position:fixed; background-color:rgba(0,0,0,0.3)}
#boxA dl{position:absolute;  background:#ffffff; font-size:12px; -moz-box-shadow:2px 2px 4px #666666; -webkit-box-shadow:2px 2px 4px #666666;border:1px solid #a0b3d6;}
#boxA dl dt{line-height:24px; background:#beceeb; border-bottom:1px solid #a0b3d6; padding-left:5px; cursor:move;}
#boxA dl dt a{ cursor:pointer; position:absolute; right:0;}
#boxA dl dd{width:420px; height:250px; padding:10px 5px;}
//DIV
<div id="boxA">
<dl>
<dt>拖拽 <a>关闭</a></dt>
<dd></dd>
</dl>
</div>
//javascript
Y.Drag("boxA")
*/
Drag:function(ID){
	/*因为不能用margin 让元素居中代码*/
	document.getElementById(ID).style.display="block"

     var box = document.getElementById(ID).getElementsByTagName("dl")[0].getElementsByTagName("dt")[0]
	 var Mwidth =  (document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth:document.documentElement.scrollWidth
     var Mheight = (document.documentElement.scrollHeight >document.documentElement.clientHeight) ? document.documentElement.scrollHeight : document.documentElement.clientHeight

	 var alginX= (Mwidth- box.parentNode.offsetWidth)/Mwidth/2*100 +"%"
	 var alginY= (Mheight- box.parentNode.offsetHeight)/Mheight/2*100 +"%"
	 box.parentNode.style.left=alginX
	 box.parentNode.style.top=alginY
	/*关闭代码*/
	 document.getElementById(ID).getElementsByTagName("dl")[0].getElementsByTagName("dt")[0].getElementsByTagName("a")[0].onclick=function(){
		 document.getElementById(ID).style.display="none"
		 }
	/*拖动代码*/
  box.onmousedown = function(event){
		box = document.getElementById(ID).getElementsByTagName("dl")[0]
	    var e = event||window.event;
        var x = e.clientX - box.offsetLeft;
        var y = e.clientY - box.offsetTop;
        if(x>=0&&y>=0){
            document.onmousemove = function(even){
                var ev = even ||window.event;
                var cx =  Mwidth;
                var ch =  Mheight;
                box.style.top=ev.clientY-y+'px';
                box.style.left=ev.clientX-x+'px';
                if(ev.clientX-x<0){
                    box.style.left = 0;
                }else if(ev.clientX-x>cx-box.offsetWidth){
                    box.style.left=cx-box.offsetWidth+'px';
                }
                if(ev.clientY-y<0){
                    box.style.top=0;
                }else if(ev.clientY>ch-box.offsetHeight){
                    box.style.top = ch-box.offsetHeight+'px';
                }
                //兼容IE6-8  阻止默认事件
                if(box.setCapture){
                    box.setCapture();
                }

            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
                //释放阻止事件
                if(box.releaseCapture){
                    box.releaseCapture();
                }
            }

        }
        return false;
    };
},


//重定义getElementsByClassName  修复低版本不兼容的问题
getElementsByClassName : (function (classListA,/*optional*/parent){
        if(typeof classListA !== "string") throw TypeError("the type of classListA is error");
        var parent = parent || window.document;/*添加默认值*/
        if(parent.getElementsByClassName){/*如果是标准浏览器支持该方法*/
            return parent.getElementsByClassName(classListA);
        }else{/*如果不支持该方法即非标准浏览器*/
            var child = parent.getElementsByTagName("*");
            var nodeList = [];
            /*获得classListA的每个类名 解决前后空格 以及两个类名之间空格不止一个问题*/
            var classAttr = classListA.replace(/^\s+|\s+$/g,"").split(/\s+/);
            for(var j = 0,len_j = child.length; j<len_j; j++){
                var element = child[j];
                for(var i = 0,len_i = classAttr.length; i< len_i; i++){
                    var _className = classAttr[i];
                    if(element.className.search(new RegExp("(\\s+)?"+_className+"(\\s+)?")) === -1){
                        break;
                    }
                }
                if(i===len_i) nodeList.push(element);
            }
            return nodeList;
        }
    }),
 
 
  //获取父对象的宽
GetWidth:function(chirdName,fatherName){
document.getElementById(chirdName).style.width=document.getElementById(fatherName).clientWidth+"px"
},
//获取指定对象的高
GetHeight:function(chirdName,fatherName){
document.getElementById(chirdName).style.height=document.getElementById(fatherName).clientHeight+"px"
},
//获取指定对象的高
GetTop:function(chirdName,fatherName){
document.getElementById(chirdName).style.top=document.getElementById(fatherName).clientHeight+"px"
},

//让table隔行换色
TableLineColor:function(tablename){
	var a=document.getElementById(tablename).getElementsByTagName("tr");
	for(i=0;i<a.length;i=i+2){
	try{
		a[i].style.backgroundColor="#e8ecef"
		a[i+1].style.backgroundColor="#f7f8fa"
	}
	catch(e){}
	}	

},
 
//禁用右键---
ForbiddenRightClick:function(){
function stop(){return false;}
document.oncontextmenu=stop;
	},
CloseDiv:function(ID){
	document.getElementById(ID).style.display="none"
	},
Prompt:function(txt){
	if(txt=="" || txt==null) return;
	document.getElementById("Prompt_m").innerHTML=txt
	Y.Drag("Prompt")
	} 	

	

	
//结束
}

// JavaScript Document