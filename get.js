function setup() {
    noCanvas();
    let bgpage = chrome.extension.getBackgroundPage();
    let score = bgpage.score;
    let grade = bgpage.grade;
    createP("Reading Score: " + score);
    createP("Reading Grade: " + grade);
}