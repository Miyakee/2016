/**
 * Created by Administrator on 2016/3/2.
 */
window.onload=function(){
    waterfall();
    //var main = document.getElementById("main");
    //var a=document.createElement("div");
    //a.innerText="asdsf";
    //main.appendChild(a);

};
var browser=getExplorerInfo();
function waterfall(){
    var main = document.getElementById("main");
    var screenWidth=document.body.clientWidth;
    var boxs=getElementsByClassName("box","div",main);
    var boxWidth=boxs[0].offsetWidth;
    var boxHeight=boxs[0].offsetHeight;
    //console.log(boxHeight);
    var num=Math.floor(screenWidth/boxWidth);//求出每行能容纳的图片的组数；
    main.style.width=num*boxWidth+"px";
    console.log(boxHeight);
    ////将每一列图片归为一个组，哪个组值最小，就把新加进来的图片放到哪个组；
    var cols_height=new Array();
    var boxNum=boxs.length;
     for(var i=0;i<boxNum;i++){
          if(i<num){
              //console.log(i);
              cols_height.push(boxs[i].offsetHeight);
              boxs[i].style.position="absolute";
              boxs[i].style.left=boxWidth*i+"px";
              boxs[i].style.top="0px";
              boxs[i].style.opacity = "1";

          }
          else{
              //console.log(i);
              //console.log("ss"+cols_height);

              var needAdd=Math.min.apply(null,cols_height);
              var picIndex=getIndex(cols_height,needAdd);
              //console.log("mm"+picIndex);
              var addLeft=picIndex*boxWidth;
              boxs[i].style.position="absolute";
              boxs[i].style.left=addLeft+"px";
              boxs[i].style.opacity = "1";
              boxs[i].style.top=cols_height[picIndex]+"px";
              cols_height[picIndex]+=boxs[i].offsetHeight;
          }
     }
    function Load() {
        var data={dataAll:[{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'},{"src":'35.jpg'},{"src":'36.jpg'},{"src":'37.jpg'}]};
        var main = document.getElementById("main");
        var boxs = getElementsByClassName( "box","div",main);
        var position = (boxs[boxs.length - 1].offsetWidth) / 2 + boxs[boxs.length - 1].offsetTop;
        if(browser['type']=="IE"){
            var now =  document.documentElement.scrollTop + document.documentElement.clientHeight;
        }else{
            var now =  document.body.scrollTop + document.documentElement.clientHeight;
        }
        console.log(position+"++"+now);
        if (now >=position){
            //window.onscroll=null;
                createNew(data);
                waterfall();
            }
    }
    window.onscroll=Load;
}
function getElementsByClassName(className,tagName,parent){
    var ele=[],all=parent.getElementsByTagName(tagName||"*");
    for(var i=0;i<all.length;i++){
        if(all[i].className==className){
            ele.push(all[i]);
        }
    }
    return ele;
}
function getIndex(parent,val){
    for(var i=0;i<parent.length;i++){
        if(parent[i]==val){
            return i;
        }
    }
}
var timer;
window.onresize=function(){
    clearTimeout(timer);
    timer = setTimeout(function() {waterfall();}, 200);
};
function createNew(data){
    var main = document.getElementById("main");
    var begin=document.getElementById("begin");
    var fragment = document.createDocumentFragment();
    for(var i=0;i<data.dataAll.length;i++) {
         url="pic/"+data.dataAll[i].src;
         var imgLoad=function (url, callback) {
            var img = new Image();
            img.src =url;
            if (img.complete) {
                callback(img);
            } else {
                img.onload = function () {
                    callback(img);
                    img.onload = null;
                };
            }
        };
        if(browser['type']=="IE"){
            var box = document.createElement("div");
            box.style.opacity = "0";
            box.className = "box";
            box.innerHTML = ' <div class="pic"> <img src=" ' + url + '" ></div>';
            fragment.appendChild(box);
        }else{
        imgLoad(url,function(imgnew){
            var box = document.createElement("div");
            box.style.opacity = "0";
            box.className = "box";
            box.innerHTML = ' <div class="pic"> <img src=" ' + imgnew.src + '" ></div>';
            fragment.appendChild(box);
        });


    }
    }

     //begin.insertBefore(fragment);
    main.appendChild(fragment);

}

function getExplorerInfo() {
    var explorer = window.navigator.userAgent.toLowerCase() ;
    //ie
    if (explorer.indexOf("msie") >= 0) {
        var ver=explorer.match(/msie ([\d.]+)/)[1];
        return {type:"IE",version:ver};
    }
    //firefox
    else if (explorer.indexOf("firefox") >= 0) {
        var ver=explorer.match(/firefox\/([\d.]+)/)[1];
        return {type:"Firefox",version:ver};
    }
    //Chrome
    else if(explorer.indexOf("chrome") >= 0){
        var ver=explorer.match(/chrome\/([\d.]+)/)[1];
        return {type:"Chrome",version:ver};
    }
    //Opera
    else if(explorer.indexOf("opera") >= 0){
        var ver=explorer.match(/opera.([\d.]+)/)[1];
        return {type:"Opera",version:ver};
    }
    //Safari
    else if(explorer.indexOf("Safari") >= 0){
        var ver=explorer.match(/version\/([\d.]+)/)[1];
        return {type:"Safari",version:ver};
    }

}
