export interface ItensProps {
    value: string;
    name?: string;
}

export type MenuItensProps = {
    name: string;
    tabIndex?: number | undefined;
    data: ItensProps[];
    menuItemKey: string;
    defaultSelectedKeys?: string;
};

