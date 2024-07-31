// React
import { MouseEventHandler } from 'react';

export interface ScreenProps {
    name: string;
    tabScreenKey: number;
    defaultSelectedKeys?: number;
    onClick?: MouseEventHandler<HTMLElement>;
}
