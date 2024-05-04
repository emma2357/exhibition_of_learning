const db = require("../db/db")

const getAllCourses = async(req, res) => {
    try {
        const courses = await db.select("*").from("courses")
        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

const getUniqueCourseNames = async(req, res) => {
    try {
        const courses = await db.select("course_name").from("courses")
            .distinct();

        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

// FIX for accounting for spaces
const getCourseIdFromCourseName = async(req, res) => {
    const course_name = parseInt(req.params.course_name);

    try {
        const courses = await db.select("course_id").from("courses")
            .where("course_name", course_name)

        res.send(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

const getAcademicYears = async(req, res) => {
    try {
        const years = await db.select("academic_year").from("courses")
            .distinct();
        
        res.send(years);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllCourses,
    getUniqueCourseNames,
    getCourseIdFromCourseName,
    getAcademicYears
};