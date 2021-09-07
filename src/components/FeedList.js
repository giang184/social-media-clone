import React from "react";
import Feed from "./Feed"

const masterFeedList = [
  {
    name: "Max",
    content: "So much good content...",
    time: "2 hrs",
  },
  {
    name: "Andrew",
    content: "So much OTHER good content...",
    time: "3 hrs",
  },
  {
    name: "Tim",
    content: " Venenosaurus Chasmosaurus Uteodon Drusilasaura Zhongyuansaurus.",
    time: "6 hrs",
  },
  {
    name: "Jim",
    content: "Achelousaurus Neuquenraptor Aerosteon Ornithomimoides Ultrasaurus Traukutitan Skorpiovenator Adeopapposaurus.",
    time: "6 hrs",
  },
  {
    name: "Matt",
    content: "Cruella was a great movie, but...",
    time: "12 hrs",
  },
  {
    name: "Steve",
    content: "Disney is going downhill, such terrible content...",
    time: "16 hrs",
  },
]

function FeedList() {
  return (
    <React.Fragment>      
    <button type="button" class="btn btn-secondary">What's happening?</button>
      {masterFeedList.map((feed, index) =>
      <Feed name={feed.name}
        content={feed.content}
        time={feed.time}
        key={index}/>
      )}
    </React.Fragment>
  )
}

export default FeedList;