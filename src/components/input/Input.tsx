// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import message from 'assets/icons/message.svg';

// Styles
import * as S from './Input.styles';

// Models
import { InputProps } from './models';

const Input = ({
  id,
  icon,
  type,
  value,
  isError,
  required,
  placeholder,
  autocomplete,
  errorMessage,
  onBlur,
  onChange,
  onEnterPress,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [invalidRequired, setInvalidRequired] = useState(false);

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (onEnterPress && event.key === 'Enter') {
      onEnterPress((event.target as HTMLInputElement).value);
    }
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';

    if (!value && required) {
      setInvalidRequired(true);
    } else {
      setInvalidRequired(false);
    }

    onChange(value);
  };

  return (
    <S.Wrapper>
      <S.Container>
        {!value && !isFocused ? (
          <>{icon && <Image src={message} className="icon" width={30} alt="decore" draggable="false" />}</>
        ) : (
          <></>
        )}
        <S.Component
          id={id}
          key={id}
          type={type}
          value={value}
          data-testid={id}
          required={required}
          autoComplete={autocomplete}
          placeholder={isFocused ? '' : placeholder}
          onChange={onChangeValue}
          onKeyUp={event => onKeyUp(event)}
          onFocus={() => setIsFocused(true)}
          onBlur={event => {
            onBlur && onBlur(event);
            setIsFocused(false);
          }}
          className={`${invalidRequired ? 'required' : null} ${isFocused ? 'focused' : null}
          ${icon ? (!value && !isFocused ? 'icon_visible' : null) : null}
          `}
        />
      </S.Container>
      <S.ContainerError>{isError && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}</S.ContainerError>
    </S.Wrapper>
  );
};

export default Input;
