import './App.css';
import Header from './components/header';
import TopSection from './components/top-section';
import Services from './components/services';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <TopSection/>
        <Services/>
        <Footer/>
    </div>
  );
}

export default App;
