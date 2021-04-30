import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { api } from '../../src/services/api';

import { Header, UserInfo, Repository } from './styles';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  followers: number;
}

interface UserPageProps {
  user: User;
}

export default function UserPage({ user }: UserPageProps) {
  return (
    <>
      <Header>
        <header>
          <Link href="/" passHref>
            <a>
              <FiChevronLeft size={20} />
            </a>
          </Link>
          <img
            src="https://avatars.githubusercontent.com/u/30394677?v=4"
            alt="Felipe"
          />
          <UserInfo>
            <strong>Felipe Rodrigues</strong>
            <p>123921740</p>
            <p>felipersdf</p>
            <p>Brasil</p>
          </UserInfo>
        </header>
        <ul>
          <li>
            <strong>76</strong>
            <span>seguidores</span>
          </li>
          <li>
            <strong>22</strong>
            <span>repositórios públicos</span>
          </li>
        </ul>
      </Header>
      <Repository>
        <a href="/">
          <div>
            <strong>Repositório X</strong>
            <p>
              Lorem Ipsum Dolor Descrição Longa para ver como vai ficar. Vamos
              ver como fica agora ainda maior
            </p>
          </div>
          <ul>
            <li>
              <strong>Linguagem</strong>
              <p>JavaScript</p>
            </li>
            <li>
              <strong>Data de criação</strong>
              <p>24 Mar 2021</p>
            </li>
            <li>
              <strong>Último push</strong>
              <p>31 Fev 2021</p>
            </li>
          </ul>
          <FiChevronRight size={20} />
        </a>
      </Repository>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { login } = context.params;
  const { data } = await api.get(`users/${login}`);
  const user = {};

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
