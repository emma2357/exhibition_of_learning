const db = require("../db/db")

const getAllStudents = async(req, res) => {
    try {
        const students = await db.from("users")
            .where("user_type", "Student");
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

const getAllTeachers = async(req, res) => {
    try {
        const teachers = await db.select("*")
            .from("users")
            .where("user_type", "Teacher");
        res.send(teachers);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}



module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllStudents,
    getAllTeachers
};