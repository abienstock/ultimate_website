document.addEventListener("touchstart", function() {}, false);

var tag = document.createElement('script');
tag.id = 'iframe';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
	    events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
	    }
	});
}

function onPlayerReady(event) {

}


function onPlayerStateChange(event) {
    if (event.data === 0) {
	var vid = document.getElementById('video');
	var img = document.getElementById('team_pic');
	vid.style.display = 'none';
	img.style.display = 'inline';
	var button = document.getElementById('img_button');
	button.onclick= function() {
	    img.style.display = 'none';
	    vid.style.display = 'block';
	}
    }
}

