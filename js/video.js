var video = document.querySelector('#player1');

window.addEventListener("load", function() { //load
	console.log("Good job opening the window")

});

document.querySelector('#play').addEventListener('click', function() { //play
	video.play();
	console.log('Video played');
	document.getElementById('volume').innerhtml=video.volume*100+'%';
});

document.querySelector('#pause').addEventListener('click', function(){ //pause
	video.pause();
	console.log('Video paused');
});

document.querySelector('#slower').addEventListener('click', function() { //slower
	video.playbackRate -= .05;
	console.log('Video playback rate:' + video.playbackRate);
});

document.querySelector('#faster').addEventListener('click', function() { //faster
	video.playbackRate += .05;
	console.log("Video playback rate:" + video.playbackRate);
});

document.querySelector('#skip').addEventListener('click', function() { //skip
	console.log('Original location:' + video.currentTime); 
	if (video.currentTime < video.duration-15) {
		video.currentTime += 15; 
	}
	else {
		video.currentTime = 0;
		console.log('Starting from beginning');
	}

	video.play();
	console.log('Video time:' + video.currentTime); 
});

document.querySelector('#mute').addEventListener('click', function() { //mute-unmute
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
	};
});

document.querySelector('#slider').addEventListener('click', function() { //volume slider
	console.log(this.value);
	video.volume=this.value/100;
	document.querySelector('#volume').innerHTML=this.value+'%'
});

document.querySelector('#vintage').addEventListener('click', function() { //old school style
	video.classList.add('oldSchool')
});

document.querySelector('#orig').addEventListener('click', function() { //revert to original style
	video.classList.remove('oldSchool')
});