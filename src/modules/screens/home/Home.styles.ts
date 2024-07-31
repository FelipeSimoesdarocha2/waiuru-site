import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  margin-top: 2%;
  overflow-x: hidden;

  .bg_hero {
    position: absolute;
    top: 0;
    right: 0;
    outline: none !important;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .decore_solutions {
    position: absolute;
    top: 30%;
    left: 0;
    z-index: 1;

    @media (max-width: 1600px) {
      display: none;
    }
  }

  .decore_carrossel {
    position: absolute;
    bottom: calc(8% );
    left: 0;
    outline: none !important;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .decore_left_news {
    position: absolute;
    left: 0;
    bottom: 17%;
    outline: none !important;

    @media (max-width: 991px) {
      display: none;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  & > p:first-child {
    color: var(--grayish-charcoal);
    font-size: 20px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

export const Nav_Itens = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;
