/**
 * Created by Suy on 2017/1/18.
 */

function ContSucce(id){
    var oBox = document.getElementById(id);
    var oUl = oBox.children[0];
    var oLeft = oBox.children[1];
    var oRight = oBox.children[2];
    var aLi = oUl.children;
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width = aLi.length*aLi[0].offsetWidth+'px';
    var timer = null;
    var w = oUl.offsetWidth/2;
    var left = 0;
    oLeft.onmouseover=function(){
        clearInterval(timer);
        timer = setInterval(function(){
            left-=5;
            if(left<0){
                oUl.style.left = left%w+'px';
            }else{
                oUl.style.left = (left%w-w)%w+'px';
            }
        },30);
    };
    oRight.onmouseover=function(){
        clearInterval(timer);
        timer = setInterval(function(){
            left+=5;
            if(left<0){
                oUl.style.left=left%w+'px';
            }else{
                oUl.style.left = (left%w-w)%w+'px';
            }
        },30);
    };
}
function mov(id,time,num){
    var oBox = document.getElementById(id);
    var oUl = oBox.children[0];
    var aLi = oUl.getElementsByTagName('li');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].style.width=document.documentElement.clientWidth+'px';
    };
    oBox.style.height=document.documentElement.clientWidth*600/1920+'px';
    var oOl = oBox.children[1];
    var aBtn = oOl.children;
    var oPrev = oBox.children[2];
    var oNext = oBox.children[3];
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
    var w = oUl.offsetWidth/2;
    var iNow = 0;
    var timer= null;
    var autoTimer=null;
    aLi[0].onclick=function(){
        window.open('');
    }
    aLi[1].onclick=function(){
        window.open('');
    }
    aLi[2].onclick=function(){
        window.open('');
    }

    oBox.onmouseover=function(){
        oPrev.style.display='block';
        oNext.style.display='block';
        clearInterval(autoTimer);
    };
    oBox.onmouseout=function(){
        oPrev.style.display='none';
        oNext.style.display='none';
        autoTimer=setInterval(function(){
            next();
        },time)
    };
    for(var i=0;i<aBtn.length;i++){
        (function(index){
            aBtn[i].onmouseover=function(){
                //iNow = index;
                if((iNow%aBtn.length==num||iNow%aBtn.length==-1)&&index%aBtn.length==0){
                    iNow++;
                }
                if(iNow%aBtn.length==0&&index%aBtn.length==num){
                    iNow--;
                }
                iNow=Math.floor(iNow/aBtn.length)*aBtn.length+index;
                tab();
            };
        })(i);
    }
    function tab(){
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].className='';
        }
        if(iNow>0){
            aBtn[iNow%aBtn.length].className='on';
        }else{
            aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';
        }
        startMove(oUl,-iNow*aLi[0].offsetWidth);
    }
    oPrev.onclick=function(){
        iNow--;
        tab();
    };
    oNext.onclick=function(){
        next();
    }
    function next(){
        iNow++;
        tab();
    }
    autoTimer=setInterval(function(){
        next();
    },time)
    var left = 0;
    function startMove(obj,iTarget){
        var start = left;
        var dis = iTarget-start;
        var count = Math.floor(700/30);
        var n= 0;
        clearInterval(timer);
        timer = setInterval(function(){
            n++;
            var a = 1-n/count;
            left = start+dis*(1-Math.pow(a,3));
            if(left<0){
                oUl.style.left = left%w+'px';
            }else{
                oUl.style.left = (left%w-w)%w+'px';
            }
            if(n==count){
                clearInterval(timer);
            }
        },30);
    }
};