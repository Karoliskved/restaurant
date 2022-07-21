export default function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')
    const name=document.createElement('div')
    name.classList.add('name')
    name.textContent="Goth Ihop"
    const tabs=document.createElement('div')
    tabs.classList.add('tabs')
    const mainTab=document.createElement('div')
    mainTab.classList.add('item')
    mainTab.setAttribute("id", "mainTab")
    mainTab.textContent="main"
    const menuTab=document.createElement('div')
    menuTab.classList.add('item')
    menuTab.setAttribute("id", "menuTab")
    menuTab.textContent="menu"
    const contactTab=document.createElement('div')
    contactTab.classList.add('item')
    contactTab.setAttribute("id", "contactTab")
    contactTab.textContent="contact"
    header.appendChild(name)
    tabs.appendChild(mainTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)
    header.appendChild(tabs)
    return header;
}