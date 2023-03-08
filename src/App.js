import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

// admin pages(components)
import Admin from './admin/admin.main';

// dealer pages(components)
import Dealer from './dealers/dealer.main';

// user pages(components)
import User from './users/users.main';


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div className='text-center' >
      <Routes>
        <Route path='/' element={<Navigate to = '/home' />} />

        <Route path='/home/*' element={ <User /> }>
          {/* <Route path='' element={< />} /> */}
          <Route path='products' element={<p>sub page, third party route, you can extend if neccessary</p>} /> 
          {/* for example, the Route above show how you'll pass sub component of page through its route */}
        </Route>

        <Route path='/dealer/*' element={ <Dealer /> }>
          {/* <Route path='' element={< />} /> */}
        </Route>

        <Route path='/admin/*' element={ <Admin /> }>
          {/* <Route path='' element={< />} /> */}
        </Route>

      </Routes>
    </div>
  );
}

export default App;
