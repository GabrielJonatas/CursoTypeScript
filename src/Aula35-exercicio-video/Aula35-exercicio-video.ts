interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  fullScreenButton: HTMLButtonElement;
  muteButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  fullScreen(): void;
  mute(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private fullScreenButton: HTMLButtonElement;
  private muteButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.fullScreenButton= videoPlayerElements.fullScreenButton;
    this.muteButton= videoPlayerElements.muteButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
    this.fullScreenButton.addEventListener('click', () => {
      this.fullScreen();
    });
    this.muteButton.addEventListener('click', () => {
      this.mute();
    });
  }

  playToggle(): void {
    if(this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause'
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play'
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }

  fullScreen(): void {
    if(this.videoPlayer.requestFullscreen) {
      this.videoPlayer.requestFullscreen();
    }
  }

  mute(): void {
    if(!this.videoPlayer.muted) {
      this.videoPlayer.muted = true;
      this.muteButton.innerText = 'Muted';
    } else {
      this.videoPlayer.muted = false;
      this.muteButton.innerText = 'Sound';
    }
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  fullScreenButton: document.querySelector('.exp') as HTMLButtonElement,
  muteButton: document.querySelector('.mute') as HTMLButtonElement
});

videoPlayer.iniciarEventos();
