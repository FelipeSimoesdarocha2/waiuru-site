import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 100px;

  @media (max-width: 560px) {
    width: 100%;
    height: 50px;
  }
`;

export const Spacer130 = styled.div`
  width: 100%;
  height: 130px;
`;
