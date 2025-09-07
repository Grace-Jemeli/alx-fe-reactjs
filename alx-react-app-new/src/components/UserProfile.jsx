// src/components/UserProfile.jsx
const UserProfile = (props) => {
  return (
    <div>
      <h2 style={{ color: 'blue', border: '3px solid black', padding: '10px', margin: '2px', }}>{props.name}</h2>
      <p>Age:<span style={{ fontWeight: 'bold' }}></span> {props.age}</p>
      <p style={{ color: 'red' }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
