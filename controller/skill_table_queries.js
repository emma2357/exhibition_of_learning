const db = require("../db/db")

const getAllSkills = async(req, res) => {
    try {
        const skills = await db.select("*").from("skills");
        res.send(skills);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message}) // Something is very majorly wrong
    }
}

module.exports = {
    // ALL FUNCTIONS USED GO HERE
    getAllSkills
};