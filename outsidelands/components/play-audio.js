AFRAME.registerComponent('play-audio', {
  schema: {
    src: {type: 'selector'},
    on: {default: 'click'}
  },

  init: function () {
    var data = this.data;

    this.el.addEventListener(data.on, function () {
      // Pause current audio.
      var audioEls = document.querySelectorAll('audio');
      for (var i = 0; i < audioEls.length; i++) {
        audioEls[0].pause();
      }

      data.src.play();
    });
  }
});
