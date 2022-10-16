import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contact_us/contact_us";
import NotFound from "./pages/errors/404";
import Main from "./pages/main";

function App() {
  return (
   
    <div className="App">
     
      <Routes>
       
        <Route path='/' element={<Main />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
