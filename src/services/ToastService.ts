// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastOptions } from '@ionic/core';
import Observable from 'zen-observable';

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

class ToastService {
  private observable: Observable<ToastOptions>;

  private subscriber!: ZenObservable.SubscriptionObserver<ToastOptions>;

  constructor() {
    this.observable = new Observable<ToastOptions>(subscriber => {
      this.subscriber = subscriber;
    });
  }

  public ERROR_DEFAULT_TIMEOUT: number | undefined = 3000;

  public onNextToast(onNext: (value: ToastOptions) => void) {
    return this.observable.subscribe(onNext);
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
    this.subscriber.next(options);
  }
}

export default new ToastService();
