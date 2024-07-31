import styled from 'styled-components';

export const Component = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  padding: 15px 32px;
  border-radius: 60px;
  border: 1px solid transparent;
  overflow: hidden;
  cursor: pointer;

  p {
    color: var(--white);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: normal;
    text-align: center;
    width: 100%;
    white-space: nowrap;
  }

  p::selection {
    background-color: transparent;
  }

  &.primary {
    background-color: var(--purple);
    border: 1px solid var(--white);

    p {
      color: var(--white);
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      opacity: 0.9;
      transition: opacity 150ms linear;
    }
  }

  &.ghost {
    background-color: var(--white);
    border: 1px solid var(--purple);

    p {
      color: var(--purple);
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      opacity: 0.8;
      transition: opacity 150ms linear;
    }
  }

  .lottie {
    display: flex;
    width: 32px;
    height: auto;
  }
`;
