let el=document.querySelectorAll(".data-color li")
let classlist=[]
let test=document.querySelector(".test")
let rcolor=document.querySelector(".rcolor")
let jk



test.style.background=localStorage.getItem("pagecolor")
rcolor.style.color=localStorage.getItem("rycolor")


for (let i = 0; i < el.length; i++) {
    //classlist.push(el[i].getAttribute("data-color"))
    el[i].addEventListener("click",()=>{
        jk=el[i].getAttribute("data-color")
        test.style.background=jk
        rcolor.style.color=jk
        localStorage.setItem("rycolor",jk)
        localStorage.setItem("pagecolor",jk)
        
        
    },)
    
}



let bto=document.querySelector(".bto")

bto.onclick=function () {
    window.location.reload()
}






let serial=document.querySelector(".serial")
let genrate =document.querySelector(".genrate")

let klo=["iddfodfkpskgfdf;oofkroor3359-3-5302399220302-2"]

let po=""
genrate.onclick=()=>{
    let ui=klo[Math.floor(Math.random()*klo.length)]

 serial.innerHTML=ui
}


let li=document.querySelectorAll(".switcher li")
let img=document.querySelectorAll(".images img")




li.forEach((io)=>{
io.addEventListener("click",()=>{
    img.forEach(lp => {
        lp.style.display="none"

        
    });
    
    let hj= document.querySelectorAll(io.dataset.caat)
    hj.forEach((ioo) => {
        ioo.style.display="flex"
    


    });
})


})











let task=document.querySelector(".tasked")
let tasks=document.querySelector(".tasks")
let taskdev=document.querySelector(".taskdiv")

let arrayoftasks=[]

if (localStorage.getItem("tasl")) {
    arrayoftasks=JSON.parse(localStorage.getItem("tasl"))
}
setdata()

tasks.onclick=function () {
    if (task.value!=="") {

arts()
        task.value=""
    }
}

let dell=document.querySelectorAll(".dell")
let ty=document.querySelectorAll(".task")
console.log(dell)



for ( let m=0; m <dell.length; m++) {
    dell[m].onclick=function (e) {
    
    delettask(e.target.parentElement.getAttribute("data-id"))
    e.target.parentElement.remove()

        // ty.forEach(ele => {
        //    // ele.className.remove
           
        //    });
    
        }
}


function delettask(taskid) {
    arrayoftasks=arrayoftasks.filter((task)=>task.id !=taskid)
    getdata(arrayoftasks)
}

// dell.forEach(li => {
//     li.onclick=function (y) {
//         ty.target.remove(ty)
//     }
// });

// taskdev.addEventListener("click",(e)=>{
// if (e.target.classlist.contains("delL")) {
//     e.target.parentElement.remove()
    
// }

// })

