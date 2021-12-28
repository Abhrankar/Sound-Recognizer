function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });//to get access to the microphone
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jl2CUsAqx/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log("Model Loaded");
}