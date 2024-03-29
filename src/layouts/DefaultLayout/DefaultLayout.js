import Header from "./Header/header";
import Sidebar from "./Sidebar/sidebar";
import styles from "./defaultLayout.module.scss";

import classNames from "classnames/bind";


const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>

        </div>
    );
}

export default DefaultLayout;