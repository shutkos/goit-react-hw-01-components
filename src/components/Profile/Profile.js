import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({avatar, name, tag, location, stats:{followers, views, likes}}) => {
    return(
        <div className={styles.profile}>
            <div className={styles.description}>
                <img src={avatar} alt="user avatar" className={styles.avatar} />
                <p className={styles.nameSelector}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.defaultProps = {
    avatar: "https://via.placeholder.com/150/cccccc/000000/?text=No%20avatar",
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}

export default Profile;