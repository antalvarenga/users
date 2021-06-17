import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Form.module.scss";

const Form = () => {
    const submitHandler = (e) => {
        e.preventDefault();

        console.log("form submitted");
    };

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={styles.formControl}>
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className={styles.formControl}>
                    <label>Age (Years)</label>
                    <input type="number" />
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default Form;
