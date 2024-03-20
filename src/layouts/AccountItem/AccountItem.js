import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss'

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={styles['wrapper']}>
            <img
                src={data.avatar}
                className={styles['avatar']}
                alt={data.full_name}></img>
            <div className={styles['info']}>
                <h4 className={styles['name']}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={styles['icon']} icon={faCheckCircle} />}
                </h4>
                <span className={styles['username']}>@{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;