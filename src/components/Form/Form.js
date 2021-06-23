import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Form.module.scss";

const Form = ({onAddUser}) => {
    console.log("render")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    };

    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        onAddUser({name, age})
        setName("")
        setAge("")
    };

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={styles.formControl}>
                    <label>Username</label>
                    <input type="text" value={name} onChange={nameChangeHandler} />
                </div>
                <div className={styles.formControl}>
                    <label>Age (Years)</label>
                    <input 
                        type="number"
                        min="0"
                        value={age}
                        onChange={ageChangeHandler}/>
                </div>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default Form;
