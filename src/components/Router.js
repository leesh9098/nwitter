import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "../routes/Navigation";

export default function Router({ isLoggedIn, userObj, refreshUser }) {

    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile refreshUser={refreshUser} userObj={userObj} />} />
                    </>
                ) : (
                    <Route path="/" element={<Auth />} />
                )}
                {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
            </Routes>
        </BrowserRouter>
    )
}