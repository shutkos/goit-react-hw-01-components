import React from "react";
import PropTypes from "prop-types";
import { item, avatarSel, nameSel, status, statusOn, statusOff } from "./FriendListItem.module.css";

function FriendListItem(prop) {
    let { avatar, name, isOnline } = prop;

    return (
        <li className={item}>
            <span className={[status, isOnline ? statusOn : statusOff].join(" ")}>&nbsp;</span>
            <img className={avatarSel} src={avatar} alt={name} width="48" />
            <p className={nameSel}>{name}</p>
        </li>
    );
}

FriendListItem.defaultProps = {
    avatar: "https://via.placeholder.com/150/cccccc/000000/?text=No%20avatar",
};

FriendListItem.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;