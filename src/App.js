import {Header} from './Frontend/Header';
import './App.css'
import { Content } from './Frontend/Content';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
          <div className='Header'><Header/></div>
          <div className="Content"><Content/></div>
      </div>
    </Router>
  );
}

export default App;
