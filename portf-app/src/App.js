
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Caro from './components/Caro';
import Progress from './components/Progress';
import Contact from './components/Contact';
import Footer from './components/Footer';






function App() {
  return (
    <div className="App">

      <Header/>
      <Jumbo/>
      <Caro/>
      <Progress/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
