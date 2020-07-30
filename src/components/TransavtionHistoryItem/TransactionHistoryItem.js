import React from "react";
import PropTypes from "prop-types";
import styles from "../TransactionHistory/TransactionHistory.module.css";

let TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        <tr className={styles.tableRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;