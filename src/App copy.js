import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes';

function App() {
  // const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tugas PTI - Rizky H Saputra - 232053001
        </p>
        <br/>
        <AppRoutes />

        <span>
          <a href='/pti-1'> Go to Task 1</a> | 
          <a href='/pti-2'> Go to Task 2</a> | 
          <a href='/pti-3'> Go to Task 3</a>
        </span>
      </header>
    </div>
  );
}

export default App;
