// eslint-disable-next-line import/no-extraneous-dependencies
import { Color, ToastOptions } from '@ionic/core';

import Observable, { Subscriber } from './Observable';

/*
export interface ToastOptions {
    header?: string;
    message?: string;
    cssClass?: string | string[];
    duration?: number;
    buttons?: (ToastButton | string)[];
    showCloseButton?: boolean;
    closeButtonText?: string;
    position?: 'top' | 'bottom' | 'middle';
    translucent?: boolean;
    animated?: boolean;
    color?: Color;
    mode?: Mode;
    keyboardClose?: boolean;
    id?: string;
    enterAnimation?: AnimationBuilder;
    leaveAnimation?: AnimationBuilder;
}
export interface ToastButton {
    text?: string;
    icon?: string;
    side?: 'start' | 'end';
    role?: 'cancel' | string;
    cssClass?: string | string[];
    handler?: () => boolean | void | Promise<boolean>;
}
*/
type ToastrOptions = {
  position?: 'top' | 'bottom' | 'middle';
  color?: Color;
};

class ToastService {
  private observable = new Observable<ToastOptions>();

  public ERROR_DEFAULT_TIMEOUT: number | undefined = 3000;

  public onNextToast(subscriber: Subscriber<ToastOptions>) {
    return this.observable.subscribe(subscriber);
  }

  public showInfo(message: string, duration?: number) {
    this.showToast({
      message,
      duration,
      color: 'primary',
      showCloseButton: true,
    });
  }

  public showError(error: string | Error, timeout?: number) {
    const message = typeof error === 'string' ? error : error.message;
    const duration = timeout != null ? timeout : this.ERROR_DEFAULT_TIMEOUT;
    this.showToast({
      message,
      duration,
      color: 'danger',
      showCloseButton: true,
    });
  }

  public showToast(options: ToastOptions) {
    this.observable.next(options);
  }
}

export default new ToastService();
