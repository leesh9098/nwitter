import { useState } from "react"

export default function Home() {
    const [nweet, setNweet] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        e.preventDefault();
        const { target: { value } } = e;
        setNweet(value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120} />
            <input
                type="submit"
                value="Nweet" />
        </form>
    )
}