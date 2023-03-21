const minecraft =[
   'm1','m2','m3','m4','m5',
   'm6','m7','m8','m9','m10'
]

const contende = document.querySelector('.contende')

const Elementos = (tag,className) => {
   const Elemento = document.createElement(tag)
   Elemento.className = className
   return Elemento
}

const b = document.querySelector('.b')
const butao = document.querySelector('.butao')
const sol = document.querySelector('.sol')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const footer = document.querySelector('footer')

let primeiro =''
let segundo =''
const CriarCarta = (personage) => {
   const card =Elementos('div', 'card')
   const traz =Elementos('div', 'traz face')
   const frente =Elementos('div', 'frente face')
   
   traz.style.backgroundImage=`url('../img/minecraft/${personage}.png')`
   frente.style.backgroundImage=`url('../fo/minecraft.png')`
   
   card.appendChild(traz)
   card.appendChild(frente)
   
   card.addEventListener('click',Revela)
   card.setAttribute('data-personage',personage)
   return card
}

const Loga = () => {
   const DuplicaImg =[...minecraft,...minecraft]
   const Sortia = DuplicaImg.sort(() => Math.random() -0.5) 
   
   Sortia.forEach((personage) =>{
      const card = CriarCarta(personage)
      contende.appendChild(card)
   })
}

const Revela = ({target}) => {
   if(target.parentNode.className.includes('revela')){
      return
   }
   if(primeiro ==''){
      target.parentNode.classList.add('revela')
      primeiro= target.parentNode
   }
   else if(segundo ==''){
      target.parentNode.classList.add('revela')
      segundo= target.parentNode
      ConfirmaSeMesmo()
   }
}

const ConfirmaSeMesmo = () => {
   const PrimeiraImg = primeiro.getAttribute('data-personage')
   const SegundaImg = segundo.getAttribute('data-personage')
   if(PrimeiraImg == SegundaImg){
      primeiro.firstChild.classList.add('acerto')
      segundo.firstChild.classList.add('acerto')
      
      primeiro=''
      segundo=''
      Acabo()
   }else{
      setTimeout(()=>{
         primeiro.classList.remove('revela')
         segundo.classList.remove('revela')
         
         primeiro=''
         segundo=''
      },500)
   }
}

const Acabo = () => {
   const completo = document.querySelectorAll('.acerto')
   if(completo.length == 20){
      setTimeout(() => {
         alert('parabens você completo o jogo')

      },700)
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