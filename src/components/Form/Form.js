import { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import styles from "./Form.module.scss";

const Form = ({ onAddUser }) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errorMessage, setErrorMessage] = useState();

    const isFormValid = (name, age) => {
        if (name && age) {
            if (age > 0) {
                setErrorMessage(null);
                return true;
            } else {
                setErrorMessage("Please enter a valid age (> 0)");
                return false;
            }
        } else {
            setErrorMessage(
                "Please enter a valid name and age (non-empty values)"
            );
            return false;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const name = nameInputRef.current.value
        const age = ageInputRef.current.value
        if (isFormValid(name, age)) {
            onAddUser({ name, age });
            nameInputRef.current.value = ''
            ageInputRef.current.value = ''
        }
    };

    const onModalCloseHandler = () => {
        setErrorMessage(null);
    };

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={styles.formControl}>
                    <label>Username</label>
                    <input
                        ref={nameInputRef}
                        type="text"
                    />
                </div>
                <div className={styles.formControl}>
                    <label>Age (Years)</label>
                    <input
                        ref={ageInputRef}
                        type="number"
                    />
                </div>
                <Button type="submit">Add User</Button>
            </form>
            {errorMessage && (
                <Modal header="Invalid Input" onClose={onModalCloseHandler}>
                    {errorMessage}
                </Modal>
            )}
        </Card>
    );
};

export default Form;
