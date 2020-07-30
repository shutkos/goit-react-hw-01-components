import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import  generateColor from "../../helpers/generateColor";

const Statistics = ({title, stats}) => {
    return(
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statisticsList}>
                {stats.map((stat) => (
                    <li
                        className={styles.statisticsListItem}
                        key={stat.id}
                        style={{
                            backgroundColor: generateColor(),
                        }}
                    >
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};

Statistics.defaultProps = {
    title: "",
};

export default Statistics;