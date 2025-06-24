import { useNavigate } from 'react-router-dom';

export default function Account({ isLoggedIn }) {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
<div className="account-page">
      <div className='upper-login'>
        <div className="profile">
        <img src="\photo_2025-06-24_14-51-18.jpg" alt="Profile" />
        <h3>Name Surname</h3>
        <p>Phone: +48 123 456 789</p>
        <p>Email: example@mail.com</p>
        <p>Birthday: 2000-05-05</p>
        <p>City: Poznan</p>
        <p>Address: Kutrzeby 10, Poznan</p>
        <p>Postal code: 61-719</p>
      </div>

      <div className="pets">
        <div className="pet-card">
          <h4>🐱 Cat</h4>
          <p>Breed: Scottish Fold</p>
          <p>Birthday: 2025-05-05</p>
          <p>Sex: female</p>
          <p>Blood Type: A</p>
          <p>Neutered: No</p>
        </div>
        <div className="pet-card">
          <h4>🐶 Dog</h4>
          <p>Breed: Labrador</p>
          <p>Birthday: 2025-05-05</p>
          <p>Sex: male</p>
          <p>Blood Type: A</p>
          <p>Neutered: No</p>
        </div>
       </div>
      </div>

      <div className="history">
        <h4>Medical history</h4>
        <p>All your medical history will be displayed here in the future…</p>
      </div>
    </div>
  );
}
