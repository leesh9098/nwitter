import { dbService } from "fbase";

export default function Nweet({ nweetObj, isOwner }) {
    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    }
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button>Edit Nweet</button>
                </>
            )}
        </div>
    )
}