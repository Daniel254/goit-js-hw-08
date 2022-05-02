import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoplayerCurrentTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);

const onLoad = () => {
  if (!videoplayerCurrentTime) {
    return;
  }
  player.setCurrentTime(videoplayerCurrentTime).catch(error => {
    switch (error.name) {
      case 'RangeError':
        console.log("The time was less than 0 or greater than the video's duration");
        break;

      default:
        console.log(`Error occurred: ${error.name}`);
        break;
    }
  });
};
const onTimeUpdate = data => {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds);
};

addEventListener('DOMContentLoaded', onLoad);
player.on('timeupdate', throttle(onTimeUpdate, 1000));
