/**
 * Created by Administrator on 2016/2/6.
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 有bug n必须小于5
 */
var convert = function(s, numRows) {
    var str=s;
    var arr=str.split("");
    var len=arr.length;
    var n=2*numRows-2;
    if(len%n>0){
        var col=len/n*(numRows-1)+1;
    }else{
        var col=len/n*(numRows-1);
    }
//        var c=0;
//        console.log(arr[c]);
    var m, j,i,a,p,w,f;
    var out=[];
    m=0;
    p=0;w=0;f=0;
    for(i=0;i<numRows;i++){
        m=0;
        out[i]=new Array();
        for( j=0;j<col;j++){
            if(j%(numRows-1)==0){
                var q=m*(2*numRows-2)+i;
                if(arr[q]== undefined){arr[q]=" ";}
                out[i][j]=arr[q];
                m++;}
            else if(j%(numRows-1)==1&&i==numRows-2){
                var q=p*(2*numRows-2)+4;
                if(arr[q]== undefined){arr[q]=" ";}
                out[i][j]=arr[q];
                p++;

            }else if(j%(numRows-1)==2&&i==numRows-3){
                var q=w*(2*numRows-2)+5;
                if(arr[q]== undefined){arr[q]=" ";}
                out[i][j]=arr[q];
                w++;

            }else if(j%(numRows-1)==3&&i==numRows-4){
                var q=f*(2*numRows-2)+5;
                if(arr[q]== undefined){arr[q]=" ";}
                out[i][j]=arr[q];
                f++;

            }else{
                out[i][j]=" ";
            }

        }
    }
    return out;
};
var k= convert("miyakeelikemeetd1111f3we234",5);
console.log(k);