const path = require ("path")
const express = require ("express")
const fetchAPI = require ("./meaningcloudAPI")
const app = express()

/* Dependencies */
const bodyParser = require("body-parser");
const cors = require("cors");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Create Environmental Variables
const dotenv = require('dotenv')
dotenv.config(); 

console.log(__dirname)

// Create an instance of express 
app.use(express.static('dist'))

// APP Routing
let analysis = undefined;

app.post("/add", postCallBack)

async function postCallBack (req,res){
  const url = req.body.url;
  
  try {
    const data =  await fetchAPI(url);
    analysis = JSON.stringify(data);
    res.status(200).send(analysis)
  } catch (e){
    res.status(400).send(e)
  }
}

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.status(200).sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/all', (req, res) => {
   try {
        if(!analysis){
            throw new Error("No Output Data")
        }
        res.status(200).send(analysis);
   } catch (e){
        res.status(404).send(e);
   }
   
})

// designates what port the app will listen to for incoming requests
module.exports = app