import type { History, Location, LocationState, Path } from 'history';

class RouterService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private h: History = undefined as any;

  public get history(): History {
    this.checkIfHistoryIsProvided();

    return this.h;
  }

  public set history(history: History) {
    this.h = history;
  }

  public get location(): Location<LocationState> {
    this.checkIfHistoryIsProvided();

    return this.h.location;
  }

  // public replace(path: Path, state?: HistoryLocationState): void {}
  // public replace(location: LocationDescriptorObject<HistoryLocationState>): void {}
  // public go(n: number): void {}
  // public goBack(): void {}
  // public goForward(): void {}
  // public block(prompt?: boolean | string | TransitionPromptHook<HistoryLocationState>): UnregisterCallback {}
  // public listen(listener: LocationListener<HistoryLocationState>): UnregisterCallback {}
  // public createHref(location: LocationDescriptorObject<HistoryLocationState>): Href {}

  // public push(location: LocationDescriptorObject<HistoryLocationState>): void;
  public push<HistoryLocationState = LocationState>(path: Path, state?: HistoryLocationState): void {
    this.checkIfHistoryIsProvided();

    this.h.push(path, state);
  }

  private checkIfHistoryIsProvided(): void {
    if (this.h == null) {
      throw new Error('history must set before use');
    }
  }
}

export default new RouterService();
