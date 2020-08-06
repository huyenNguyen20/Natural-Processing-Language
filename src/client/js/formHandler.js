import { postData } from "./postData"
import { getData } from "./getData"

const handleSubmit = (event)  => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value.trim()
    if(formText){
        Client.postData("/add", {url: formText})
        .then(data => {
            console.log(data)
            Client.getData("/all")
        })
    }

    
}


export { handleSubmit }
