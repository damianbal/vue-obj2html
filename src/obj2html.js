/**
 * Obj2HTML
 * 
 * 
 * @author Damian Balandowski (balandowski@icloud.com)
 * @version 0.1.0
 */

 import ObjHTML from "./components/ObjHTML"


const Obj2HTML = {

  install(Vue, options) {

    Vue.component('obj-html', ObjHTML)

  }

}

export default Obj2HTML
