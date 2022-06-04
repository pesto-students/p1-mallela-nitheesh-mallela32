import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MiddleContainer from './components/MiddleContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row flex-column'>
          <div className='col-12'>
              <NavBar/>
          </div>
          <div className='col-12 h-50 middle-container position-relative'>
              <MiddleContainer/>
          </div>
          <div className='col-12 footer'>
              <Footer/>
          </div>
      </div>
    </div> 
    
    </>
  );
}

export default App;
