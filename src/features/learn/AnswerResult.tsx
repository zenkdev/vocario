import '../../app/ripple.scss';

import { stop, volumeHigh } from 'ionicons/icons';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon, IonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import { If } from '../../components';
import Button from '../../components/Button';
import { Answer } from '../../types';
import AudioPlayer from './AudioPlayer';
import * as actions from './learnSlice';
import * as selectors from './selectors';

type ButtonProps = { onClick: () => void };

const PlayButton: React.FC<ButtonProps> = ({ onClick }) => (
  <IonFabButton key="play" color="medium" size="small" onClick={onClick}>
    <IonIcon icon={volumeHigh} />
  </IonFabButton>
);

const StopButton: React.FC<ButtonProps> = ({ onClick }) => (
  <IonFabButton key="stop" color="medium" size="small" className="ripple-button" onClick={onClick}>
    <IonIcon icon={stop} />
  </IonFabButton>
);

const customControls = ({ playing, toggle }: { playing: boolean; toggle: () => void }) => (
  <IonFab vertical="top" horizontal="end" slot="fixed">
    <If condition={playing} then={<StopButton onClick={toggle} />} else={<PlayButton onClick={toggle} />} />
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
      <IonCardContent>
        <AudioPlayer ref={player} src={audioUrl} customControls={customControls} />
        <IonText color={color} className="normal-text">
          {text}
        </IonText>
        {smallText && <div className="ion-padding-top small-text">{smallText}</div>}
        <div className="ion-padding-top ion-text-center">
          <Button onClick={handleClick}>Next</Button>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerResult);
