import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import FriendList from './FriendList';
import friendsData from '../data/friends.json';
import TransactionHistory from './TransactionHistory';
import TransactionHistoryData from '../data/transactions.json';
function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="File Types" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={TransactionHistoryData} />
    </div>
  );
}

export default App;