function arts(tasktext) {
    
    let taska={
        id:Date.now(),
        title:task.value,
        completed:false
    } 

arrayoftasks.push(taska)

addelementtobage()
getdata()


function addelementtobage() {
    taskdev.innerHTML=""
    arrayoftasks.forEach((task) => {
        let div=document.createElement("div")
        div.className=`task`
        if (task.completed) {
            div.className="task done"
        }
        div.setAttribute("data-id",task.id)
        div.appendChild(document.createTextNode(task.title))
        
let span=document.createElement("span")
span.className="dell"
span.appendChild(document.createTextNode("delete"))
div.appendChild(span)
taskdev.appendChild(div)
console.log(div)
    });
}


function getdata() {
    window.localStorage.setItem("tasl" ,JSON.stringify(arrayoftasks))
    console.log(localStorage.tasl)
}

function setdata() {
    let set=window.localStorage.getItem("tasl")
if (set) {
    let tasksr=JSON.parse(set)
    addelementtobage(tasksr)    
}

}



















let words=[
    "Et",
    "Ok",
    "Lj",
    "Pk",
    "Pk",
    "Fl",
    "Vy",
    "Nq",
    "Xe",
    "Ak",
    "Tj",
    "Kk",
    "Dk",
    "Ll",
    "Ey",
]

let lvis={
    "easy":5,
    "normal":3,
    "hard":2

}

let defultleavelname="normal"
let defultleavelsecond=lvis[defultleavelname]
let startbutton=document.querySelector(".start")
let lvlnamespan=document.querySelector(".message .lvl")
let secondspan=document.querySelector(".message .second")
let theword=document.querySelector(".the-world")
let upcomingwords=document.querySelector(".upcoming-words")
let intx=document.querySelector(".intx")
let timeleftspan=document.querySelector(".time span")
let scoregot=document.querySelector(".score .got ")
let scoretotall=document.querySelector(".score .total")
let finishmessage=document.querySelector(".finish")






lvlnamespan.innerHTML=defultleavelname
secondspan.innerHTML=defultleavelsecond
timeleftspan.innerHTML=defultleavelsecond
scoretotall.innerHTML=words.length



intx.onpaste=function () {
    return false
}


startbutton.onclick=function () {
    startbutton.remove()
    intx.focus()
genwords()

}



function genwords() {
    
let randword=words[Math.floor(Math.random()*words.length)]
let wordindex=words.indexOf(randword)
words.splice(wordindex ,1)
theword.innerHTML=randword
upcomingwords.innerHTML=""


for (let i = 0; i < words.length; i++) {
    let div=document.createElement("div")
    let txt=document.createTextNode(words[i])
    div.appendChild(txt)
    upcomingwords.appendChild(div)
}
startplay()
}


function startplay() {
    timeleftspan.innerHTML=defultleavelsecond
    let start=setInterval(() => {
      timeleftspan.innerHTML--
      
        if (timeleftspan.innerHTML==="0") {
            clearInterval(start)


        }
       
        
        if (theword.innerHTML.toLowerCase()===intx.value.toLowerCase()) {
            intx.value=""
            scoregot.innerHTML++
if (words.length>0) {
    genwords()

}

        }

 

         else{
            
                let span=document.createElement("span")
                span.className="bad"
              let  spanert=document.createTextNode("game over")
              span.appendChild(spanert)
                finishmessage.appendChild(span)
            
          
        }
        
    },3000);
}














let cur=document.querySelector(".circule")
let cvv=document.querySelector(".cur span")


window.onscroll=function lopp () {
    if (window.scrollY>=cur.offsetTop) {
    
      cvv.style.background="conic-gradient(#880bea 100deg,#ededed 0deg)"
      
    }
}







let saturate=document.getElementById('saturate')
let contrast=document.getElementById('contrast')
let brightness=document.getElementById('brightness')
let sepia=document.getElementById('sepia')
let grayscale=document.getElementById('grayscale')
let blur=document.getElementById('blur')
let rotate=document.getElementById('hue-rotate')
let download=document.getElementById('download')
let nm=document.getElementById('nm')
let imgg=document.getElementById('imgk')
let upload=document.getElementById('upload')
let imgbox=document.querySelector(".img-box")


function resetevalue() {
    imgg.style.filter="none"
    saturate.value="100"
    contrast.value="100"
    brightness.value="100"
    sepia.value="0"
    grayscale.value="0"
    blur.value="0"
    rotate.value="0"
}

window.onload=function () {
    
    download.style.display="none"
    nm.style.display="none"
    imgbox.style.display="none"

}

upload.onchange=function () {
    resetevalue()
    download.style.display="block"
    nm.style.display="block"
    imgbox.style.display="block"
    let file=new FileReader
file.readAsDataURL(upload.files[0])
file.onload=function () {
    imgg.src=file.result
}
    
}







let filters=document.querySelectorAll(".filter ul li input")
filters.forEach(fik=>{
    fik.addEventListener("input" ,function (){
imgg.style.filter=`

saturate(${saturate.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
blur(${blur.value}px)




`
})
    
})



nm.onclick=function () {
    resetevalue()
}

download.onclick=function () {
   download.href=imgg.src 
}

}





