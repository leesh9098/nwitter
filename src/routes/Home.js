import { dbService } from "fbase";
import { useEffect, useState } from "react"

export default function Home() {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((doc) => {
            const nweetObject = { ...doc.data(), id: doc.id };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    }

    useEffect(() => {
        getNweets();
    }, []);

    console.log(nweets);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now()
        });
        setNweet("");
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