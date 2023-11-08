var video;

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').innerHTML = document.querySelector('#slider').value;
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate); 
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate); 
});

document.querySelector("#skip").addEventListener("click", function () {
	var timestamp = video.currentTime + 10;
	if(timestamp > video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime = timestamp;
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// var rangeInput = document.querySelector("#slider").value;
// rangeInput.addEventListener("change", function(){
// 	video.volume = (rangeInput/100);
// 	document.querySelector('#volume').innerHTML = rangeInput;
// });

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});