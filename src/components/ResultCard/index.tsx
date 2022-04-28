import { Profile } from 'types/profile';
import './styles.css';

type Props = {
  profile: Profile;
};

const ResultCard = (profile: Props) => {

  return (
    <div className="container result-container">
      <div className="img-container">
        <img src={profile.profile.avatar_url} alt="" />
      </div>
      <div className="information-container">
        <h3 className="text-primary">Informações</h3>
        <div className="profile-container base-input-format">
          <label htmlFor="">Perfil: </label>
          <a href={profile.profile.html_url} target="_blank">
            {profile.profile.html_url}
          </a>
        </div>
        <div className="followers-container base-input-format">
          <label htmlFor="">Seguidores: </label>
          <p>{profile.profile.followers}</p>
        </div>
        <div className="location-container base-input-format">
          <label htmlFor="">Loacalidade: </label>
          <p>{profile.profile.location}</p>
        </div>
        <div className="name-container base-input-format">
          <label htmlFor="">Nome: </label>
          <p>{profile.profile.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
