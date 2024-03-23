import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import styles from './SuggestAccount.module.scss'
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('preview-wrapper')}>
            <header className={cx('preview-header')}>
                <img
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8218ddd61110b9c61916000b84407e12.jpeg?lk3s=a5d48078&x-expires=1711278000&x-signature=LrEpZ2rse2HMpvjHepGV37JMj48%3D"
                    alt="avatar"
                    className={cx('preview-avatar')} />
                <Button primary>Follow</Button>
            </header>
            <div className={cx('preview-body')}>
                <h4 className={cx('preview-nickname')}>Some nickname <FontAwesomeIcon icon={faCheckCircle} className={cx('preview-check')} /></h4>
                <p className={cx('preview-name')}>Some name</p>
                <p className={cx('preview-analytic')}>
                    <strong className={cx('analytic-value')}>9.9M</strong>
                    <span className={cx('analytic-label')}>Follower</span>

                    <strong className={cx('analytic-value')}>12.6M</strong>
                    <span className={cx('analytic-label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;