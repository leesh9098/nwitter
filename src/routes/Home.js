import Nweet from "components/Nweet";
import { dbService } from "fbase";
import { useEffect, useState } from "react"

export default function Home({ userObj }) {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setNweets(newArray);
        })

        return(() => {})
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid
        });
        setNweet("");
    }

    const onChange = (e) => {
        e.preventDefault();
        const { target: { value } } = e;
        setNweet(value);
    }

    return (
        <>
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
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </>
    )
}