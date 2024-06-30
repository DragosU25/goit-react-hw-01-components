import React from 'react';
import FriendListItem from './FriendListItem';

import styles from './FriendsList.module.css'; // Import the FriendList CSS module

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
export default FriendList;
