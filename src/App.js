import React from "react";
import aUserData from "./db/user.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import aStatisticData from "./db/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import aFriends from "./db/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import aTransactions from "./db/transactions.json";

const App = () => {
    return (
        <>
            <Profile
                name={aUserData.name}
                tag={aUserData.tag}
                location={aUserData.location}
                avatar={aUserData.avatar}
                stats={aUserData.stats}
            />
            <Statistics title="upload stats" stats={aStatisticData}/>
            <FriendList friends={aFriends}/>
            <TransactionHistory items={aTransactions}></TransactionHistory>
        </>
    );
};
export default App;