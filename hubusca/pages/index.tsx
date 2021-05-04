import { Container, Header, Title, Form, Error } from '../styles/home';
import { UserCard, UserInfo, Avatar } from '../styles/UserCard';
import { FiSearch } from 'react-icons/fi';
import { useUser } from '../src/context/UserContext';
import Link from 'next/link';

export default function Home() {
  const { users, newUser, addUser, inputError, createNewUser } = useUser();

  return (
    <Container>
      <Header>
        <Title>HUBusca</Title>
        <a href="https://www.clicksoft.com.br/">
          <img src={'/clicksoftLogo.svg'} alt="Clicksoft" />
        </a>
      </Header>
      <Form hasError={!!inputError} onSubmit={addUser}>
        <input
          value={newUser}
          onChange={(e) => createNewUser(e.target.value)}
          placeholder="Busque um usuário..."
        />
        <button type="submit">
          <FiSearch />
        </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      {users.map((user) => (
        <UserCard key={user.id}>
          <Link href={`/users/${user.login}`} passHref>
            <Avatar>
              <img src={user.avatar_url} alt={user.name} />
            </Avatar>
          </Link>
          <UserInfo>
            <strong>{user.name}</strong>
            <p>{user.login}</p>
            <p>{user.location}</p>
          </UserInfo>
        </UserCard>
      ))}
    </Container>
  );
}
