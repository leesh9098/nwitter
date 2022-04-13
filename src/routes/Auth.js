import { useState } from "react";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (e) => {
        const {
            target: {name, value}
        } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (newAccount) {
            
        } else {
            
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    required />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    required />
                <input
                    type="submit"
                    value={newAccount ?
                        "Create Account"
                        :
                        "Log In"
                    } />
            </form>
            <div>
                <button>Continue with google</button>
                <button>Continue with github</button>
            </div>
        </div>
    )
}