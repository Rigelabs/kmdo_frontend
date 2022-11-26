import { Route, Routes } from "react-router-dom";
import AddBoardMember from "./pages/admin/add_board_member";
import Admin from "./pages/admin/main";
import ContactUs from "./pages/contact_us/contact_us";
import Donate from "./pages/donate/main";
import NotFound from "./pages/errors/404";
import Impact from "./pages/impact/main";
import Main from "./pages/main/main";
import Auth from "./pages/membership/auth";
import Dashboard from "./pages/membership/dashboard";
import Landing from "./pages/membership/landing";
import Reset from "./pages/membership/reset";
import Education from "./pages/pillars/education";
import Health from "./pages/pillars/health";
import SocialEconomic from "./pages/pillars/social_economic";
import AboutUs from "./pages/who_we_are/main";

function App() {
  return (
   
    <div className="App">
     
      <Routes>
       
        <Route path='/' element={<Main />} />
        <Route path='/contact_us' element={<ContactUs />} />
        <Route path='/membership' element={<Auth />} />
        <Route path="/reset" element={<Reset/>}/>
        <Route path='/sign_up' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/impact' element={<Impact />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/education' element={<Education />} />
        <Route path='/social_economic' element={<SocialEconomic />} />
        <Route path='/health' element={<Health />} />
        <Route path='/add_board_member' element={<AddBoardMember />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
