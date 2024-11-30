import Navbar from "./compontent/Navbar/Navbar";
import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from "../../cab_hub_booking/src/compontent/Hero/Hero.jsx"
import About from "../../cab_hub_booking/src/compontent/About/About.jsx"
import Contact from "../../cab_hub_booking/src/compontent/Contact/Contact.jsx";
import BestCabs from "../../cab_hub_booking/src/compontent/BestCabs/BestCabs.jsx";
// import AppStore from "../src/compontent/AppStore/AppStore.jsx";
// import Testimonial from "../src/compontent/Testimonial/Testimonial.jsx";
import Footer from "./compontent/Footer/Footer";
// import Notpage from "./compontent/Notpage/Notpage.jsx";

function App() {
 
       useEffect(() =>{
        Aos.init({
          offset:100,
          duration:600,
          easing:"ease-in-sine",
          delay:100,
        });
        Aos.refresh();
},[])
  
    
  return (

    
    <div className="dark:bg-black dark:text-white">
      <BrowserRouter>
        <Navbar/>
      <Routes>

        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<BestCabs />} />
          {/* <Route path="/Testimonial" element={<Testimonial />} /> */}
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/AppStore" element={<AppStore />} /> */}
          {/* <Route path="*" element={<Notpage />} /> */}
        
      </Routes>
  </BrowserRouter>
  <Footer/>
 
  
 
     
    </div>
  )
}

export default App;
