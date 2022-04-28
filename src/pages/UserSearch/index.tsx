import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import { Profile } from 'types/profile';
import CardLoader from './CardLoader';

type FormData = {
  user: string;
};

const UserSearch = () => {
  const [isNull, setIsNull] = useState(false);
  const [isLoading, setIsLoding] = useState(false);
  const [profile, setProfile] = useState<Profile>();
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleInputUserChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoding(true);
    setIsNull(false);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .finally(() => {
        setIsLoding(false);
      })
      .catch((error) => {
        setProfile(undefined);
        setIsNull(true);
      });
  };

  return (
    <div className="cep-search-container">
      <div className="container search-container">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleInputUserChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? (
        <CardLoader />
      ) : isNull ? (
        <div className="error-container">
          <h1>Nenhum usuário encontrado</h1>
        </div>
      ) : (
        profile && <ResultCard profile={profile} />
      )}
    </div>
  );
};

export default UserSearch;
