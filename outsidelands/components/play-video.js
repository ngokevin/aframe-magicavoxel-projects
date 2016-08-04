AFRAME.registerComponent('play-video', {
  schema: {
    target: {type: 'selector'},
    src: {type: 'string'},
    on: {default: 'click'},
  },

  init: function () {
    var data = this.data;

    this.el.addEventListener(data.on, function () {
      data.target.setAttribute('src', data.src);
      data.target.play();
    });
  }
});
