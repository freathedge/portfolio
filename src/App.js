import './App.css';
import Home from './components/Home/Home.js';
import Background from './components/Background/Background.js';
import Card from './components/Card/Card.js';
import ContactBorder from './components/ContactBorder/ContactBorder.js';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <ContactBorder/>
        <Background>
          <Card/>
        </Background>
      </header>
    </div>
  );
}

export default App;
