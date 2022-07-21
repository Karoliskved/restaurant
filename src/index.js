console.log("test")
import createMain from './modules/createMain.js'

document.querySelector("#content").appendChild(createMain());
document.querySelector("#mainTab").addEventListener('click', ()=> {console.log("main")})
document.querySelector("#menuTab").addEventListener('click', ()=> {console.log("menu")})
document.querySelector("#contactTab").addEventListener('click', ()=> {console.log("contact")})
