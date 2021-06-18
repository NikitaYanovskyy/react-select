import logo from './logo.svg';
import Card from './components/Card/Card'
import './assets/stylesheets/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </header>
    </div>
  );
}

export default App;
