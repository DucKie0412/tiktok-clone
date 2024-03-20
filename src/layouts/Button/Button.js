
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({
    leftIcon,
    to, href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    children, onClick,
    ...passProps }) {

    let Component = 'button';
    const _props = {

        onClick,
        ...passProps,
    }


    if (to) {
        _props.to = to
        Component = Link
    } else if (href) {
        _props.href = href
        Component = 'a'
    }


    const classes = cx('wrapper',{
        primary,
        outline,
        text,
        rounded,
        small,
        large,
    });
    return (
        <Component className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Component>
    );
}

export default Button;