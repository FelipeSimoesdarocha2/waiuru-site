import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100vh;
    opacity: 1;
  }
`;

const closeAnimation = keyframes`
  from {
    height: 100vh;
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 70px;

  position: fixed;
  z-index: 998;
  width: 100%;
  height: 0;
  padding: 0 43px;

  overflow: hidden;
  background-color: var(--white);
  animation: ${openAnimation} 0.5s ease;

  &.open {
    height: 100vh;
    opacity: 1;
  }

  &.close {
    animation: ${closeAnimation} 1s ease;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  width: 100%;

  button {
    height: 40px;
  }

  p {
    font-size: 14px !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  width: 100%;
  height: 100%;
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 28px;
  width: 100%;
  max-width: 300px;

  :last-child {
  }

  .iten_menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    cursor: pointer;
  }

  .iten_content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
    padding: 10px 8px;

    svg {
      width: 10% !important;
    }
  }

  .iten_content:hover {
    border-radius: 8px;
    background: #f6f4fb;
  }

  .iten_content p {
    color: #455a64;
    font-size: 16px;
    font-weight: 400;
    font-weight: 700;
    line-height: 140%;
    text-align: center;
    white-space: nowrap;
  }

  svg path {
    fill: #455a64;
  }

  .active {
    p {
      color: var(--purple);
    }

    svg path {
      fill: var(--purple);
    }
  }
`;
