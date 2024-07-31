// React
import { MouseEventHandler } from 'react';

export interface NavProps {
    name: string;
    tabScreenKey: number;
    defaultSelectedKeys: number;
    onClick?: MouseEventHandler<HTMLElement>;
}
