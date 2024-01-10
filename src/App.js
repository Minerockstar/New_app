import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {Header, main} from './Header'
import Footer from './Footer'
import Hire from './Hire'
import Investor from './Investor'
import Advertise from './Advertise'
import List from './List'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/hire' element={<Hire/>}/>
      <Route path='/investor' element={<Investor/>}/>
      <Route path='/advertise' element={<Advertise/>}/>
      <Route path='/list' element={<List/>}/>
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
