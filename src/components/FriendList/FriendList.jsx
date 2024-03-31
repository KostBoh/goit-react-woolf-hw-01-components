import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name }, idx) => (
        <FriendListItem key={idx} name={name} avatar={avatar} />
      ))}
    </ul>
  );
};

// , isOnline
// isOnline={isOnline}
