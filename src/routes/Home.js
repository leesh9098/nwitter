import Nweet from "components/Nweet";
import { dbService } from "fbase";
import { useEffect, useState } from "react"

export default function Home({ userObj }) {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

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

    const onFileChange = (e) => {
        const {
            target: { files },
        } = e;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile)
    }

    const onClearAttachment = () => setAttachment("");

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
                    type="file"
                    accept="image/*"
                    onChange={onFileChange} />
                <input
                    type="submit"
                    value="Nweet" />
                {attachment && (
                    <div>
                        <img
                            src={attachment}
                            alt="미리보기"
                            width="50px"
                            height="50px" />
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                )}
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