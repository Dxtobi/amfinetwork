import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/constants/header';
import Footer from './components/constants/footer';
import ReadMore from './components/constants/others/readmore';
import Newsletter from './components/constants/others/newslatter';
import ContactUs from './components/constants/others/contactus';

function App() {
  return (
    <Router>
   
      <Header/>
      <div className='app_container'>
          <Routes>
          <Route path="/home" element={<ReadMore />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/" element={<ReadMore />} />
          </Routes>
        </div>
      <Footer/>
    
  </Router>
  );
}

export default App;
