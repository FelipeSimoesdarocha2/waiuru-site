import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 100%;
  padding: 0px 8px;

  border-radius: 100px;
  border: 1px solid var(--purple);
  cursor: pointer;

  p {
    color: var(--purple);
    font-size: 10px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.16px;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    padding: 3px 6px;
  }

  p:hover {
    color: var(--purple);
  }

  p::selection {
    background: none;
  }

  &.active {
    background: var(--purple);
    cursor: not-allowed;
  }

  &.active p {
    color: var(--white);
  }

  p:active {
    transform: scale(0.95);
    color: var(--purple);
  }

  &.active p:active {
    transform: scale(1);
    color: var(--white);
  }
`;
