leftWristX=0
 leftWristY=0
 rightWristX=0
 rightWristY=0
 noseX=0
 noseY=0
 difference=0

function preload(){

}

function setup(){
    canvas = createCanvas(800, 700)
    canvas.position(700, 100)
    video = createCapture(VIDEO)
    video.size(600, 600)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPose)
}


function draw(){
    background("blue")
    fill("yellow")
    textSize(difference)
   text("esther",noseX,noseY)
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPose(result) {
    if (result.length > 0) {
        console.log(result);
        leftWristX= result[0].pose.leftWrist.x
        leftWristY= result[0].pose.leftWrist.y
        rightWristX= result[0].pose.rightWrist.x
        rightWristY= result[0].pose.rightWrist.y
        noseX= result[0].pose.nose.x
        noseY= result[0].pose.nose.y
        difference=floor(leftWristX-rightWristX)
        document.getElementById("squarelength").innerHTML="size of the name is "+ difference +"px"
    }
}
