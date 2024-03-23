import styles from './SuggestAccount.module.scss'
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)

function SuggestAccount({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('suggest-account-title')}>{title}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('see-all')}>See all</p>
        </div>
    );
}

export default SuggestAccount;