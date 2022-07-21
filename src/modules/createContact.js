export default function createContact(){
    const container=document.createElement('div');
    container.textContent="find us at 5618 Buckeystown Pike, Frederick, MD 21704, USA. Contact us at +84 666 1337 or email at GothIop@gmail.com :3"
    container.classList.add('container')
    document.querySelector('.main').appendChild(container)
}