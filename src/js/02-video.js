import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

console.log(iframePlayer);

iframePlayer.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

let lastTime = localStorage.getItem('videoplayer-current-time');

if (lastTime !== null) {
  iframePlayer.setCurrentTime(lastTime);
} else {
  iframePlayer.setCurrentTime(0);
}

// iframePlayer.on(
//   'timeupdate',
//   throttle(function (data) {
//     console.log(data.seconds);
//   }, 1000)
// );
