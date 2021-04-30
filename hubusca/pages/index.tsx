import { Container, Title, Form, Error } from '../styles/home';
import { UserCard, UserInfo, Avatar } from '../styles/UserCard';
import { FiSearch } from 'react-icons/fi';
import { useUser } from '../src/context/UserContext';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function Home() {
  const { users, newUser, addUser, inputError, createNewUser } = useUser();

  return (
    <Container>
      <Title>HUBusca</Title>
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

          <FiChevronRight size={20} />
        </UserCard>
      ))}
    </Container>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await api.get('users', {
//     params: {
//       _limit: 2,
//     },
//   });

//   const users = data.map((user) => {
//     return {
//       id: user.id,
//       full_name: user.full_name,
//       avatar: user.avatar_url,
//       login: user.login,
//       location: user.location,
//       followers: user.followers,
//       public_repos: user.public_repos,
//       owner_repos: user.repos.length,
//     };
//   });

//   return {
//     props: {
//       users,
//     },
//     revalidate: 60 * 60 * 8,
//   };
// };
