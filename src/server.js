import app from "./index.js";

const port = 3002; 


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost/${port}`)
})