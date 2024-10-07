import './App.css';
import './components/button/button.css';
import Header from './components/header';
import TopSection from './components/top-section';
import Services from './components/services';
import AboutUs from './components/about-us';
import Footer from './components/footer';
import ContactUs from './components/contact-us';
import { Stack } from '@mui/material';

function App() { 
  return (
    <Stack alignItems="center" width="100%">
      <Header />
      <TopSection />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </Stack>
  );
}

export default App;
