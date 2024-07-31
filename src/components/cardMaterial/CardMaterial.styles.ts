import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  width: 513px;
  height: 350px;
  padding: 40px;
  border-radius: 16px;
  background: #f8f9ff;

  @media (max-width: 991px) {
    display: flex;
    width: 228px;
    padding: 22px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
  }

  p {
    color: var(--black);
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 85px;
    @media (max-width: 991px) {
      width: 40px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .info p {
    color: var(--purple);
  }

  .info h2 {
    font-size: 28px;
    font-weight: 700;
    color: var(--purple);
    white-space: nowrap;

    @media (max-width: 1101px) {
    }

    @media (max-width: 991px) {
      font-size: 24px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;
