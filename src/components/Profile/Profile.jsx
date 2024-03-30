export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <br />
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <br />
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <br />
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
