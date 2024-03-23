import config from '~/config';
import styles from './sidebar.module.scss'
import classNames from "classnames/bind";
import Menu, {MenuItem} from './Menu';
import { Live, UserGroup, Home } from '~/components/icons';
import SuggestAccount from '~/layouts/SuggestAccount';


const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For you' to={config.routesConfig.home} icon={<Home />} />
                <MenuItem title='Following' to={config.routesConfig.following} icon={<UserGroup />} />
                <MenuItem title='Live' to={config.routesConfig.live} icon={<Live />} />
            </Menu>

            <SuggestAccount title='Suggested Accounts'/>
            <SuggestAccount title='Following Accounts'/>
        </aside>
    );
}

export default Sidebar;