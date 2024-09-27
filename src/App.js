import './App.css';
import Header from './components/header';
import TopSection from './components/top-section';
import Services from './components/services';
import AboutUs from './components/about-us';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <TopSection/>
        <Services/>
        <AboutUs/>
        <Footer/>
    </div>
  );
}

export default App;
