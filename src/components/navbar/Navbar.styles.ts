import styled from 'styled-components';

export const Component = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  min-height: 80px;
  background-color: var(--white);
  transition: background-color 750ms;
  z-index: 999;

  @media (max-width: 1101px) {
    border-bottom: 1px solid var(--light-platinum);
  }

  &.active {
    backdrop-filter: blur(2px);
    box-shadow: 0px 8px 10px 3px #0000001a;
    background: hsla(0, 0%, 100%, 1);
    transition: all 750ms;
  }

  &.active_menu {
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  max-width: 1160px;

  @media (max-width: 1101px) {
    padding: 10px calc(5vw);
  }
`;
