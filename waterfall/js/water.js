/**
 * Created by Administrator on 2015/11/6.
 */
window.onload=function(){
    this.contentDocument.documentElement.scrollTop= 0;
    waterfall();
};
window.onscroll=function(){
    var data={dataAll:[{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
    console.log(isLoad());
    if(isLoad()){
    var main = document.getElementById("main");
    var    fragment = document.createDocumentFragment();
    for(var i=0;i<data.dataAll.length;i++) {
        var box = document.createElement("div");
        box.className = "box";
        fragment.appendChild(box);
        var pic = document.createElement("div");
        pic.className = "pic";
        box.appendChild(pic);
        var img = document.createElement("img");
        img.src="pic/"+data.dataAll[i].src;
        pic.appendChild(img);
    }
        main.appendChild(fragment);
        waterfall();


    }
};
    function waterfall() {
    var main = document.getElementById("main");
    var screenWidth =document.documentElement.clientWidth;
    var boxs=getClass(main,"box");
    var boxWidth=boxs[0].offsetWidth;
    var num=Math.floor(screenWidth/boxWidth);
        main.style.width=num*boxWidth+"px";
        //console.log(num*boxWidth);
        var line=new Array();
        for(var i=0;i<boxs.length;i++)
        if(i<num){
            line.push(boxs[i].offsetHeight);
                boxs[i].style.position="absolute";
                boxs[i].style.left=boxs[1].offsetWidth*i+"px";
        }else{
            var needAdd=Math.min.apply(null,line);
            var picIndex=getIndex(line,needAdd);
            var addLeft=boxs[picIndex].offsetLeft;
            boxs[i].style.position="absolute";
            boxs[i].style.left=addLeft+"px";
            boxs[i].style.top=line[picIndex]+"px";
            line[picIndex]+=boxs[i].offsetHeight;
        }


}


function getClass(parent,cls){
    //var parentElement=document.getElementById(parent);
    var all=parent.getElementsByTagName('*');
    var Arr=new Array();
    for(var i=0;i<all.length;i++){
        if(all[i].className==cls){
            Arr.push(all[i]);
        }
    }
 return Arr;
}


function getIndex(parent,vall){
    for(var i=0;i<parent.length;i++){
        if(parent[i]==vall){
            return i;
        }
    }
}

function isLoad() {
    var main = document.getElementById("main");
    var boxs = getClass(main, "box");
    var position = (boxs[boxs.length - 1].offsetWidth) / 2 + boxs[boxs.length - 1].offsetTop;
    var now = document.body.scrollTop + document.documentElement.clientHeight;
   console.log(now+"$$"+position);
    return (now >= position)?true : false;


}