import Link from 'next/link';
import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  align-items: center;

  max-width: 700px;
  margin-top: 20px;

  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  transition: transform 0.2s;

  &:first-of-type {
    margin-top: 80px;
  }

  &:hover {
    transform: translateX(10px);
  }
  svg {
    margin-left: auto;
    color: #cbcdd6;
  }
`;

export const Avatar = styled.a`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  margin: 16px;
  flex: 1;

  strong {
    font-size: 20px;
    color: #3d3d4d;
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
  }
`;
