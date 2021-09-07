import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import FeedList from "./FeedList";
import ContactList from "./ContactList";

function App(){
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Profile />
          </div>
          <div className="col-sm">
            <FeedList />
          </div>
          <div className="col-sm">
            <ContactList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;