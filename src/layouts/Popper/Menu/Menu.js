import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/layouts/Popper'
import classNames from "classnames/bind";
import styles from './menu.module.scss'
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles)

function Menu({ children, items = [] }, hideOnClick = false) {

    const [history, setHistory] = useState([{ data: items }])
    const currentIndex = history[history.length - 1]

    const renderItems = () => {
        return currentIndex.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                }
            }} />
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 800]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}/>}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory(prev => prev.slice(0,1))
            
            }} //gia du dang o menu con -> quay ve menu ban dau khi khong focus vao nua
        >
            {children}
        </Tippy>
    );
}

export default Menu;