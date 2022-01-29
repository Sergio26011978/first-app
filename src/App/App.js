
import Header from '../Header/Header';
import Container from '../Container/Container';
import '../Container/Container.css';
import '../App/App.css';
import '../Header/Header.css'
import '../Card/Card.css'





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
