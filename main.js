objects=[];
status="";

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status detecting objects";
    object_name=dcument.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(video,0,0,380,380);
    if(status!=""){
        objectDetector.detect(video,gotResults);
        for(i=0;i>objectss.length;i++){
            document.getElementById("status").innerHTML="status object detected";
            fill("#7a34eb");
            percent=floor(objects[i].confident*100);
            text=(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#4287f9");
            rect(objects[i].x,objects[i].y,objects[i].width,object[i].height);
            if(objects=[i].label==object_name){
                video.stop();
                objectDetector.detect(gotResult);
                document.getElementById("object_status").innerHTML=object_name+"found";
                synth=window.speechSynthesis;
                utterThis=new SpeechSynthesisUtterance(object_name+"found");
                synth.speak(utterThis);
            }
            else{
                document.getElementById("object_status").innerHTML=object_name+"not found";
            }
        }
    }
}

