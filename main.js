function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2t3EExivq/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result").innerHTML="I can hear "+results[0].label;
        document.getElementById("confidence").innerHTML="Accuracy: "+results[0].confidence*100+"%";
        document.getElementById("result").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        Img=document.getElementById("mainImg");

        if(results[0].label=="Barking"){
            Img.src="dog.jpeg";
        }
        else if(results[0].label=="Meowing"){
            Img.src="cat.jpeg";
        }
        else if(results[0].label=="Mooing"){
            Img.src="cow.png";
        }
        else if(results[0].label=="Roaring"){
            Img.src="lion.png";
        }
        else{
            Img.src="ear.png";
        }
    }
}
