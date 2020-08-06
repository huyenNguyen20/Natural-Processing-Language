import "babel-polyfill"
const fetchAPI = require ("../src/server/meaningcloudAPI")


const formText = "https://huyennguyen20.github.io/Personal-Blog/html/posts/gandhi.html"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the fetch API functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Should fetch data", async () => {
        await fetchAPI(formText)
        .then(data => {
            expect(data).toBeDefined()
        })
})});