import { postData } from './js/postData'
import { handleSubmit } from './js/formHandler'
import { getData } from "./js/getData"
import logoUrl from "./img/logo.png"

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const logo = document.getElementById("logo");
console.log(logoUrl)
logo.src = logoUrl;

export {
    logo,
    postData,
    handleSubmit,
    getData
}