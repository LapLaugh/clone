import * as React from 'react';
import styles from './DefaultLayout.module.scss';
import * as classNames from 'classnames/bind';
import Header from './components/Header';
import Body from './components/Body';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return <div className={cx("main-layout")}>
        <Header />
        <Body />
    </div>
}

export default DefaultLayout;
