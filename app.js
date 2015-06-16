function toggleFullScreen(element) {
  if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if(!element.fullscreenElement && !element.mozFullScreenElement && !element.webkitFullscreenElement && !element.msFullscreenElement ) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
        element.load();
        element.muted = false;
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        element.load();
        element.muted = false;
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        element.load();
        element.muted = false;
      } else if (element.webkitRequestFullscreen){
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        element.load();
        element.muted = false;
      }
    }
  }
     else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        element.muted = true;
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        element.muted = true;
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        element.muted = true;
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        element.muted = true;
      }
    }
}

function muteVideos() {
  $('video').each(function() {
    $(this).get(0).muted = true;
  });
};

$(window).load(function() {
  $("body").fadeIn("slow");
});



$(document).ready(function() {

  // Upon the page being loaded, all of the videos are muted
 muteVideos();

  $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(){
    if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      muteVideos();
    };
  });
  // On click, the targeted video is set to full screen mode. Depending on what type of browser is being used, a certain Fullscreen call is made. If the video is currently in fullscreen video, then on click, the Fullscreen mode will be cancelled and the targeted video will once again be muted.
  $('img').click(function(event) {
    var $target = $(event.target)
    var $video = $('video').get(0)
    toggleFullScreen($video);
  });

  $('video').click(function(event) {
    var $target = $(event.target);
    toggleFullScreen($target);
  })
});
