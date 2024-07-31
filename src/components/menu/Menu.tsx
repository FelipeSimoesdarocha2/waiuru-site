// Models
import { MenuProps } from './models';

// Components
import { Item } from './item';
import { ItemGroup } from './itemGroup';
import { Itens } from './itens';

const Menu = ({ children }: MenuProps) => {
  return <>{children}</>;
};

type CompoundedComponent = typeof Menu & {
  Item: typeof Item;
  Itens: typeof Itens;
  ItemGroup: typeof ItemGroup;
};

const CompoundedMenu: CompoundedComponent = Object.assign(Menu, { Item, ItemGroup, Itens });

export default CompoundedMenu;
