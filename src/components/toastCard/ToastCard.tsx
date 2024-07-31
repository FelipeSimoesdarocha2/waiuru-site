// Next
import Image from 'next/image';

// React
import * as React from 'react';

// Assets
import error from 'assets/icons/error.svg';
import exit from 'assets/icons/exit.svg';
import success from 'assets/icons/success.svg';

// Styles
import * as S from './ToastCard.styles';

// Models
import { ToastCardTypes, ToastTypeEnum } from './models';

const ToastCard = ({ title, type, setClose }: ToastCardTypes) => {
  const onClose = () => {
    setClose({ title: '', type: ToastTypeEnum.EMPTY });
  };

  return (
    <S.Component
      className={`
    ${type === ToastTypeEnum.ERROR ? 'error' : ''}
    ${type === ToastTypeEnum.WARN ? 'warn' : ''}
    ${type === ToastTypeEnum.SUCCESS ? 'success' : ''}
    ${type === ToastTypeEnum.EMPTY ? 'empty' : ''}
  `}
    >
      <S.Content>
        <figure>
          {type === ToastTypeEnum.ERROR && <Image src={error} alt="error" draggable="false" />}
          {type === ToastTypeEnum.WARN && <Image src={error} alt="warn" draggable="false" />}
          {type === ToastTypeEnum.SUCCESS && <Image src={success} alt="success" draggable="false" />}
        </figure>
        <S.Title>{title}</S.Title>
      </S.Content>

      <button onClick={onClose}>
        <Image width={22} src={exit} alt="exit" draggable="false" />
      </button>
    </S.Component>
  );
};

export default ToastCard;
