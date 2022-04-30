import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

const onFirstLoad = () => {
  if (!videoplayerCurrentTime) {
    return;
  }
  player.setCurrentTime(videoplayerCurrentTime);
};
const onTimeUpdate = data => {
  console.log('timeupdate data', data.seconds);

  localStorage.setItem('videoplayer-current-time', data.seconds);
};

addEventListener('DOMContentLoaded', onFirstLoad);
player.on('timeupdate', throttle(onTimeUpdate, 1000));
