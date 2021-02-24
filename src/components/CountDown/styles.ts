import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);
    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
      color: var(--white);
    }

    > div {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: #02d88c;
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;
      color: var(--white);

      > span {
        flex: 1;
      }

      > span:first-child {
        border-right: 1px solid #f0f1f3;
      }

      > span:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }

  .finished-cycle {
    cursor: not-allowed;
  }

  .stop-button,
  .finished-cycle {
    color: #434343;
    background: var(--white);

    &:not(:disabled):hover {
      background-color: var(--blue);
      color: var(--white);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    border: 0;
    border-radius: 5px;
    background: var(--blue);
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color 0.2s;

    &:not(:disabled):hover {
      background: var(--blue-dark);
    }
  }
`;
