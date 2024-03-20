import styles from './popper.module.scss'
import classNames from 'classnames';

const cx = classNames.bind(styles)

function Wrapper({ children, className }) {
    return (
        <div className={cx('wrapper', className)}>{children}</div>
    );
}

export default Wrapper;