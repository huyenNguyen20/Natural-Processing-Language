import "babel-polyfill"
const request = require("supertest")
const app = require("../src/server/app")


const formText = "https://huyennguyen20.github.io/Personal-Blog/html/posts/gandhi.html"


test("Testing POST route", async () => {
    await request(app)
    .post("/add")   
    .send({
        url: formText
    })
    .expect(200)
})      

test("Testing GET route", async () => {
    await request(app)
    .get("/all")   
    .send()
    .expect(200)
}) 
