const contende =document.querySelector('.contende')

const moranguinho=[
   'f1','f2','f3','f4','f5',
   'f6','f7','f8','f9','f10'
] 

const b = document.querySelector('.b')
const butao = document.querySelector('.butao')
const sol = document.querySelector('.sol')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const footer = document.querySelector('footer')

let primeiro =''
let segundo =''
const Elemento = (tag,className) => {
   const Elentos = document.createElement(tag)
   Elentos.className = className
   return Elentos
}

const CriarCard = (pessonage) => {
   const card = Elemento('div','card')
   const traz = Elemento('div','traz face')
   const frente = Elemento('div','frente face')
   
   frente.style.backgroundImage=`url('../fo/moranguinho.png')`
  
  traz.style.backgroundImage=`url('../img/moranguinho/${pessonage}.png')`
   
   card.appendChild(traz)
   card.appendChild(frente)
   
   card.addEventListener('click',Revela)
   card.setAttribute('data-pessonage',pessonage)
   
   return card
}

const Loga = () => {
   const DuplicaImag=[...moranguinho,...moranguinho]
   const Sotia = DuplicaImag.sort(() => Math.random() -0.5)
   Sotia.forEach( (pessonage) =>{
      const card = CriarCard(pessonage)
      contende.appendChild(card)
   })
   
}

const Revela = ({target}) => {
   if(target.parentNode.className.includes('revela')){
      return
   }
   if(primeiro ==''){
      target.parentNode.classList.add('revela')
      primeiro=target.parentNode
   }
   else if(segundo==''){
      target.parentNode.classList.add('revela')
      segundo=target.parentNode
      ComfirmaSemesmo()
   }
}

const ComfirmaSemesmo = () => {
   const PrimeiraImg=primeiro.getAttribute('data-pessonage')
   const SegundaImg=segundo.getAttribute('data-pessonage')
   if(PrimeiraImg == SegundaImg){
      primeiro.firstChild.classList.add('acerto')
      segundo.firstChild.classList.add('acerto')
      
      primeiro=''
      segundo=''
      
      Acabo()
   }else{
      setTimeout(() =>{
         primeiro.classList.remove('revela')
         segundo.classList.remove('revela')
         
         primeiro=''
         segundo=''
      },500)
   }
}

const Acabo = () =>{
   const Completo= document.querySelectorAll('.acerto')
   if(Completo.length == 20){
      setTimeout(()=>{
         alert('parabens vc completo o jogo')

      },500)
   }
}

window.onload = () =>{
   Loga()
}

butao.addEventListener('click', () => {
   body.classList.add('PretoClaro')
   nav.classList.add('PretoClaro')
   footer.classList.add('PretoClaro')
   nav.style.borderBottom='3px solid #000'
   butao.classList.add('none')
   sol.classList.add('block')
   b.classList.add('preto')
})

sol.addEventListener('click', () => {
   body.classList.remove('PretoClaro')
   nav.classList.remove('PretoClaro')
   nav.style.borderBottom='3px solid #0B19D4'
   footer.classList.remove('PretoClaro')
   sol.classList.remove('block')
   butao.classList.remove('none')
   b.classList.remove('preto')
})

