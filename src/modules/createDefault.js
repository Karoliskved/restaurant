import ihopImg from '../assets/ihop.jpeg';
export default function createDefault() {
    const defaultContainer=document.createElement('div')
    defaultContainer.classList.add('defaultContainer')
    const text = document.createElement('div')
    text.classList.add('text')
    text.textContent = "Goth Ihop is the best place to get pancakes AND goths!!!!"
    const myIcon = new Image();
    myIcon.src = ihopImg;
    defaultContainer.appendChild(text)
    defaultContainer.appendChild(myIcon)
    document.querySelector('.main').appendChild(defaultContainer)
}