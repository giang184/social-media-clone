import React from "react";
import Contact from "./Contact"

const masterContactList = [
  {
    name: "Andrew",
    online: true,
  },
  {
    name: "Max",
    online: true,
  },
  {
    name: "Allister",
    online: false,
  },
  {
    name: "Arthur",
    online: true,
  },
  {
    name: "Baron",
    online: false,
  },
]

function ContactList(){
  return (
    <React.Fragment>
      {masterContactList.map((contact, index) =>
        <Contact name = {contact.name}
          online = {contact.online}
          key = {index}/>
      )}
    </React.Fragment>
  );
}

export default ContactList;