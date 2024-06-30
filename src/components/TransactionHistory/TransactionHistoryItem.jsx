import React from 'react';
import style from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={style.transactionHistoryItem}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default TransactionHistoryItem;
