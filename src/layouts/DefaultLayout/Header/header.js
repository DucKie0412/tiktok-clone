import styles from './header.module.scss';
import config from '~/config'
import images from '~/assets/images';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEllipsisVertical, faFileUpload, faGear, faKeyboard, faLanguage, faMessage, faQuestionCircle, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '~/layouts/Button/Button';
import Menu from '../../Popper/Menu/Menu';
import Search from '~/layouts/Search/Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)
const MENU_ITEMS = [{
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'Language',
    children: {
        title: "Language",
        data: [
            {
                code: 'en',
                title: 'English',
            },
            {
                code: 'vi',
                title: 'Vietnamese',
            },
            {
                code: 'jp',
                title: 'Japanese',
            },
        ]
    }
},
{
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    title: 'Feedback',
    to: '/feedback'
},
{
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcut'
}]



function Header() {
    const currentUser = true
    const userMenu = [{
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'User Profile',
        to: '/@user'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coins'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout'
    }
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routesConfig.home}>
                        <img src={images.logo} alt='Tiktok'></img>
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Tippy content="Upload" placement='bottom'>
                                <button className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement='bottom'>
                                <button className={cx('action-button')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>


                        </div>
                    ) : (
                        <div>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>

                        </div>

                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img src='https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/432774004_928057132020386_8224156652557898134_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpk6YJZ3Qsp6LOCgFDqZmXK0wpWjnyDUkrTClaOfINSSDr59Gtz0cDSbnqWiXeOXy_KnFvaTh5j-64KLf0dfPy&_nc_ohc=jnwY_ehJUC4AX9SR2qz&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCwZIao8GM2z7CuVgtGjQVAHkKXjdCmP9dGVOlzpSFE7w&oe=65FDB264' alt='name' className={cx('user-avatar')} />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}

                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
