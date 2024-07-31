import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--white);

  @media (max-width: 560px) {
    height: 40px;
  }

  .icon {
    position: absolute;
    margin-left: 15px;
    width: 24px;
    height: 24px;

    @media (max-width: 560px) {
      width: 20px;
    }
  }
`;

export const Component = styled.input`
  height: 50px;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 10px;
  background: var(--white);
  caret-color: transparent;
  outline: none;
  padding-left: 14px;
  color: var(--dusky-indigo);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  width: 100%;

  &.icon_visible {
    padding-left: 60px;

    @media (max-width: 560px) {
      padding-left: 40px;
    }
  }

  &.required {
    border: 1px solid var(--intense-red);
  }

  &.focused {
    border-color: var(--purple);
    box-shadow: 0px 0px 3px var(--purple);
    caret-color: var(--purple);
    transition: all 200ms;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px white inset !important;
  }

  @media (max-width: 560px) {
    height: 40px;
    font-size: 12px;
  }
`;

export const ContainerError = styled.div`
  position: absolute;
  bottom: -18px;
  left: 20px;
  height: 12px;

  p::selection {
    background: none;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--intense-red);
  font-size: 12px;

  @media (max-width: 560px) {
    display: none;
  }
`;
