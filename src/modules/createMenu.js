import menu1 from '../assets/menu1.jpeg';
import menu2 from '../assets/menu2.jpeg';
import menu3 from '../assets/menu3.jpeg';
import createMenuItem from './createMenuItem.js'
export default function createMenu(){
    const menuCont=document.createElement('div')
    menuCont.classList.add('menuCont')
    menuCont.appendChild(createMenuItem(menu1, "Devil pancakes", "Delicious pancakes with a cool pentagram made out of strawberry jam"))
    menuCont.appendChild(createMenuItem(menu2, "Death waffles", "Terrifingly delicious waffles with BLOOD(berry jam)"))
    menuCont.appendChild(createMenuItem(menu3, "Darkness pancakes", "Moody pancakes perfect for fall or a moody mood. Now with blueberries!"))
    document.querySelector('.main').appendChild(menuCont)

}