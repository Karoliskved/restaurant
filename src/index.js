console.log("test")

import createLayout from './modules/createLayout.js'
import createContact from './modules/createContact.js'
import removeChildren from './modules/removeChildren.js'
import createDefault from './modules/createDefault.js'
import createMenu from './modules/createMenu.js'

createLayout();
createDefault();
const main = document.querySelector(".main")
document.querySelector("#mainTab").addEventListener('click', () => { 
    removeChildren(main);
    createDefault();
   
})
document.querySelector("#menuTab").addEventListener('click', () => { 
    removeChildren(main);
    createMenu();
   
})
document.querySelector("#contactTab").addEventListener('click', () => {
    removeChildren(main);
    createContact();
})
