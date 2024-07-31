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
  transition: 250ms transform;
  cursor: pointer;

  p {
    color: var(--purple);
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.16px;
    text-align: center;
    white-space: nowrap;
    padding: 8px 12px;

    @media (max-width: 560px) {
      padding: 3px 6px;
      font-size: 12px;
    }
  }

  p::selection {
    background: none;
  }

  &.active {
    background: var(--purple);
    transition: 250ms background;
    cursor: not-allowed;
  }

  &.active p {
    color: var(--white);
  }

  &:active {
    transform: scale(0.95);
    transition: 250ms transform;
  }
`;
