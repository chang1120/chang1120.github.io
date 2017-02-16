/**
 * Created by Suy on 2017/1/19.
 * author   :   Suy
 * tel  :   18001052585
 * header : 头部公共文件方法
 * footer : 底部公共文件方法
 */
'use strict';
function header(id){
    id.innerHTML = '<ul class="clearFix">'+
                            '<li><a href="index.html">首页</a></li>'+
                            '<li><a href="ContData.html">作品展示</a></li>'+
                            '<li><a href="Cont.html">作品详情</a></li>'+
                            '<li><a href="Contact.html">关于我</a></li >'+
                        '</ul>';
};
function footer(id){
    id.innerHTML = '<ul class="clearFix">'+
                            '<li>'+
                                '<p>关于</p>'+
                                '<p>关于我</p>'+
                                '<p>联系我</p>'+
                            '</li>'+
                            '<li>'+
                                '<img src="images/QRcode.jpg" alt="">'+
                            '</li>'+
                            '<li>'+
                                '<p>越努力越幸运，热爱设计!</p>'+
                                '<p>本人有工作四年的电商经验，致力于做高端格调电商视觉设计，站酷花瓣网都有原创作品收录， 是致设计网站资深设计师。未来的路上，一如既往的学习做出更多属于自己风格的作品。</p>'+
                            '</li>'+
                        '</ul>';
}

/*
 **	addCookie	add a cookie
 **	params
 **				name[string]
 **				value[string]
 **				iDay[number]
 */
function addCookie(name,value,iDay){
    //判断iDay是否存在，如果有就设置没有就不设置
    if(iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+'='+value+'; PATH=/; EXPIRES='+oDate.toGMTString();
    }else{
        document.cookie=name+'='+value+'; PATH=/';
    }
}
//获取cookie
function getCookie(CookieName){
    var arr = document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2 = arr[i].split('=');
        if(arr2[0]==CookieName){
            return arr2[1];
        }
    }
}
/*
 **				name[string]
 */
function removeCookie(name){
    //把cookie的时间变成过期的就删了。
    addCookie(name,1,-1);
}
var strLocation = window.location.toString();
function ToBack_Conference(){
    if(strLocation.indexOf('index_Play')!=-1){
        window.open('GoBackAction-HuangShanShan');
    }else{
        window.history.go(-1);return false;
    }

}