function readingLevel () {

    //new_count counts the amount of syllables in a 
    function new_count(word) {
        word = word.toLowerCase();                                     //word.downcase!
        if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
            word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
            return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
        }
    
    function gradeLevel(score) {
        if (score <= 30.0) {
            grade = "College Graduate";
        } else if (score <= 50.0) {
            grade = "College";
        } else if (score <= 60.0) {
            grade = "10th to 12th Grade";
        } else if (score <= 70.0) {
            grade = "8th to 9th Grade";
        } else if (score <= 80.0) {
            grade = "7th Grade";
        } else if (score <= 90.0) {
            grade = "6th Grade";
        } else if (score <= 100.0) {
            grade = "5th Grade";
        } else {
            grade = "Below 5th Grade";
        }
        return grade;
    }
    
    var wCount = 0;
    var senCount = 0;
    var syllCount = 0;
    
    var paragraphs = document.getElementsByTagName("p");
        //loop through paragraph content
        for (var i = 0; i < paragraphs.length; i++) {
            content = paragraphs[i].textContent;
            text = content.trim().replace(/\[(\d||\d\d||\d\d\d)\]/g, "");
            words = text.split(" ").length;
            syllables = new_count(text);
            sentences = text.trim().split(/[\.\?\!]\s/).length;
            wCount += words;
            senCount += sentences;
            syllCount += syllables;
            // console.log(text);
        }
        
    avgWordsPerSen = wCount/senCount;
    avgSyllPerWord = syllCount/wCount;
    
    calcOne = avgWordsPerSen * 1.015;
    calcTwo = avgSyllPerWord * 84.6;
    
    finalCalc = 206.835 - calcOne - calcTwo;
    readingGrade = gradeLevel(finalCalc);
    
    // console.log(finalCalc);
    // console.log(readingGrade);

    var message = { text: readingGrade,
                    number: finalCalc };
    chrome.runtime.sendMessage(message);
    }

    readingLevel();


