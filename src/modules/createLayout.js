import createMain from './createMain.js'
import createHeader from './createHeader.js'
import createFooter from './createFooter.js'

export default function createLayout() {
    document.querySelector("#content").appendChild(createHeader());
    document.querySelector("#content").appendChild(createMain());
    document.querySelector("#content").appendChild(createFooter());
}
