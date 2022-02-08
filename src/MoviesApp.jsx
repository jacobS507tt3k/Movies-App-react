import { Provider } from 'react-redux';
import {AppRouter} from './routers/AppRouter'
import { store } from './store/store';

export const MoviesApp = () => {
  return (
    <div className="App">
      <Provider store={store}>
          <AppRouter />
      </Provider>
      
    </div>
  );
};


