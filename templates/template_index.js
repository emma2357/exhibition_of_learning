var express = require('express');
const path = require("path")
var app = express();

// PUBLIC WEBSITE

app.use(express.static(path.join(__dirname, 'htmlFiles')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'htmlFiles', 'homePage.html'));
});

app.get('/about_us', async(req, res) => {
    res.sendFile(path.join(__dirname, 'htmlFiles', 'aboutUsPage.html'));
});

app.get('/student_skills', async(req, res) => {
    // get info about cs skills
    res.sendFile(path.join(__dirname, 'htmlFiles', 'studentSkillsPage.html'));
});

app.get('/cs_at_andover', async(req, res) => {
    // get info about cs classes?
    res.sendFile(path.join(__dirname, 'htmlFiles', 'csAtAndoverPage.html'));
});

// search results page
app.get('/search?:SearchParameters', async(req, res) => {
    // parse the search parameters
    // send list of exhibitions that satisfy search parameters to file
    res.sendFile(path.join(__dirname, 'htmlFiles', 'example.html'));
});

// presentable search results page
app.get('/search_results=:SearchParameters', async(req, res) => {
    // parse the search parameters
    // send list of exhibitions that satisfy search parameters to file
    // get info about the student!
    res.sendFile(path.join(__dirname, 'htmlFiles', 'example.html'));
});

// ADMIN SIDE
app.get('/admin', async(req, res) => {
    res.sendFile(path.join(__dirname, 'htmlFiles', 'homePage.html'));
});

app.get('/admin/search?:SearchParameters', async(req, res) => {
    // parse the search parameters
    // send list of exhibitions that satisfy search parameters to file
    res.sendFile(path.join(__dirname, 'htmlFiles', 'homePage.html'));
});

app.get('/admin/edit/:ExhibitionId', async(req, res) => {
    // parse the search parameters
    // send list of exhibitions that satisfy search parameters to file
    res.sendFile(path.join(__dirname, 'htmlFiles', 'homePage.html'));
});

app.get('/admin/create', async(req, res) => {
    res.sendFile(path.join(__dirname, 'htmlFiles', 'homePage.html'));
});

app.get('/admin/manage_accounts', async(req, res) => {
    res.sendFile(path.join(__dirname, 'htmlFiles', 'homePage.html'));
});

app.listen(3000);