
import videos from "~/assets/videos";
import styles from './Video.module.scss'
import classNames from "classnames/bind";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)

function Video({avatar, name, nickname, videoContent, hashtags=[], musicName}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-description')}>
                <img
                    className={cx('avatar')}
                    src={avatar}
                    alt="avatar" />

                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Link to="#" className={cx('name')}>{name}</Link>
                        <p className={cx('nickname')}>{nickname}</p>
                    </div>
                    <div className={cx('body')}>
                        <span className={cx('video-content')}>{videoContent}
                            {hashtags.map((hashtag) => (
                                <span className={cx('hashtag')}>#{hashtag}</span>
                            ))}
                        </span>
                    </div>
                    <div className={cx('music-source')}> <FontAwesomeIcon className={cx('icon')} icon={faMusic} />{musicName}</div>
                </div>
                <div className={cx('button')}><Button outline>Follow</Button></div>
            </div>
            <video className={cx('video')} controls>
                <source src={videos.video} type="video/mp4" />
            </video>
            <div className={cx('separate')}></div>
        </div>
    );
}

export default Video;