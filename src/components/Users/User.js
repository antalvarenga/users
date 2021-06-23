import styles from "./User.module.scss"

const User = ({ user }) => {
    return (
        <div className={styles.User}>
            {user.name} ({user.age} years old)
        </div>
    );
};

export default User;
