export default function createMenuItem(menu1, titleText, titleInfo){
    const menuItem=document.createElement('div')
    menuItem.classList.add('menuItem')
    const  menuImage1= new Image()
    menuImage1.src=menu1;
    const textCont=document.createElement('div')
    textCont.classList.add('textCont')
    const title=document.createElement('div')
    title.classList.add('title')
    title.textContent=titleText;
    const info=document.createElement('div');
    info.classList.add('info')
    info.textContent=titleInfo
    textCont.appendChild(title);
    textCont.appendChild(info)
    menuItem.appendChild(menuImage1)
    menuItem.appendChild(textCont)
    return menuItem
}