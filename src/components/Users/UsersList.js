import Card from "../UI/Card/Card"
import User from "./User"

const UsersList = ({users}) => {
    console.log(users)
    return (
        <Card>
            {users.map((user, i) => <User user={user} key={i} />)}
        </Card>
    )
    
}

export default UsersList