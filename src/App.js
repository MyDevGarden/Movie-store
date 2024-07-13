import './App.css';

import { Route, Routes } from 'react-router-dom';


import DetailsPage from './DetailsPage';

import NotFoundPage from './NotFoundPage';
import ListPage from './ListPage';



function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<ListPage/>}/>
      <Route path='/list' element={<ListPage/>}/>
      <Route path='/details/:id' element={<DetailsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    
    </>
  )
  
}

export default App;
