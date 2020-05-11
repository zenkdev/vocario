/* eslint-disable jsx-a11y/media-has-caption */
import '../../app/ripple.scss';

import { stop, volumeHigh } from 'ionicons/icons';
import React, { useCallback, useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { connect } from 'react-redux';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon, IonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import Button from '../../components/Button';
import { Answer } from '../../types';
import * as actions from './learnSlice';
import * as selectors from './selectors';

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
  const ref = useRef<ReactAudioPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = useCallback(() => {
    const el = ref.current as any;
    if (el) {
      if (playing) {
        el.audioEl.current.pause();
      } else {
        el.audioEl.current.play();
      }
    }
  }, [playing]);

  return (
    <IonCard>
      <IonCardHeader color={color}>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <ReactAudioPlayer
          ref={ref}
          src={audioUrl}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          autoPlay
        />
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton color="medium" size="small" className={playing ? 'ripple-button' : undefined} onClick={toggle}>
            <IonIcon icon={playing ? stop : volumeHigh} />
          </IonFabButton>
        </IonFab>
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
