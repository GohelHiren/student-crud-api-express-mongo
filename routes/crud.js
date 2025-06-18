const { dbConnect } = require('../dbConection')
const { ObjectId } = require('mongodb')


let insertData = async (req, res) => {
    let myDB = await dbConnect();
    let studentCollection = myDB.collection("students")
    let { sName, sEmail } = req.body
    let obj = { sName, sEmail }
    let insertRes = await studentCollection.insertOne(obj)
    let resObj = {
        status: 1,
        msg: "Data Inserted...",
        insertRes
    }
    res.send(resObj)
}

let readData = async (req, res) => {
    let myDB = await dbConnect();
    let studentCollection = myDB.collection("students")
    let data = await studentCollection.find().toArray()
    let resObj = {
        status: 1,
        msg: "Student List...",
        data
    }
    res.send(resObj)
}

let updateData = async (req, res) => {
    let { id } = req.params //where
    let { sName, sEmail } = req.body

    if (sName !== "" && sName !== undefined && sName !== null) {
        sName = sName
    }
    if (sEmail !== "" && sEmail !== undefined && sEmail !== null) {
        sEmail = sEmail
    }

    let myDB = await dbConnect()
    let studentCollection = myDB.collection('students')
    let updateRes = await studentCollection.updateOne({ _id: new ObjectId(id) }, { $set: { sName, sEmail } })
    let resobj = {
        status: 1,
        msg: "data is updated...",
        updateRes
    }
    res.send(resobj)
}


let deleteData = async (req, res) => {

    let { id } = req.params
    let myDB = await dbConnect();
    let studentCollection = myDB.collection("students")
    let resdel = await studentCollection.deleteOne({ _id: new ObjectId(id) })
    let resobj = {
        status: "1",
        msg: "Data Delete...",
        resdel
    }
    res.send(resobj)

}


module.exports = { insertData, readData, updateData, deleteData }