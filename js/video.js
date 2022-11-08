var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.loop = false; 
	video.autoplay = false; 
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate *= .9; 
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate +  (video.playbackRate/9);
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime  + 10 > video.duration) 
		video.currentTime = 0; 
	else {
		video.currentTime += 10; 
	}
	console.log("Video current time is " + video.currentTime); 
});

document.querySelector("#mute").addEventListener("click", function() {
	if(!video.muted) {
		console.log("Mute");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		console.log("Unmute");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("The current value is " + video.volume)
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});