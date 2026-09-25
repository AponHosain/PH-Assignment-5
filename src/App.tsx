
import Nav from './components/Nav';
import Secction1 from './components/Secction1';  

import type { Icard } from './types/CardTypes';
import { Suspense } from 'react';
import MainSection from './components/mainSection/mainSection';

import Footer from './components/footer';


import { ToastContainer } from 'react-toastify';



const cardFetch = async (): Promise<Icard[]> => {
  const res = await fetch("/card.json");
  const data = await res.json();
  return data;
};


function App() {
  const cardPromise = cardFetch();

  return (
    <>

    <Nav />
    <Secction1 />

    
      <Suspense fallback={<h2 className='flex items-center justify-center'>Loading</h2>}>
        <MainSection cardPromise={cardPromise} />
      </Suspense>


    <Footer/>
    <ToastContainer />
   
    </>
  );
}

export default App;
