import logo from './logo.svg';
import './App.css';
import { Link  } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  // const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
