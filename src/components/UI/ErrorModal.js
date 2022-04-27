import styles from './ErrorModal.module.css';
import Button from './Button';

function ErrorModal(props) {
    function disCheck(e) {
        if (e.target.classList.contains(styles.backdrop) || (e.target.classList.contains(styles.button))) {
            props.dismiss();
        }
    };

    return(
        <div onClick={disCheck} className={`${styles.backdrop} ${props.hide && styles.hide}`}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.header.h2}>Invalid Input</h2>
                </div>
                <div className={styles.content}>
                    <div className={styles.content}>
                        {props.mess}
                    </div>
                    <div className={styles.actions}>
                        <Button label='Okay' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorModal;

//displays error modal, accepts 'mess', 'hide', and 'dismiss()' arguments
//  'mess' = dynamic error message
//  'hide' = boolean to allow dynamic 'display: none;'
//  'dismiss()' = method to 're-hide' the modal when button or background is clicked