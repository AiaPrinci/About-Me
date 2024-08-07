let btn = document.querySelector('.sun');
let body = document.querySelector('.body');
let text = document.querySelector('.title');
let mainImg = document.querySelector('.img');
console.log(mainImg)

btn.addEventListener('click', () => {
    btn.classList.toggle('moon');
    body.classList.toggle('dark');
    text.classList.toggle('dark-text');
    mainImg.classList.toggle('img-dark');
});