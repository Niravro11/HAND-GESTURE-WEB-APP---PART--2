Prediction_1 = "";

Webcam.set ({
    width: 350,
    height:350,
    image_format:'png',
    png_quality: 1080
});
camera = document.getElementById("camera");
Webcam.attach ('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0JJFP0AJc/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is " + Prediction_1;
    var utterThis = new SpeechSynthesisisUtterant(speak_data_1);
    synth.speak(utterThis);
}
