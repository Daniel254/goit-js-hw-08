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
  player.setCurrentTime(videoplayerCurrentTime);
};
const onTimeUpdate = data => {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds);
};

addEventListener('DOMContentLoaded', onLoad);
player.on('timeupdate', throttle(onTimeUpdate, 1000));
