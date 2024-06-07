import React from 'react';
import './App.scss';
import ContextProvider from './components/Context/ContextProvider';
import Bridge from './components/Bridge/Bridge';


function App({ moduleData }) {

  return (
    <div className='sw-video-carousel-v2__container'>
      <ContextProvider>
          <Bridge moduleData={moduleData}/>
      </ContextProvider>
    </div>
  );
}

export default App;
