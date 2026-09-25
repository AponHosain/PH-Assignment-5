
import Nav from './components/Nav';
import Secction1 from './components/Secction1';  

import Footer from './components/footer';


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
