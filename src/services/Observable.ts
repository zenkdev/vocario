export type Subscriber<T> = (value: T) => void;

class Observable<T> {
  private index = -1; // to start from zero

  private readonly subscribers: Subscriber<T>[] = [];

  public subscribe(subscriber: Subscriber<T>) {
    this.index += 1;
    this.subscribers[this.index] = subscriber;
    return this.unsubscribe.bind(this, this.index);
  }

  public next(value: T) {
    this.subscribers.forEach(subscriber => subscriber(value));
  }

  private unsubscribe(ind: number) {
    delete this.subscribers[ind];
  }
}

export default Observable;
