import styles from './UsersList.module.css';

function UsersList(props) {
    
    return (
        <div className={styles.users}>
            <ul className={styles.users.ul}>
                {props.arr.map(ele => <li  className={styles.users.li} key={Math.random().toString()}>{ele.name} ({ele.age} years old)</li>)}
            </ul>
        </div>
    )
};

export default UsersList;

//displays all users in the 'Users' array, accepts 'arr' array argument('Users' array)