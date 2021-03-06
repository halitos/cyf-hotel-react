import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profileId, setProfileId] = useState();
  useEffect(() => {
    if (props.id) {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(res => res.json())
        .then(data => {
          setProfileId(data);
        });
    }
  }, [props.id]);

  if (profileId) {
    return (
      <div className="nav flex-column align-items-center bg-success p-2">
        <h5>Customer Profile</h5>
        <ul className="nav flex-column">
          <li className="list-item">
            <b>Customer ID : </b>
            {profileId.id}
          </li>
          <li>
            <b>E-mail :</b> {profileId.email}
          </li>
          <li>
            <b>Is VIP? </b>
            {profileId.vip ? " Yes" : " No"}
          </li>
          <li>
            <b>Telepone Number :</b> {profileId.phoneNumber}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default CustomerProfile;
