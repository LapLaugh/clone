import * as React from 'react';
import styles from './Header.module.scss';
import * as classNames from 'classnames/bind';
import { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return <div className={cx("header")}>
        <Button className={cx('header-menu-left')} type='primary' content='...' />
        <GithubOutlined className={cx('header-icon')} style={{ fontSize: 40 }} />
        <span className={cx('header-name')}>Lazy Time ...</span>
        <MenuOutlined className={cx('header-menu-right')} style={{ fontSize: 25 }} />
    </div>
}

export default Header;