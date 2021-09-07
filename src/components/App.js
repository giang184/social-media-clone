import React from "react";
import Header from "./Header";
import Profile from "./Profile";

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
            <Feed />
          </div>
          <div class="col-sm">
            <Contact />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;