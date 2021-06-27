import Card from "../UI/Card/Card"
import User from "./User"

const UsersList = ({users}) => {
    return (
        <Card>
            {users.map((user, i) => <User user={user} key={i} />)}
        </Card>
    )
    
}

export default UsersList