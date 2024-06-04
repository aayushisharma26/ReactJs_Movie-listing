import Likedislike from "./likedislike.js";
import Delete from "./delete";
const Action = (props) => {
    return (
        <>
            <div className="action_row">
                <Likedislike />
                <Delete />
            </div>
        </>
    );
}
export default Action;
