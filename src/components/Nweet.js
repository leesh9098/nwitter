import { dbService } from "fbase";
import { useState } from "react";

export default function Nweet({ nweetObj, isOwner }) {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (e) => {
        const {
            target: { value }
        } = e;
        setNewNweet(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(nweetObj.id, newNweet);
    }

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={newNweet} required />
                        <input type="submit" value="Update Nweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDeleteClick}>Delete Nweet</button>
                            <button onClick={toggleEditing}>Edit Nweet</button>
                        </>
                    )}
                </>
            )}
        </div>
    )
}