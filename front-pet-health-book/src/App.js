import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Carnet de santé en ligne.
        </h1>
        
      </header>
      <body>
        <Dashboard/>
      </body>
    </div>
  );
}

export default App;
