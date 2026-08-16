const noite=document.querySelector('.noite')
const normal=document.querySelector('.normal')
const butao=document.querySelector('.butao')
const body=document.querySelector('butao')
const nav = document.querySelector('nav')
const tuturial = document.getElementById('m')
const card = document.querySelectorAll('.campo')
const a3 = document.querySelectorAll('.a3')
const fo = document.getElementById('fo')
const ava = document.querySelectorAll('.ava')
new Glider(document.querySelector('.js-carrocel'), {
  slidesToShow: 2,
  slidesToScroll:1
});
new Glider(document.querySelector('.js-carroce'), {
  slidesToShow: 2,
  slidesToScroll:1,
  tods: 'dots',
  arrow:{
     prev:'.glider-prev',
     next: 'glider-next'
  }
});

new Glider(document.querySelector('.p-carroce'), {
   slidesToShow: 2,
   slidesToScroll: 1,
   tods: 'dots',
   arrow: {
      prev: '.glider-prev',
      next: 'glider-next'
   }
});

normal.addEventListener('click',() =>{
   var tuturial = document.getElementById('m')
   var tupa= document.getElementById('tuu')
   tuturial.style.display='none'
   tupa.style.display="block"
})

let mais = 0
function Avan1(){
   let rees = document.getElementById('rees')
   let foto = document.getElementById('foto')
   let menos = document.getElementById('menos')
   let tuturial = document.getElementById('m')
   var tupa= document.getElementById('tuu')
   mais +=1
   /*rees.style.display='block'*/
   /*rees.innerHTML=mais*/
   if(mais === 1 ){
      
      foto.src='./img/tutorial/ajudar.png'
      foto.style.display='block'
   }
   if(mais === 2 ){
      
      foto.src='./img/tutorial/destaque.png'
   }
   if(mais === 3){ 
      foto.src='./img/tutorial/vaijogar.webp'
   }
   if(mais === 4){
      foto.src='./img/tutorial/jogar.webp'
   }
   if(mais === 6){
      mais --
      foto.src='./img/tutorial/ajudar.png'
      tupa.style.display="none"
      tuturial.style.display='block'
      mais = 1
   }
}

function Avan0(){
   let rees = document.getElementById('rees')
   let menos = document.getElementById('menos')
   mais -=1
   if(mais === 0){
      mais = 1
   }
   if(mais ===1){
      foto.src='./img/tutorial/ajudar.png'
      foto.style.display='block'
   }
   if(mais === 2){
      foto.src='./img/tutorial/destaque.png'
   }
   if(mais === 3){
      foto.src='./img/tutorial/vaijogar.webp'
   }
   if(mais === 4){
      foto.src='./img/tutorial/jogar.webp'
   }
}

function Sol(){
   let lua = document.getElementById('lua')
   let Sol = document.getElementById('sol')
   var tupa= document.getElementById('tuu')
   lua.style.display='block'
   Sol.style.display='none'
   nav.style.background='#474343'
   tuturial.style.background='#413e3e'
   fo.style.background='#403e3e'
   tupa.style.background='#403e3e'
   card.forEach(elemento => {
        elemento.style.background = '#232222'
    })
    a3.forEach(elemento => {
        elemento.style.background = '#474343'
    })
    ava.forEach(elemento => {
        elemento.style.background = '#474343'
    })
}

function Lua(){
   let Sol = document.getElementById('sol')
   let lua = document.getElementById('lua')
   var tupa= document.getElementById('tuu')
   Sol.style.display='block'
   lua.style.display='none'
   nav.style.background='#0B83D4'
   tuturial.style.background='#0CD5F6'
   fo.style.background='#0B19D4'
   tupa.style.background='#0B83D4'
   card.forEach(elemento => {
        elemento.style.background = '#0B83D4'
    })
    a3.forEach(elemento => {
        elemento.style.background = '#004EEB'
    })
   ava.forEach(elemento => {
        elemento.style.background ='#0CD5F6'
    })
}









   