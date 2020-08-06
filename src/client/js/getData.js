/* Function to GET data */
const getData = async (url) => {
    const res = await fetch(url);
    try {
        //Getting Project Data
        const data = await res.text();
        const analysis = JSON.parse(data)
        const validCode = analysis.status.code

        //Clearing UI
        const results = document.getElementById("results")
        results.innerHTML = "";
        results.style.display = "block";

        let markup;
        //Updating UI
        if(validCode === "0"){
            markup = 
            `<h3>Form Results</h3>
            <ol>
                <li>Agreement: <span>${analysis.agreement} </span></li>
                <li>Confidence: <span>${analysis.confidence} </span></li>
                <li>Irony: <span>${analysis.irony}</span></li>
                <li>Subjectivity: <span>${analysis.subjectivity}</span></li>
            <ol>`
        } else {
            markup = 
            `<h3>Form Results</h3>
            <p> Invalid Request !!! </p>
            <p> Please enter an valid URL. </p>
            `
        }
        
        results.insertAdjacentHTML("beforeend", markup)
    }
    catch (e) {
        console.log("Error", e)
    }
}

export {getData}