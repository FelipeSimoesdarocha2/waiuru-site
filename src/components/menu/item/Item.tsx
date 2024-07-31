// Styles
import * as S from './Item.styles';

// Models
import { MenuItemProps } from './models';

const Item = ({ name, tabIndex, menuItemKey, defaultSelectedKeys, onClick }: MenuItemProps) => {
    return (
        <S.Component
            onClick={onClick}
            className={`${defaultSelectedKeys === menuItemKey ? 'active' : ''}`}
            tabIndex={tabIndex}
        >
            <p>{name}</p>
        </S.Component>
    );
};

export default Item;
