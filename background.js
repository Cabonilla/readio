chrome.runtime.onMessage.addListener(reciever);

window.score = "";
window.grade = "";

function reciever(request, sender, sendResponse) {
    // console.log(request);
    window.score = request.number;
    window.grade = request.text;
};