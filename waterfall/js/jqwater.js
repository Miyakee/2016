/**
 * Created by Administrator on 2015/11/8.
 */
$(window).on('load',function(){
waterfall();
    var data={dataAll:[{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'},{"src":'28.jpg'},{"src":'29.jpg'},{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
    $(window).on('scroll',function(){
      if(isLoad()){
          $.each(data.dataAll,function(key,value){
              var box=$('<div>').addClass('box').appendTo($('#main'));
              var pic=$('<div>').addClass('pic').appendTo(box);
              var img=$('<img>').attr('src','pic/'+$(value).attr('src')).appendTo(pic);


waterfall();
          })
      }
    })
});
function waterfall(){
    var main=$("#main");
    var boxs=$(".box");
    var screenWidth=$(window).width();
    var boxWidth=boxs.eq(0).outerWidth();
    var num=Math.floor(screenWidth/boxWidth);
    main.width(num*boxWidth);
    var arr=new Array();
    boxs.each(function(index,value){
        if(index<num){
            arr.push(boxs.eq(index).outerHeight());
         $(value).css({
             'position':'absolute',
             'left':boxWidth*index
         });
        }else{
            var min=Math.min.apply(null,arr);
            var indexMin= $.inArray(min,arr);
            $(value).css({
                'position':'absolute',
                'left':boxWidth*indexMin,
                'top':arr[indexMin]
            });
            arr[indexMin]+=boxs.eq(index).outerHeight();
        }
        console.log(arr);

    });
}

function isLoad(){
    var now=$(window).scrollTop()+$(window).height();
    var boxs=$(".box").last();
    var should=boxs.outerHeight()/2+boxs.offset().top;
    return (now>should)?true:false;}