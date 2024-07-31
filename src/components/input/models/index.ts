// React
import { HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  id?: string;
  icon?: boolean;
  isError?: boolean;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
  autocomplete?: string;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  tabIndex?: number | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
}
