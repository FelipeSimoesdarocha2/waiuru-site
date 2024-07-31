import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;

  p {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }

  p:hover {
    color: var(--purple);
  }

  p::selection {
    background: none;
  }

  &.active p {
    color: var(--purple);
    font-weight: 700;
  }

  p:active {
    transform: scale(0.95);
    color: var(--purple);
  }

  &.active p:active {
    transform: scale(1);
  }
`;
