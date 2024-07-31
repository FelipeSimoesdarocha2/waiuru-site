// Next
import { StaticImageData } from "next/image";

export interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  tabIndex?: number | undefined;
  src?: StaticImageData | null;
  type?: 'primary' | 'secondary' | 'ghost';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
