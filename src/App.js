

import About from'./components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Intrest from  './components/Intrest';
import pic from './IMG_1610.jpg'

function App() {
  return (
    <div>
      <img src= {pic} alt='David Smiling' id='picture'/>
      <div className='card'>
      
        <Info/>
        <About />
        <Intrest />
        
        <div className='footer'>
          <Footer />
        </div>
        
      </div>
    </div>
    
      
    
     
  );
}

export default App;
