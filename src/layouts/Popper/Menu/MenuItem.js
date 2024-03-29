import Button from "../../Button/Button";
import classNames from "classnames";
import styles from './menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    return (
        <Button
            classNames={cx('menu-item')}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}>
            {data.title}
        </Button>

    );
}


export default MenuItem;

