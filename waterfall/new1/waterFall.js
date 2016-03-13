/**
 * Created by Administrator on 2016/3/2.
 */
window.onload=function(){
    waterfall();
};
var re;
window.onresize=function(){
    clearTimeout(re);
    re = setTimeout(function() {waterfall();}, 200);
};
//window.onscroll=function(){
//    var data={dataAll:[{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
    //console.log(isLoad());
    //var main = document.getElementById("main");
    //var boxs = getElementsByClassName( "box","div",main);
    //var position = (boxs[boxs.length - 1].offsetWidth) / 2 + boxs[boxs.length - 1].offsetTop;
    //var now = document.body.scrollTop + document.documentElement.clientHeight;
    //console.log(now+"$$"+position);

    //if(isLoad()){
        //window.onscroll=null;
//console.log(33);
        //var main = document.getElementById("main");
        //var    fragment = document.createDocumentFragment();
        //for(var i=0;i<data.dataAll.length;i++) {
        //    var box = document.createElement("div");
        //    box.className = "box";
        //    fragment.appendChild(box);
        //    var pic = document.createElement("div");
        //    pic.className = "pic";
        //    box.appendChild(pic);
        //    var img = document.createElement("img");
        //    img.src=""+data.dataAll[i].src;
        //    pic.appendChild(img);
        //    //box.style.opacity=0;
        //}
        //main.appendChild(fragment);
        //createNew(data);
    //    waterfall();
    //
    //
    //}
//};
function waterfall(){
    var main = document.getElementById("main");
    var screenWidth=document.body.clientWidth;
    //console.log(screenWidth);
    var boxs=getElementsByClassName("box","div",main);
    var boxWidth=boxs[0].offsetWidth;
    var boxHeight=boxs[0].offsetHeight;
    console.log(boxHeight);
    var num=Math.floor(screenWidth/boxWidth);//求出每行能容纳的图片的组数；
    main.style.width=num*boxWidth+"px";
    console.log(boxHeight);
    ////将每一列图片归为一个组，哪个组值最小，就把新加进来的图片放到哪个组；
    var cols_height=new Array();
    var boxNum=boxs.length;
     for(var i=0;i<boxNum;i++){
          if(i<num){
              console.log(i);
              cols_height.push(boxs[i].offsetHeight);
              boxs[i].style.position="absolute";
              boxs[i].style.left=boxWidth*i+"px";
              boxs[i].style.top="0px";
              boxs[i].style.opacity = "1";

          }
          else{
              console.log(i);
              console.log("ss"+cols_height);

              var needAdd=Math.min.apply(null,cols_height);
              var picIndex=getIndex(cols_height,needAdd);
              console.log("mm"+picIndex);
              var addLeft=picIndex*boxWidth;
              boxs[i].style.position="absolute";
              boxs[i].style.left=addLeft+"px";
              //console.log(cols_height[picIndex].style.height);
              //console.log(boxs[i].offsetHeight);
              boxs[i].style.opacity = "1";

              boxs[i].style.top=cols_height[picIndex]+"px";
              cols_height[picIndex]+=boxs[i].offsetHeight;
              //console.log(cols_height[picIndex]);

          }
     }
    function isLoad() {
        var data={dataAll:[{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
        var main = document.getElementById("main");
        var boxs = getElementsByClassName( "box","div",main);
        var position = (boxs[boxs.length - 1].offsetWidth) / 2 + boxs[boxs.length - 1].offsetTop;
        var now = document.body.scrollTop + document.documentElement.clientHeight;
        console.log(now+"$$"+position);

            if (now >position){
                window.onscroll=null;
                createNew(data);
                waterfall();
            }

    }

    window.onscroll=isLoad;
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
//window.onscroll=isLoad;
//function isLoad() {
//    var data={dataAll:[{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
//    var main = document.getElementById("main");
//    var boxs = getElementsByClassName( "box","div",main);
//    var position = (boxs[boxs.length - 1].offsetWidth) / 2 + boxs[boxs.length - 1].offsetTop;
//    var now = document.body.scrollTop + document.documentElement.clientHeight;
//    console.log(now+"$$"+position);
//    if (now >=position){
//     console.log(12314);
//        if (now >position){
//            createNew(data);
//             waterfall();
//        }
//     //window.onscroll=null;
//
//     //    window.onscroll=isLoad();
// }
//
//}
function createNew(data){
    var main = document.getElementById("main");
    var    fragment = document.createDocumentFragment();
    var imgs=[];
    for(var i=0;i<data.dataAll.length;i++) {
         url=data.dataAll[i].src;
        var imgLoad = function (url, callback) {
            var img = new Image();
            img.src =url;
            if (img.complete) {
                callback(img);
            } else {
                img.onload = function () {
                    callback(img);
                    img.onload = null;
                };
            };
        };
        imgLoad(url,function(img){
            var box = document.createElement("div");
            box.style.opacity = "0";
            box.className = "box";
            box.innerHTML = ' <div class="pic"> <img src="' + img.src + '" ></div>';
            //console.log(1);
            fragment.appendChild(box);
        });
        //var img=new Image();
        //img.src=data.dataAll[i].src;
        ////console.log("ddd");
        ////console.log(img.src);
        //var box = document.createElement("div");
        //box.style.opacity = "0";
        //box.className = "box";
        //box.innerHTML = ' <div class="pic"> <img src="' + img.src + '" ></div>';
        //console.log(1);
        //fragment.appendChild(box);

        //img.onload=function() {
        // box.style.capity="1"
        //
        //};
        //img.onload=function(){
        //     };
            //main.appendChild(fragment);
            //    fragment.appendChild(box);
            //    var pic = document.createElement("div");
            //    pic.className = "pic";
            //    box.appendChild(pic);

            //    pic.appendChild(img);
            //    box.style.opacity=0;
        //}

    }
    return main.appendChild(fragment);
}