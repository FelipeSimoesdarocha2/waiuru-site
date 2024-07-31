import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 55px;
  padding: 0 32px;

  border-radius: 62px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 1101px) {
    height: 45px;
  }

  p {
    color: var(--neutral-charcoal);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    width: 100%;
    white-space: nowrap;

    @media (max-width: 1101px) {
      font-size: 14px;
    }
  }

  p::selection {
    background-color: transparent;
  }

  &:hover {
    opacity: 0.9;
    transition: opacity 150ms linear;
  }

  &.active {
    background-color: var(--purple);

    p {
      color: var(--white);
    }
  }
`;
