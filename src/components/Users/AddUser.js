import React, {useState} from 'react';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
    function submitHandler(e) {                                                 //validation checks for empty fields and negative values
        e.preventDefault();                                                     
        if (!(enteredAge && enteredName)) {
            props.error('Please enter a valid name and age (non-empty values)');
            return;
        }

        if (!(enteredAge > 0)) {
            props.error('Please enter a valid age (>0)');
            return;
        }

        const user = {                                                          //create new object
            name: enteredName,
            age: enteredAge
        };

        props.update(user);                                                     //update 'Users' array and reset the input fields
        setEnteredName('');
        setEnteredAge('');
    };

    function nameChangeHandler(e) {                                             //updates 'enteredName' state
        setEnteredName(e.target.value);
    };

    function ageChangeHandler(e) {                                              //updates 'enteredAge' state
        setEnteredAge(e.target.value);
    };

    return (                                                                    //displays input form
        <form className={styles.input} onSubmit={submitHandler}>                
            <label className={styles.input.label}>Username</label><br />
            <input className={`${styles.input.input} ${styles.input.focus}`} value={enteredName} type="text" id="uname" name="uname" onChange={nameChangeHandler} /><br />
            <label className={styles.input.label}>Age (Years)</label><br />
            <input className={`${styles.input.input} ${styles.input.focus}`} value={enteredAge} type="text" id="age" name="age" onChange={ageChangeHandler} /><br />
            <Button label='Add User' />
        </form>
    );
};

export default AddUser;

//displays an input form, handles input validation, adds new users to the 'Users' array