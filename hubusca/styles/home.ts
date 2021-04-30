import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 4rem 8rem;
`;

export const Title = styled.h1`
  max-width: 450px;
  line-height: 6rem;
  color: var(--blue);

  font-family: Roboto, sans-serif;
  font-size: 3.5rem;
`;

export const Text = styled.p`
  padding-top: 1rem;
  padding-bottom: 0.2rem;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-body);
`;

export const Form = styled.form<FormProps>`
  margin-top: 0.5rem;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 4rem;
    padding: 0 0.75rem;
    margin-right: 0.5rem;
    border: 1;
    border-radius: 2;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    font-size: 1.25rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 1.75rem;
    border-radius: 0.25rem;
    height: 4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.875);
    }
  }

  svg {
    color: #fff;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
