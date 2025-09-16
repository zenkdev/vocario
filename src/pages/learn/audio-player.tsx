import React, { createRef, type JSX } from 'react';
import ReactAudioPlayer from 'react-audio-player';

type AudioPlayerProps = {
  src?: string;
  autoPlay?: boolean;
  controls?: boolean;
  customControls?: (props: { playing: boolean; toggle: () => void }) => JSX.Element;
  onPlayingChange?: (playing: boolean) => void;
};

type AudioPlayerState = {
  playing: boolean;
};

class AudioPlayer extends React.Component<AudioPlayerProps, AudioPlayerState> {
  private readonly ref = createRef<ReactAudioPlayer>();

  constructor(props: AudioPlayerProps) {
    super(props);
    this.state = { playing: false };
  }

  public toggle = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const el = this.ref.current as any;
    const { playing } = this.state;
    if (el) {
      if (playing) {
        el.audioEl.current.pause();
      } else {
        el.audioEl.current.load();
        el.audioEl.current.play();
      }
    }
  };

  private setPlaying = (playing: boolean) => {
    const { onPlayingChange } = this.props;

    this.setState({ playing });
    if (onPlayingChange) {
      onPlayingChange(playing);
    }
  };

  render() {
    const { src, autoPlay, controls, customControls } = this.props;
    const { playing } = this.state;
    return (
      <>
        <ReactAudioPlayer
          ref={this.ref}
          src={src}
          preload="auto"
          onPlay={() => this.setPlaying(true)}
          onPause={() => this.setPlaying(false)}
          onEnded={() => this.setPlaying(false)}
          autoPlay={autoPlay}
          controls={controls}
        />
        {customControls && customControls({ playing, toggle: this.toggle })}
      </>
    );
  }
}

export default AudioPlayer;
