console.log('js work')

const $ergonomicsTable = document.querySelector('.ergonomics-table__img-table')
const $imgTableAdjusterTop = document.querySelector('.table-adjuster__item.top')
const $imgTableAdjusterBottom = document.querySelector('.table-adjuster__item.bottom')

$imgTableAdjusterBottom?.addEventListener('click', () => {
    $ergonomicsTable.classList.add('lower')
})

$imgTableAdjusterTop?.addEventListener('click', () => {
    $ergonomicsTable.classList.remove('lower')
})

window.onload = function () {
    const $holeImg = document.querySelector('.wrapper-levitation-girl__hole-img')
    $holeImg.style.width = '110%';

    const $girlImg = document.querySelector('.wrapper-girl__girl-img')
    if ($holeImg.style.width === '110%') {
        setTimeout(() => {
            $girlImg.style.transition = '1s'
            $girlImg.style.transform = 'translateY(0)'
            if ($girlImg.style.transform === 'translateY(0px)') {
                setTimeout(() => {
                    $holeImg.style.width = '100%';
                }, 1000)
            }
        }, 1000)
    }
}
