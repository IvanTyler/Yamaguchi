console.log('js work')

const $ergonomicsTable = document.querySelector('.ergonomics-table__img-table')
const $imgTableAdjusterTop = document.querySelector('.table-adjuster__item.top')
const $imgTableAdjusterBottom = document.querySelector('.table-adjuster__item.bottom')

$imgTableAdjusterBottom.addEventListener('click', () => {
    $ergonomicsTable.classList.add('lower')
})

$imgTableAdjusterTop.addEventListener('click', () => {
    $ergonomicsTable.classList.remove('lower')
})