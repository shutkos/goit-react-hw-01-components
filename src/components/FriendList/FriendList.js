import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

let FriendList = ({ friends }) => (
    <ul className={styles.list}>
        {friends.map((data) => (
            <FriendListItem {...data} key={data.id} />
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;

