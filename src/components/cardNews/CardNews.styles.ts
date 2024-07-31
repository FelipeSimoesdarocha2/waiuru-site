import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
  width: 100%;
  /* min-height: 100%; */
  /* min-height: 300px; */
  /* height: fit-content; */

  max-width: 350px;
  max-height: 480px;
  margin: 0 20px;
  padding: 32px;
  border-radius: 16px;
  background: var(--light-azure);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 560px) {
    max-width: 228px;
    padding: 24px;

    img {
      max-width: 180px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 556px) {
    gap: 8px;
  }

  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  span p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;

      @media (max-width: 560px) {
        font-size: 12px;
      }
    }

  h2 {
    color: var(--purple);
    font-size: 32px;
    font-weight: 700;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;


    @media (max-width: 1101px) {
      font-size: 28px;
    }

    @media (max-width: 991px) {
      font-size: 24px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }

  .paragraph {
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;
