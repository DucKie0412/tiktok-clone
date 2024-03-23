import { NavLink } from "react-router-dom"; //ho tro hien thi active
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => (cx('menu-item', { active: nav.isActive }))}>
            {icon}
            <span className={cx('menu-item-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;