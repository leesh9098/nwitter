import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import { useState } from "react";

export default function Auth() {

    const onSocialClick = async (e) => {
        const { target: {name} } = e;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
    }

    return (
        <div>
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name="google">Continue with google</button>
                <button onClick={onSocialClick} name="github">Continue with github</button>
            </div>
        </div>
    )
}