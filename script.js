let te=document.querySelector(".time");
function time(){
    let t=new Date();
    
    let h=t.getHours();
    let m=t.getMinutes();
    let s=t.getSeconds();
    let amorpm=h>12?"PM":"AM";
    if(h<10)
    h="0"+h;
    if(m<10)
    m="0"+m;
    if(s<10)
    s="0"+s;

    te.innerHTML=h+":"+m+":"+s+" "+amorpm;
}
setInterval(()=>{
    time();
},1000);