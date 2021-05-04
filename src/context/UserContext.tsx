import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  avatar_url: string;
  login: string;
  location: string;
}

interface UserContextData {
  users: User[];
  newUser: string;
  inputError: string;
  addUser(event: FormEvent<HTMLFormElement>): Promise<void>;
  createNewUser(user: string): void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  function createNewUser(newUser: string) {
    setNewUser(newUser);
  }

  async function addUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!newUser) {
      setInputError('Digite o login de um usuário');
      return;
    }

    const userExists = users.find((user) => user.id === users[user.id]);

    if (userExists) {
      setInputError('Esse usuário já existe');
      return;
    }

    try {
      const response = await api.get<User>(`users/${newUser}`);
      const user = response.data;
      console.log(user);

      setUsers([...users, user]);
      setNewUser(newUser);
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse usuário');
    }
  }

  return (
    <UserContext.Provider
      value={{
        users,
        newUser,
        inputError,
        addUser,
        createNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
