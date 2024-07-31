import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    max-height: 64px;
  }

  to {
    max-height: 160px;
  }
`;

const fadeOut = keyframes`
  from {
    max-height: 160px;
  }

  to {
    max-height: 74px;
  }
`;

export const Component = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;

  width: 100%;
  height: 100%;
  max-width: 1160px;
  padding: 60px 24px;
  z-index: 1;

  @media (max-width: 1101px) {
    max-width: 553px;
  }
`;

export const Typography = styled.div`
  width: 100%;

  h2 {
    color: var(--purple);
    font-size: 28px;
    line-height: 140%;

    @media (max-width: 560px) {
      font-size: 24px;
      max-width: 272px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;
  width: 100%;
  height: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 16px 20px;
  min-height: 64px;
  border-radius: 6px;
  background: var(--light-gray);
  overflow: hidden;
  transition:
    max-height 1s ease-in-out,
    padding 0.5s ease-in-out;

  @media (max-width: 560px) {
    border-radius: 6px;
  }

  &.open {
    animation: ${fadeIn} 1s ease;
  }

  &.close {
    animation: ${fadeOut} 500ms ease;
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .inner button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-circle);
    z-index: 1;
  }

  .inner button span {
    opacity: 0;
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: var(--gray-lilac);
    border-radius: var(--radius-circle);
    transition: opacity 500ms;
  }

  .inner img {
    width: 12px;
    margin: 4px;
    z-index: 1;
  }

  .inner button:active {
    background-color: var(--light-ash);
    transition: background-color 500ms;
  }

  .inner button:hover span {
    opacity: 0.6;
    transition: opacity 500ms;
  }

  .inner button:active img {
    transform: scale(1.1);
  }

  .inner button:active span {
    transform: scale(1.2);
    transition: transform 500ms;
  }

  .inner p {
    color: var(--dark-charcoal);
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;

    @media (max-width: 560px) {
      font-size: 14px;
      line-height: normal;
    }
  }

  .outer {
    width: 100%;
    height: 100%;
  }

  .outer p {
    color: var(--grayish-charcoal);
    font-weight: 400;
    line-height: 160%;

    @media (max-width: 1101px) {
    }

    @media (max-width: 560px) {
      font-size: 12px;
      line-height: normal;
    }
  }

  .less,
  .more {
    transition: transform 0.5s ease;
  }

  .more {
    transform: rotate(180deg);
  }
`;
