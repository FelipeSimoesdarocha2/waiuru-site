import styled from 'styled-components';

export const Component = styled.div`
  position: relative;
  cursor: pointer;

  .container {
    display: flex;
    align-items: center;
    gap: 17px;
    transition: all var(--transition-1);

    & .focused {
      transform: rotate(-180deg);
      transition: all var(--transition-1);
    }
  }

  ul {
    position: absolute;
    top: 35px;
    width: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--white);
    transition: 500ms;
    z-index: 100;
    border-radius: 4px;
    background: var(--white);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  }

  li {
    width: 100%;
    padding: 8px;
  }

  p {
    color:  #212832;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
  }

  p::selection {
    background: none;
  }
`;
