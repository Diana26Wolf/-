function startComparing() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mTN5qHljz/model.json', modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        randomR = Math.floor(Math.random() * 255) + 1;
        randomG = Math.floor(Math.random() * 255) + 1;
        randomB = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'My confidence is -' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        document.getElementById("accuracy").style.color = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
        img1 = document.getElementById("one");
        img2 = document.getElementById("two");
        img3 = document.getElementById("three");
        img4 = document.getElementById("four");
        if (results[0].label == "Clap") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (results[0].label == "Snap") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        } else if (results[0].label == "Flipping of Pages") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        } else if (results[0].label == "Background Noises") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}