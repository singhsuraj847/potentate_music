let index = 0;
let info = document.querySelectorAll('.music-info')


setTimeout(() => {
    info[index].classList.add("active")
}, 200);

let isSliding = false

slide = () => {
    if (isSliding) return

    isSliding = true

    let currMusic = document.querySelector('.music-info.active')
    currMusic.classList.remove('active')

    index = index + 1 > info.length - 1 ? 0 : index + 1
    info[index].classList.add('active')

    let listAlbum = document.querySelectorAll('.slide')
    let slider = document.querySelector('.slider')

    let reverseItem = Array.from(listAlbum).slice().reverse()

    left = reverseItem[0].offsetLeft + 'px'
    height = reverseItem[0].offsetHeight + 'px'
    width = reverseItem[0].offsetWidth + 'px'
    zIndex = reverseItem[0].style.zIndex

    console.log(height);

    reverseItem.forEach((el, idx) =>{
        if(idx < listAlbum.length - 1) {
            el.style.left = reverseItem[idx + 1].offsetLeft + 'px'
            el.style.height = reverseItem[idx + 1].offsetHeight + 'px'
            el.style.width = reverseItem[idx + 1].offsetWidth + 'px'
            el.style.zIndex = reverseItem[idx + 1].style.zIndex
            el.style.transform = 'unset'
            el.style.opacity = 1
        }
        if(idx === listAlbum.length - 1){
                el.style.transform = `scale(1.5)`
                el.style.opacity = '0'

                let cln = el.cloneNode(true)

                setTimeout(() => {
                    el.remove()

                    cln.style.transform = 'scale(0)'
                    cln.style.left = left
                    cln.style.height = height
                    cln.style.width = width
                    cln.style.opacity = '0'
                    cln.style.zIndex = '0'
                    cln.style.animation = 'unset'

                    slider.appendChild(cln)

                    isSliding = false
                }, 1000)
            }
    })

    setTimeout(() => {
        isSliding = false
    }, 1000)
}

let slideControl = document.querySelector('.slide-control')
slideControl.onclick = () => {
    slide()
}

let slideImg = document.querySelector('.home-bg')

let images = new Array(
    "/static/img/img4.jpg",
    "/static/img/img2.jpg",
    "/static/img/img3.jpg"

    )

let len = images.length;
console.log(len)
let i = 0;

function slides(){
    if(i > len - 1){
        i = 0;
    }
    slideImg.style.backgroundImage = `url(${images[i]})`;   /*url({% static 'img/m1.jpeg' %})*/
    i++;

    setTimeout('slides()', 3000)
}







