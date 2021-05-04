import { GetStaticPaths, GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { api } from '../../src/services/api';

import { Header, UserInfo, Repository } from '../../styles/users';

interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  url: string;
  created_at: string;
  pushed_at: string;
}

interface User {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  followers: number;
  public_repos: number;
  repos: Repository[];
}

interface UserPageProps {
  user: User;
  repositories: Repository[];
}

export default function UserPage({ user, repositories }: UserPageProps) {
  return (
    <>
      <Header>
        <header>
          <Link href="/" passHref>
            <a>
              <FiChevronLeft size={20} />
            </a>
          </Link>
          <img src={user.avatar_url} alt={user.name} />
          <UserInfo>
            <strong>{user.name}</strong>
            <p>{user.id}</p>
            <p>{user.login}</p>
            <p>{user.location}</p>
          </UserInfo>
        </header>
        <ul>
          <li>
            <strong>{user.followers}</strong>
            <span>seguidores</span>
          </li>
          <li>
            <strong>{user.public_repos}</strong>
            <span>repositórios públicos</span>
          </li>
        </ul>
      </Header>
      {repositories.map((repository) => (
        <Repository>
          <a href={repository.url}>
            <div key={repository.id}>
              <strong>{repository.name}</strong>
              <p>{repository.description || 'Descrição não disponível'}</p>
            </div>
            <ul>
              <li>
                <strong>Linguagem</strong>
                <p>{repository.language || 'Linguagem não disponível'}</p>
              </li>
              <li>
                <strong>Data de criação</strong>
                <p>{repository.created_at}</p>
              </li>
              <li>
                <strong>Último push</strong>
                <p>{repository.pushed_at}</p>
              </li>
            </ul>
            <FiChevronRight size={20} />
          </a>
        </Repository>
      ))}
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
  const repos = await api.get(`users/${login}/repos`);
  const reposResponse = repos.data;

  const repositories = reposResponse.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      url: repo.html_url,
      created_at: format(parseISO(repo.created_at), 'd MMM y', {
        locale: ptBR,
      }),
      pushed_at: format(parseISO(repo.pushed_at), 'd MMM y', {
        locale: ptBR,
      }),
    };
  });

  const user = {
    id: data.id,
    avatar_url: data.avatar_url,
    name: data.name,
    login: data.login,
    location: data.location,
    followers: data.followers,
    public_repos: data.public_repos,
    repos: repositories,
  };

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
