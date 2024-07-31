import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--white);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 123px;
  width: 100%;

  @media (max-width: 560px) {
    gap: 7px;
  }

  p {
    color: var(--purple);
    font-size: 24px;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }

  p::selection {
    background: none;
  }

  &.logo_icon {
    transition: transform 0.5s ease;
  }

  &.logo_icon {
    transform: scale(0);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1101px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  display: none;
  cursor: pointer;

  @media (max-width: 1101px) {
    display: flex;
  }

  .menu_icon,
  .exit_icon {
    transition: transform 0.5s ease;
  }

  .exit_icon {
    transform: rotate(180deg);
  }
`;
