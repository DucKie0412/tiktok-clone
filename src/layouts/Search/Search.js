import HeadlessTippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '../Popper';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import AccountItem from '../AccountItem/AccountItem';
import styles from './search.module.scss'
import * as searchService from '~/services/searchService';
import config from '~/config';


const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);


    const debounce = useDebounce(searchValue, 500)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            // searchResult([]);
            return;
        }

        const handleAPI = async () => {
            const result = await searchService.search(debounce);
            setSearchResult(result);

        }


        handleAPI();
    }, [debounce])

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Input to search'
                    spellCheck={false}
                    onChange={e => setSearchValue(e.target.value.trimStart())}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && ( //khong cho 2 icon hien cung luc
                    <button className={cx('clear')} onClick={() => {
                        setSearchValue('');
                        inputRef.current.focus();
                    }}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                <Link to={config.routesConfig.search}>
                    <button className={cx('search-button')} onMouseDown={handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </Link>
            </div>
        </HeadlessTippy>
    );
}

export default Search;