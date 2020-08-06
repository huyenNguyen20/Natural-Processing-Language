import "babel-polyfill"
import { postData } from "../src/client/js/postData"


const formText = "https://huyennguyen20.github.io/Personal-Blog/html/posts/gandhi.html"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the postData functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Should return an object with a valid post URL", () => {
           postData("/add", {url:formText})
           .then ( data => {
               expect(data).toBeDefined()
            })
    })

    test("Should throw an error with invalid post URL", () => {
        postData("/jakjfka", {url:formText})
        .then ( data => {
            expect(data).toBeUndefined()
         })
    })

    test("Should throw an error with invalid input URL", () => {
        postData("/add")
        .then ( data => {
            expect(data).tobeUndefined()
         })
    })

});