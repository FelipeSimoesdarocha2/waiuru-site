import styled from 'styled-components';

export const Component = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  cursor: pointer;

  .title {
    display: contents;
    color: var(--dark-sapphire);
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    white-space: nowrap;
  }

  p:hover {
    color: var(--purple);
  }

  p::selection {
    background: none;
  }

  &.active p {
    color: var(--purple);
    font-weight: 700;
  }

  p:active {
    transform: scale(0.95);
    color: var(--purple);
  }

  &.active p:active {
    transform: scale(1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: absolute;
    top: 30px;
    z-index: 100;

    background: var(--white);
    border-radius: 4px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    :hover {
      background-color: var(--light-silver);
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
      padding: 0px 5px;

      &.active {
        background: rgba(82, 55, 157, 0.05);
      }
    }

    .item button {
      width: 100%;
      padding: 6px 5px;
    }

    button p {
      color: var(--black-primary);
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      text-align: start;
      white-space: nowrap;
      width: 100%;
    }

    p::selection {
      background: none;
    }
  }

  &:hover .content {
    opacity: 1;
    visibility: visible;
  }
`;
