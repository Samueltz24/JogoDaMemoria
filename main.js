const noite=document.querySelector('.noite')
const normal=document.querySelector('.normal')
const butao=document.querySelector('.butao')
const body=document.querySelector('butao')
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
   alert('em breve aqui sera o tuturia')
})







   