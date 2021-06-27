import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
    return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ header, children, onClose }) => {
    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>{header}</h2>
            <div className={styles.children}>{children}</div>
            <Button type="button" onClick={onClose}>
                Okay
            </Button>
        </div>
    );
};

const Modal = ({ onClose, header, children }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onClose={onClose} header={header} children={children} />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default Modal;
