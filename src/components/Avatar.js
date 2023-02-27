import React from "react";

function Avatar(data) {
  return (
    <>
      <img className="avatar-img" src={data.avatar} alt={data.name} />
    </>
  );
}

export default Avatar;
