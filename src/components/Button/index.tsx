import * as React from 'react';
import { Button as BTN } from 'antd';

interface Props {
    className?: string,
    type?: 'default' | 'primary' | 'dashed',
    width?: number,
    height?: number
    content: string,
    onClick?: () => void
}
function Button(props: Props) {
    return <BTN
        ghost
        className={props.className}
        type={props.type}
        style={{ width: props.width, height: props.height }}
        onClick={props.onClick}
    >
        {props.content}
    </BTN>
}

export default Button;