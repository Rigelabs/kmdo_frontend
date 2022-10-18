import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contact_us/contact_us";
import NotFound from "./pages/errors/404";
import Main from "./pages/main";
import Auth from "./pages/membership/auth";
import Landing from "./pages/membership/landing";

function App() {
  return (
   
    <div className="App">
     
      <Routes>
       
        <Route path='/' element={<Main />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/membership' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
