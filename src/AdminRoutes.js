import { Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import EventsPage from './pages/EventsPage'
import NoPage from './pages/NoPage'
import Client from './pages/Client'
import ConfirmBooking from "./pages/ConfirmBooking"
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import About from './pages/About'


const AdminRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/client" element={<Client />} />
        <Route path="/confirm" element={<ConfirmBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<NoPage />} />
    </Routes>
    )
}

export default AdminRoutes;
