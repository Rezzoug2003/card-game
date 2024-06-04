console.log(document.querySelector(`[data-t="an8"]`));
let cs=document.querySelector(".cs")
let cont=0
let co,co2;
let time=10000,timestorage,nostorage,conter=0;
let name
let rende=Math.floor(Math.random()*100000000000)
console.log(rende)
let button=document.querySelector("button")
console.log(button)
function localStorag(){
    
if(localStorage.length){
    button.style.cssText="display: block;"
    button.onclick=()=>{
    for(let [keys,value]of Object.entries(localStorage)){
        let div=document.createElement("div");
        div.className="info-continer1" 
        // div.innerHTML+=`<div class="name"> name: <span>${keys}</span> </div>`
         div.innerHTML+=value,
        // div.appendChild(value);
         document.body.appendChild(div)

    }}
    

}
}


let body=document.querySelector("body")
let t=time/1000;
countdawin(t)

document.querySelector(".cs span").onclick=function(){
    name=prompt("What is your name ?")
    // localStorage.setItem(name,"nam")
    if(name===null||name===""){
        document.querySelector(".name span").innerHTML="Unkown";
    }else{
        document.querySelector(".name span").innerHTML=name;

    }
    document.querySelector(".cs").remove();
    co= setTimeout(() => {
         mgb.classList.add("noclick"); 
         setTimeout(() => {
            mgball.forEach((e)=>{
            
            e.classList.remove("has")
            e.classList.remove("is")

        }) 
         }, 1000);
      
        // body.prepend(cs);
        console.log(body)
        // document.querySelector(".tries span").innerHTML="0"
        
       
        clearInterval(co2)
        localStorage.setItem( rende,`<div class="name"> name: <span>${name}</span> </div><div class="time"> time: <span>${0}</span> </div><div class="tries"> Wromg tries: <span>${nostorage}</span></div>  <div class="case lost">you: <span>lost</span></div> `)
        // localStorage.setItem(timestorage,"time")
        localStorag()

     console.log(cs)
     console.log(document.querySelector(".tries span").innerHTML)
    }, time);
    co2=setInterval(()=>{
        // document.querySelector(".time span").innerHTML-=1;
        // timestorage=document.querySelector(".time span").innerHTML
        countdawin(t)

    },1000)
}
let mgb=document.querySelector(".mgb");
let mgbs=document.querySelectorAll(".mgb>div");
let mgball=Array.from(mgb.children)

// let order=[...Array(mgball.length).keys()]
let order=Array.from(Array(mgball.length).keys())
// let order=[1,11,13,15,2,3,4,5,6,7,9,8,10]
shefel(order)

console.log(order)
mgball.forEach((e,i)=>{
    e.style.order=order[i];
    e.addEventListener("click",()=>{
    
    f(e)
  if(cont===mgball.length/2){
        clearTimeout(co);
        clearInterval(co2)
 mgb.classList.add("noclick");
//  localStorage.setItem(timestorage,"time")
 localStorage.setItem( rende,`<div class="name"> name: <span>${name}</span> </div><div class="time"> time: <span>${countdawin()}</span> </div> <div class="tries"> Wromg tries: <span>${nostorage}</span></div>   <div class="case win">you: <span>Win</span></div>`)
 localStorag()
 console.log("yes") 
}
    
    })
})
function f(w){
    w.classList.add("is")
    let all=mgball.filter((q)=>{return q.classList.contains("is")})
    if(all.length===2){
    noclic();
    bi(all[0],all[1])
    }
    
}

function noclic(){
    mgb.classList.add("noclick");
    setTimeout(() => {
        mgb.classList.remove("noclick");  
        
    }, 1000);
}
function bi( b1,b2){
    let trise=document.querySelector(".tries span")
    if(b1.getAttribute( "data-t")===b2.getAttribute( "data-t")){
        b1.classList.remove("is")
        b2.classList.remove("is")

        b1.classList.add("has")
        b2.classList.add("has")
        cont++;
    }else{
        trise.innerHTML=parseInt(trise.innerHTML)+1;
        nostorage= trise.innerHTML
        setTimeout(() => {
            b1.classList.remove("is")
        b2.classList.remove("is")
        },1000);
    }

}
function shefel(err){
    let cur=err.length,temp,rendem;
    while(cur>0){
        rendem=Math.floor(Math.random()*cur)
        
        cur--;
        temp=err[cur];
        err[cur]=err[rendem];
        err [rendem]=temp

    }
    return err;
}
function countdawin(){
    let minit,segond;
    minit=parseInt(t/60);
    segond=parseInt(t%60);
    minit=minit<10?`0${minit}`:minit;
    segond=segond<10?`0${segond}`:segond;
    document.querySelector(".time span").innerHTML=`${minit}:${segond}`;
--t;
timestorage=`${minit}:${segond}`;
return timestorage
}
                                                                                                                                                                                                                                                                                                                                                                                               


