const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelectorAll(".image-slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
        item.addEventListener('click',() =>{
            productImages[activeImageSlide].classList.remove('active');
            item.classList.add('active');
            productImageSlide.style.backgroundImage ='url('${item.src}')';
            activeImageSlide = i;
        })
})

//toggle size buttons

const sizeBtns = document.querySelectorAll('');
let checkedBtn = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click',() =>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('add');
        checkedBtn = i;
    })
})


