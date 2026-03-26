import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav></Nav>
      </header>
      <footer className="App-footer">
          <Footer></Footer>
      </footer>
    </div>
  );
}


export default App;
