import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/constants/header';
import Footer from './components/constants/footer';
import ReadMore from './components/constants/others/readmore';
import Newsletter from './components/constants/others/newslatter';
import ContactUs from './components/constants/others/contactus';
import Topic1 from './components/constants/others/postPage/topic1';
import Topic2 from './components/constants/others/postPage/topic2';
import Topic3 from './components/constants/others/postPage/topic3';
import Topic4 from './components/constants/others/postPage/topic4';
import Topic5 from './components/constants/others/postPage/topic5';
import Topic6 from './components/constants/others/postPage/topic6';
import Agent from './components/constants/others/customersupport/Agent';

function App() {
  return (
    <Router>
   
      <Header/>
      <div className='app_container'>
          <Routes>
          <Route path="/home" element={<ReadMore />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact_us" element={<ContactUs />} />

          {
            //this should be dynamic if it is coming from a database using
            //<Route path="/toipic/number" element={<ASingle_component />} />
          }
          <Route path="/topics0" element={<Topic1 />} />
          <Route path="/topics1" element={<Topic2 />} />
          <Route path="/topics2" element={<Topic3 />} />
          <Route path="/topics3" element={<Topic4 />} />
          <Route path="/topics4" element={<Topic5 />} />
          <Route path="/topics5" element={<Topic6 />} />
    

          {
            //this should be in a protected route for this site
            
          }
          <Route path="/agent" element={<Agent />} />

          {
            //this should be in a protected route for this site
          }
         
         
          <Route path="/" element={<ReadMore/>} />
          <Route path="*" element={<ReadMore />} />
          </Routes>
        </div>
      <Footer/>
    
  </Router>
  );
}

export default App;
