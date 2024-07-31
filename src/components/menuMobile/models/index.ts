export interface ItensProps {
  value: string;
  name?: string;
}

export interface MenuMobileProps {
  isActive: boolean;
  data: ItensProps[];
  defaultSelectedKeys?: string;
}
