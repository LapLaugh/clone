import * as React from 'react';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';
import styles from './Search.module.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
    placeholder?: string,
    width?: number | string,
    options: any[]
}

function SearchComponent(props: Props) {
    const [options, setOptions] = React.useState<SelectProps<object>['options']>(props.options);

    const searchResult = (query: string) => {
        const options = props.options ?? []
        if (query == '') {
            console.log(options)
        }
        return query == '' ? options : options.filter(option => option.label.toLowerCase().includes(query.toLowerCase()))
    }

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };
    return <div className={cx('search')}>
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: props.width ?? '100%' }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input.Search size="large" placeholder={props.placeholder} enterButton />
        </AutoComplete>
    </div>
}

export default SearchComponent;