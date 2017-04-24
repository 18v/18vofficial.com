/* Light YouTube Embeds by @labnol */
 /* Web: http://labnol.org/?p=27941 */

 // document.addEventListener("DOMContentLoaded",
	//   function() {
	// 		var div, n,
	// 			 v = document.getElementsByClassName("youtube-player");
	// 		for (n = 0; n < v.length; n++) {
	// 			 div = document.createElement("div");
	// 			 div.setAttribute("data-id", v[n].dataset.id);
	// 			 div.innerHTML = labnolThumb(v[n].dataset.id);
	// 			 div.onclick = labnolIframe;
	// 			 v[n].appendChild(div);
	// 		}
	//   });

 // function labnolThumb(id) {
	//   var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
	// 		play = '<div class="play"></div>';
	//   return thumb.replace("ID", id) + play;
 // }

 // function labnolIframe() {
	//   var iframe = document.createElement("iframe");
	//   var embed = "https://www.youtube.com/embed/ID?autoplay=1";
	//   iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
	//   iframe.setAttribute("frameborder", "0");
	//   iframe.setAttribute("allowfullscreen", "1");
	//   this.parentNode.replaceChild(iframe, this);
 // }
'use strict';

var playButton = document.querySelector('.video-container a');
playButton.addEventListener('click', playVideo);

function playVideo(e) {
  e.preventDefault();
  var videoContainer = this.parentNode;
  var videoUrl = this.href;
  var videoId = videoUrl.split('.com/')[1];
  var iframeUrl = undefined;

  if (videoUrl.includes('vimeo')) {
    // vimeo
    videoId = videoId.split('?')[0];
    iframeUrl = '//player.vimeo.com/video/' + videoId + '?autoplay=1';
  } else {
    // youtube
    videoId = videoId.split('v=')[1];
    iframeUrl = '//www.youtube.com/embed/' + videoId + '?autoplay=1';
  }

  videoContainer.innerHTML = '<iframe src="' + iframeUrl + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
}
