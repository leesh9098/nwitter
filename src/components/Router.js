import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "../routes/Navigation";

export default function Router({ isLoggedIn, userObj }) {

    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile userObj={userObj} />} />
                    </>
                ) : (
                    <Route path="/" element={<Auth />} />
                )}
                {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
            </Routes>
        </BrowserRouter>
    )
}