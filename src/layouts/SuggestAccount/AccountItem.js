import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from './SuggestAccount.module.scss'
import { Wrapper as PopperWrapper } from '~/layouts/Popper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return(
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                placement="bottom"
                offset={[-20, 0]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/8218ddd61110b9c61916000b84407e12.jpeg?lk3s=a5d48078&x-expires=1711278000&x-signature=LrEpZ2rse2HMpvjHepGV37JMj48%3D" alt="avatar" className={cx('avatar')} />
                    <div className={cx('account-info')}>
                        <h4 className={cx('nickname')}>Some nickname <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} /></h4>
                        <p className={cx('name')}>Some name</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;