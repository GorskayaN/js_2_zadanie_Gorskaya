// элементы на странице
const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children)
//const btnNext = document.querySelector('#btnNext')
//const btnPrev = document.querySelector('#btnPrev')

sliderItems.forEach(function (slide, index) {
  console.log(slide)
  //скрываем слайды кроме первого
  if (index !== 0) {
    slide.classList.add('hidden')
  }
  //индексы
  slide.dataset.index = index
  // доб data атрибут active для первого/активного слайда
  sliderItems[0].setAttribute('data-active', '')

  //Клик по слайдам
  slide.addEventListener('click', function () {
    //убираем текущ слайд
    slide.classList.add('hidden')
    slide.removeAttribute('data-active')

    //индекс след слайда
    const nextSlideIndex
    if (index + 1 === sliderItems.length) {
      nextSlideIndex = 0
    } else {
      nextSlideIndex = index + 1
    }

    //находим след слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    //открываем след слайд
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
  })
})

//btnNext.onclick = function () {
  //console.log('Next Slide')

  //скрываем текущ слайд
  //const currentSlide = slider.querySelector('[data-active]')
 // const currentSlideIndex = +currentSlide.dataset.index
  //currentSlide.classList.add('hidden')
 // currentSlide.removeAttribute('data-active')

  //показ след слайд
//const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
//const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
//nextSlide.classList.remove('hidden')
//nextSlide.setAttribute('data-active', '')
//}


//btnPrev.onclick = function () {
  //console.log('Prev Slide')

  //скрываем текущ слайд
 // const currentSlide = slider.querySelector('[data-active]')
  //const currentSlideIndex = +currentSlide.dataset.index
  //currentSlide.classList.add('hidden')
  //currentSlide.removeAttribute('data-active')

  //показ след слайд
//const nextSlideIndex = currentSlideIndex  === 0 ? sliderItems.length - 1  : currentSlideIndex - 1;
//const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
//nextSlide.classList.remove('hidden')
//nextSlide.setAttribute('data-active', '')
//}
