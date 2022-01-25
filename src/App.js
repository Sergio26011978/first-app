
import './App.css';
import './Header.css'
import './Container.css'
import Header from './Header';
import Container from './Container';
import Card from './Card';


function App() {
  return (
    <div className="App">
      <header className="Header">
      <Header namber='первый'/>
      </header>
      <div className='Container'>
      <Container/>
      </div> 
    </div>
  );
}

export default App;
