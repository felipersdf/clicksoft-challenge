import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;

  height: 35vh;
  margin-left: 160px;

  header {
    display: flex;
    align-items: center;

    img {
      margin-left: 16px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: 64px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const UserInfo = styled.div`
  margin-left: 24px;

  strong {
    font-size: 36px;
    color: #3d3d4d;
  }

  p {
    font-size: 18px;
    color: #737380;
    margin-top: 4px;
  }
`;

export const Repository = styled.div`
  margin-left: 160px;
  margin-top: 12px;
  width: 70%;
  display: flex;

  a {
    display: flex;
    align-items: center;
    background: var(--shape);
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    text-decoration: none;
    color: var(--text-title);

    transition: transform 0.2s;

    font-size: 2rem;

    p {
      margin-top: 4px;
      max-width: 85%;
      font-size: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    svg {
      margin-left: auto;
      color: #cbcdd6;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    width: 60%;

    li {
      flex: 1;
      margin-left: 32px;
      font-size: 18px;
      color: #3d3d4d;

      strong {
        font-size: 1rem;
      }
    }

    p {
      font-size: 16px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;
