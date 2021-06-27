import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import styles from "./Form.module.scss";

const Form = ({onAddUser}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [errorMessage, setErrorMessage] = useState()

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    };

    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    };

    const isFormValid = () => {
        if (name && age) {
            if (age > 0) {
                setErrorMessage(null)
                return true
            } else {
                setErrorMessage("Please enter a valid age (> 0)")
                return false
            }
        } else {
            setErrorMessage("Please enter a valid name and age (non-empty values)")
            return false
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            onAddUser({name, age})
            setName("")
            setAge("")
        }
    };

    const onModalCloseHandler = () => {
        setErrorMessage(null)
    }

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
                        value={age}
                        onChange={ageChangeHandler}/>
                </div>
                <Button type="submit">Add User</Button>
            </form>
            {errorMessage && 
                <Modal header="Invalid Input" onClose={onModalCloseHandler}>
                    {errorMessage}
                </Modal>
            }
        </Card>
    );
};

export default Form;
