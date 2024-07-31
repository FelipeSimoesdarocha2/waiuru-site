import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;

  .decore {
    position: absolute;
    top: 0%;
    left: 0;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .highlights {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 560px) {
      padding-top: 0;
    }
  }

  .highlights .title {
    color: var(--purple);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: 1101px) {
      font-size: 30px;
    }

    @media (max-width: 991px) {
      font-size: 22px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
      max-width: 236px;
    }
  }

  .highlights .list {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;
