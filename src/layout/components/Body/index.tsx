import * as React from 'react';
import styles from './Body.module.scss';
import * as classNames from 'classnames/bind';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { Avatar, Segmented } from 'antd';

const cx = classNames.bind(styles);

const options = [
    {
        label: 'Lazy Time',
        value: 'Lazy Time'
    },
    {
        label: 'Tips',
        value: 'Tips'
    },
    {
        label: 'Exit',
        value: 'Exit'
    }
]

function Body() {
    const [tab, setTab] = React.useState([1])

    return <div className={cx("main-content")}>
        <div className={cx('annoucement')}>
            <h1>TIME TO BE LAZY</h1>
            This page was created for fun!
            <h3>Let's build from here, together.</h3>
            The complete developer platform to build, scale, and deliver secure software.
        </div>
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => <Route key={index} path={route.path} element={<route.element placeholder={"Find something ..."} options={options} />} />)}
            </Routes>
        </Router>
        <div className={cx('segmented')}>
            <Segmented
                onChange={(e: any) => setTab(e)}
                options={[
                    {
                        label: (
                            <div style={{ padding: 5 }}>
                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                <div>User 2</div>
                            </div>
                        ),
                        value: '1',
                    },
                    {
                        label: (
                            <div style={{ padding: 5 }}>
                                <Avatar style={{ backgroundColor: '#f56a00' }}>B</Avatar>
                                <div>User 2</div>
                            </div>
                        ),
                        value: '2',
                    },
                ]}
            />
        </div>
        {tab}
    </div>
}

export default Body;