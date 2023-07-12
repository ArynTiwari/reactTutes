import React from "react";
import NewCunterValue from "./NewCunterValue";
const Profile = (props) => {
  console.log("Rendered Profile");
  return (
    <>
      <div className="card mx-10" key={props.id}>
        <h3 className="text-2xl">Name: {props.name}</h3>
        <p>
          <strong>Username:</strong> {props.username}
        </p>
        <NewCunterValue/>
        {/* <p>
          <strong>Email:</strong> {props.email}
        </p>
        <div className="address">
          <p>
            <strong>Address:</strong>
          </p>
          <p>{props.street}</p>
          <p>Gwenborough, 92998-3874</p>
        </div>
        <p>
          <strong>Phone:</strong> 1-770-736-8031 x56442
        </p>
        <p>
          <strong>Website:</strong> hildegard.org
        </p>
        <p>
          <strong>Company:</strong> Romaguera-Crona
        </p>
        <p>
          <strong>Catchphrase:</strong> Multi-layered client-server neural-net
        </p>
        <p>
          <strong>Business:</strong> Harness real-time e-markets
        </p> */}
      </div>
    </>
  );
};

export default React.memo(Profile);
