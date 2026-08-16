const contende= document.querySelector('.contende')
let primeiro =''
let segundo =''
const b = document.querySelector('.b')
const butao = document.querySelector('.butao')
const sol = document.querySelector('.sol')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const footer = document.querySelector('footer')
const gta5=[
   'b01','b02','b03','b04','b05',
   'b06','b07','b08','b09','b10'
]

const Elemento = (tag,className) => {
   const Elementos=document.createElement(tag)
   Elementos.className=className
   return Elementos
}

const CriarCard = (pessonage) => {
   const card =Elemento('div', 'card')
   const traz =Elemento('div', 'face traz')
   const frente =Elemento('div', 'face frente')
   
   frente.style.backgroundImage=`url('../fo/bem10.png')`
   
   traz.style.backgroundImage=`url('../img/bem10/${pessonage}.png')`
   
   card.appendChild(traz)
   card.appendChild(frente)
   
   card.addEventListener('click',Revela)
   card.setAttribute('data-pesonage',pessonage)
   return card
}

const Loga = () =>{
   const DuplicaImg=[...gta5,...gta5]
   const Sotia=DuplicaImg.sort(()=> Math.random() -0.5)
   Sotia.forEach ((pessonage) => {
      const card=CriarCard(pessonage)
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
   else if(segundo ==''){
      target.parentNode.classList.add('revela')
      segundo=target.parentNode
      ComfirmaSemesmo()
   }
}

const ComfirmaSemesmo = () =>{
   const PrimeiraImg=primeiro.getAttribute('data-pesonage')
   const SegundaImg=segundo.getAttribute('data-pesonage')
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

const Acabo = () =>{
   const Completo=document.querySelectorAll('.acerto')
   
   if(Completo.length ==20){
      alert('parabens vc completo')
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
