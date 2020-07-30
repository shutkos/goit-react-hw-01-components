import React from "react";
import PropTypes from "prop-types";
import TransactionHistoryItem from "../TransavtionHistoryItem/TransactionHistoryItem";
import stylesTransactionHistory from "./TransactionHistory.module.css";

function TransactionHistory(props) {
    return (
        <table className={stylesTransactionHistory.table}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            {props.items.map((data) => {
                return <TransactionHistoryItem key={data.id} type={data.type} amount={data.amount}
                                               currency={data.currency}/>;
            })}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionHistory;