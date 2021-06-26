import styles from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = ({ header, children, onClose }) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <h2 className={styles.header}>{header}</h2>
                <div className={styles.children}>{children}</div>
                <Button type="button" onClick={onClose}>
                    Okay
                </Button>
            </div>
        </div>
    );
};

export default Modal;
