import styled from "styled-components";

export const Container = styled.div`
  background: rgba(128, 128, 128, 0.8);
  /* background: rgba(242, 243, 245, 0.8); */

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: var(--blue);
  /* background: var(--white); */
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60 rgba(255, 255, 255, 0.05);
  /* box-shadow: 0 0 60 rgba(0, 0, 0, 0.05); */
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--white);
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--green);
    margin-top: 0.25rem;
  }

  p {
    color: var(--green);
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0;
    outline: var(--blue);
  }
`;
