
import './App.css';
import AllRest from './components/AllRest';
import Footer from './components/Footer';
import Header from './components/Header';
import Viewrest from './components/Viewrest';
import { Route , Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<Viewrest/>}/>
        </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;
