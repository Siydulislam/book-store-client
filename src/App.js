import './App.css';
import Answer from './components/Answer/Answer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <h1>Book Store!!!</h1>
      <Navbar />
      <Home />
      <Answer />
    </div>
  );
}

export default App;
