import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Home from "../routes/Home";
import Profile from "../routes/Profile";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/profile" element={<Profile />} />
                <Route />
            </Routes>
        </BrowserRouter>
    )
}