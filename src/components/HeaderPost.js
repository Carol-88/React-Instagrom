import React from "react";
import Avatar from "./Avatar";
import UserName from "./UserName";
import PostDate from "./PostDate";

function HeaderPost({ name, avatar, date }) {
  return (
    <>
      <Avatar img={avatar} />
      <UserName name={name} />
      <PostDate date={date} />
    </>
  );
}

export default HeaderPost;
