
import Nav from './components/Nav';
import Secction1 from './components/Secction1';  


function App() {
  const cardPromise = cardFetch();

  return (
    <>

    <Nav />
    <Secction1 />
   
    </>
  );
}

export default App;
