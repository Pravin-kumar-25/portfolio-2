import './App.css';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import {
  BrowserRouter as Router
} from "react-router-dom";
import AllRoutes from './routes/AllRoutes';

function App() {


  return (
    <div className="App">
     <Cursor />
      <Router>
        <Navbar />
      <div className='container'>
        <AllRoutes />
      </div>
      </Router>
    </div>
  );
}

export default App;
