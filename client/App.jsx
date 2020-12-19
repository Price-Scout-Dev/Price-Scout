import React from 'react';
import Register from './SANDBOX/auth/Register'
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Register} />

      </div>
    </BrowserRouter>
  )
}
export default App;