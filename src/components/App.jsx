import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '30vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
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
      <TransactionHistory items={transactions} />
      <br />
      <hr />
      <br />
      <hr />
    </>
  );
};
