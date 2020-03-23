export type TState<TData> = {
  isLoading: boolean;
  isError: boolean;
  data: TData;
};

export type TAction<TData> = { type: 'FETCH_INIT' } | { type: 'FETCH_SUCCESS'; payload: TData } | { type: 'FETCH_FAILURE' };

export type TReducer<TData> = (prevState: TState<TData>, action: TAction<TData>) => TState<TData>;

export const dataFetchReducer: TReducer<any> = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

// Create a promise that resolves in <ms> milliseconds
export const timeout = (ms: number) =>
  new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve(`Timed out in ${ms}ms.`);
    }, ms);
  });

export type UseDatabaseOptions<TData = any> = {
  onCompleted?: (data: TData) => void;
  onError?: (error: any) => void;
};
