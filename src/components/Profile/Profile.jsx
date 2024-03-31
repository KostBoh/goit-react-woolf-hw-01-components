export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <br />
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <br />
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <br />
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
