import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div> */}
      <Profile {...user} />
      <br />
      <hr />
      <br />
      <hr />
      <Statistics title="Upload stats" stats={data} />
      <br />
      <hr />
      <br />
      <hr />
      <FriendList friends={friends} />
      <br />
      <hr />
      <br />
      <hr />
    </>
  );
};
