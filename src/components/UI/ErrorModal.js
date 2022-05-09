import styles from './ErrorModal.module.css';
import Button from './Button';
import butstyle from './Button.module.css';         //added 5/5

function ErrorModal(props) {
    function disCheck(e) {
        console.log(e.target);
        if (e.target.classList.contains(styles.backdrop) || (e.target.classList.contains(butstyle.button))) {
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