const gtasa=['f1','f2','f3','f4','f5',
'f6','f7','f8','f9','f10'
]

const b = document.querySelector('.b')
const butao = document.querySelector('.butao')
const sol = document.querySelector('.sol')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const footer = document.querySelector('footer')

let primeiro=''
let segundo=''

const contende=document.querySelector('.contende')

const Elemento= (tag,className) => {
   const ele=document.createElement(tag)
   ele.className=className
   return ele
}

const Cria= (pessonage) =>{
   const card = Elemento('div', 'card')
   const traz = Elemento('div', 'face traz')
   const frente = Elemento('div', 'face frente')

   traz.style.backgroundImage=`url('../img/gtasa/${pessonage}.png')`
   
   card.appendChild(traz)
   card.appendChild(frente)
   
   card.addEventListener('click',Revela)
   card.setAttribute('data-pessonage',pessonage)
   
   return card
}

const Loga = () =>{
   const DuplicaGtasa=[...gtasa,...gtasa]
   const Sortia=DuplicaGtasa.sort(()=> Math.random() -0.5)
   Sortia.forEach((pessonage) =>{
         const card = Cria(pessonage)
         contende.appendChild(card)
   })

}

const Revela = ({target}) =>{
   if(target.parentNode.className.includes('revela')){
      return
   }
   if(primeiro==''){
      target.parentNode.classList.add('revela')
      primeiro=target.parentNode
   }
   else if(segundo==''){
      target.parentNode.classList.add('revela')
      segundo=target.parentNode
      ComfirmaSemesmo()
   }
}
const ComfirmaSemesmo = () =>{
   const PrimeiraImg=primeiro.getAttribute('data-pessonage')
   const SegundaImg=segundo.getAttribute('data-pessonage')
   if(PrimeiraImg == SegundaImg){
      primeiro.firstChild.classList.add('acerto')
      segundo.firstChild.classList.add('acerto')

      primeiro=''
      segundo=''
      AcaboJogo()
   }else{
      setTimeout(()=>{
         primeiro.classList.remove('revela')
         segundo.classList.remove('revela')
         
         primeiro=''
         segundo=''
      },500)
   }
}

const AcaboJogo = () =>{
   let Completo=document.querySelectorAll('.acerto')
   if(Completo.length ==20){
      alert('acabo o jogo')
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




