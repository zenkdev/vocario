import '../../app/ripple.scss';

import { stop, volumeHigh } from 'ionicons/icons';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon, IonText } from '@ionic/react';

import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';
import Button from '../../components/Button';
import useAudio from '../../hooks/useAudio';
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
    dispatch(actions.nextWord());
  },
});

type AnswerResultProps = AnswerResultOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const AnswerResult: React.FC<AnswerResultProps> = ({ text, smallText, title, color, audioUrl, handleClick }) => {
  const { playing, toggle } = useAudio(audioUrl);
  useEffect(toggle, [toggle]);

  return (
    <IonCard>
      <IonCardHeader color={color}>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton color="medium" size="small" onClick={() => toggle()} className={playing ? 'ripple-button' : undefined}>
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
