import ihopImg from '../assets/ihop.jpeg';

export default function createMain(){
    const element = document.createElement('div')
    const header = document.createElement('div')
    header.classList.add('header')
    const main=document.createElement('div')
    main.classList.add('main')
    const footer = document.createElement('div')
    footer.classList.add('footer')
    footer.textContent="contact +84 666 1337"
    const name=document.createElement('div')
    name.classList.add('name')
    name.textContent="Goth Ihop"
    const tabs=document.createElement('div')
    tabs.classList.add('tabs')
    const mainTab=document.createElement('div')
    mainTab.classList.add('item')
    mainTab.textContent="main"
    const menuTab=document.createElement('div')
    menuTab.classList.add('item')
    menuTab.textContent="menu"
    const contactTab=document.createElement('div')
    contactTab.classList.add('item')
    contactTab.textContent="contact"
    const text=document.createElement('div')
    text.classList.add('text')
    text.textContent="Goth Ihop is the best place to get pancakes AND goths!!!!"
   const myIcon=new Image();
    myIcon.src=ihopImg;
    header.appendChild(name)
    tabs.appendChild(mainTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)
    header.appendChild(tabs)
    main.appendChild(text)
     main.appendChild(myIcon)
    element.appendChild(header)
    element.appendChild(main)
    element.appendChild(footer)
    return element;
}