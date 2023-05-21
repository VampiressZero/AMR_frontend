import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import './App.css';
import 'theme/index.css';
import { RootRouter } from './routes/RootRouter';
import { Main } from 'features/main/MainPage';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <Suspense>
          <Main>
            <RootRouter />
          </Main>
        </Suspense>
      </div>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
