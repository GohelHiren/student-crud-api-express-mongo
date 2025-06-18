const express = require('express');
const { insertData, readData, updateData, deleteData } = require('./routes/crud');


const app = express()
app.use(express.json())

//insert-stud-data
app.post('/stud-insert', insertData);

//read-stud-data
app.get("/stud-read", readData)

//update-stud-data
app.put('/stud-update/:id', updateData)

//delete-stud-data
app.delete("/stud-del/:id", deleteData)

app.listen("8000", () => {
    console.log('http://localhost:8000');

})