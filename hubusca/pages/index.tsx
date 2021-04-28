import { Container, Title, Form, Text } from '../styles/home';
import { FiSearch } from 'react-icons/fi';
import UserCard from './components/UserCard';

export default function Home() {
  return (
    <Container>
      <Title>HUBusca</Title>
      <Form>
        <input placeholder="Busque um usuário..." />
        <button type="submit">
          <FiSearch />
        </button>
      </Form>
    </Container>
  );
}
