/* Function to POST data */
const postData = async (url = "", data = undefined) => {
    
    try {
        if(!data){
            throw new Error("No Input Data")
        }
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const newData = await response.json();
        return newData;

    } catch (e) {
        console.log(e)
    }
}

export {postData}
