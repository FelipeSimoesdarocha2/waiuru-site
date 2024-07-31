export enum ToastTypeEnum {
  ERROR = 'error',
  WARN = 'warn',
  SUCCESS = 'success',
  EMPTY = '',
}

export type ToastCardTypes = {
  title: string;
  type: ToastTypeEnum;
  setClose: React.Dispatch<
    React.SetStateAction<{ title: string; type: ToastTypeEnum } | undefined>
  >;
};

