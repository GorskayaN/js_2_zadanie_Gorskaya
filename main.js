// элементы на странице
const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('#btnNext')
const btnPrev = document.querySelector('#btnPrev')

sliderItems.forEach(function (slide, index) {
  console.log(slide)
  //убираем слайды кроме первого
  if (index !== 0) slide.classList.add('hidden')

  //добавляем индексы
  slide.dataset.index = index

  // доб data атрибут active для первого/активного слайда
  sliderItems[0].setAttribute('data-active', '')

  //клик по слайдам
  slide.addEventListener('click', function () {
    //скрываем текущ слайд
    slide.classList.add('hidden')
    slide.removeAttribute('data-active')

    // рассчитываем индекс след слайда
    const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1

    // находим след слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    //показываем след слайд
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
  })
})

btnNext.onclick = function () {
  console.log('next slide')

  //скрывает текущий слайд
  const currentSlide = slider.querySelector('[data-active]')
  const currentSlideIndex = +currentSlide.dataset.index

  currentSlide.classList.add('hidden')
  currentSlide.removeAttribute('data-active')

  //показывает след слайд
  const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
  nextSlide.classList.remove('hidden')
  nextSlide.setAttribute('data-active', '')
}

btnPrev.onclick = function () {
  console.log('prev slide')

  //скрывает текущий слайд
  const currentSlide = slider.querySelector('[data-active]')
  const currentSlideIndex = +currentSlide.dataset.index

  currentSlide.classList.add('hidden')
  currentSlide.removeAttribute('data-active')

  //показывает след слайд
  const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
  nextSlide.classList.remove('hidden')
  nextSlide.setAttribute('data-active', '')
}
