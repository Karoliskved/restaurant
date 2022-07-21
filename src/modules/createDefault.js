import ihopImg from '../assets/ihop.jpeg';
export default function createDefault() {
    const text = document.createElement('div')
    text.classList.add('text')
    text.textContent = "Goth Ihop is the best place to get pancakes AND goths!!!!"
    const myIcon = new Image();
    myIcon.src = ihopImg;
    document.querySelector('.main').appendChild(text)
    document.querySelector('.main').appendChild(myIcon)
}