import './App.css';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import {
  BrowserRouter as Router
} from "react-router-dom";
import AllRoutes from './routes/AllRoutes';
import ContactPage from './pages/ContactPage';
import Spotify from './components/Spotify';

function App() {

  return (
    <>
      <div className="App">
        <Cursor />
        <Router>
          <Navbar />
          <div className='container'>
            <AllRoutes />
          </div>
        </Router>
        <ContactPage />
      </div>
      <div className='phone'>
        Please view it in larger screen devices..
      </div>
      <div className='spotify'>
        <Spotify />
      </div>
    </>

  );
}

export default App;
