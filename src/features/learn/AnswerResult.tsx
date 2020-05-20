import { stop, volumeHigh } from 'ionicons/icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon, IonProgressBar, IonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import Button from '../../components/Button';
import { Answer } from '../../types';
import AudioPlayer from './AudioPlayer';
import * as actions from './learnSlice';
import * as selectors from './selectors';

const customControls = ({ playing, toggle }: { playing: boolean; toggle: () => void }) => (
  <IonFab vertical="top" horizontal="end" slot="fixed">
    <IonFabButton key="play" color="medium" size="small" onClick={toggle}>
      <IonIcon icon={playing ? stop : volumeHigh} />
    </IonFabButton>
  </IonFab>
);

type AnswerResultOwnProps = {
  text: string;
  smallText?: string;
};

const mapStateToProps = (state: RootState) => {
  const { answer } = state.learn;
  return {
    title: answer === Answer.valid ? 'Correct' : 'Correct answer',
    color: answer === Answer.valid ? 'success' : 'danger',
    audioUrl: selectors.selectAudioUrl(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleClick: () => {
    dispatch(actions.nextWord({ force: true }));
  },
});

type AnswerResultProps = AnswerResultOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const AnswerResult: React.FC<AnswerResultProps> = ({ text, smallText, title, color, audioUrl, handleClick }) => {
  const player = useRef<AudioPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlayingChange = useCallback((value: boolean) => setPlaying(value), [setPlaying]);
  useEffect(() => {
    const el = player.current;
    if (el) {
      el.toggle();
    }
  }, []);

  return (
    <IonCard>
      <IonCardHeader color={color}>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-no-padding">
        <IonProgressBar type={playing ? 'indeterminate' : 'determinate'} value={0} />
        <AudioPlayer ref={player} src={audioUrl} customControls={customControls} onPlayingChange={handlePlayingChange} />
        <div className="ion-padding">
          <IonText color={color} className="normal-text">
            {text}
          </IonText>
          {smallText && <div className="ion-padding-top small-text">{smallText}</div>}
          <div className="ion-padding-top ion-text-center">
            <Button onClick={handleClick}>Next</Button>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerResult);
