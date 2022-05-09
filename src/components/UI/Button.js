import styles from './Button.module.css';

function Button(props) {
    
    return (
        // <button className={`${styles.button} ${styles.button.hover} ${styles.button.active} ${styles.button.focus}`} type="submit">{props.label}</button>
        <button className={styles.button} type="submit">{props.label}</button>
    );
};

export default Button;

//Creates buttons, accepts 'label' prop argument to label the button