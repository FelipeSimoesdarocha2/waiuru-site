// React
import { MouseEventHandler } from 'react';

export type MenuItemProps = {
    name: string;
    tabIndex?: number | undefined;
    menuItemKey: string;
    defaultSelectedKeys?: string;
    onClick?: MouseEventHandler<HTMLElement>;
};

