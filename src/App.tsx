
import Nav from './components/Nav';
import Secction1 from './components/Secction1';  

import type { Icard } from './types/CardTypes';

import Footer from './components/footer';



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




    <Footer/>
   
    </>
  );
}

export default App;
