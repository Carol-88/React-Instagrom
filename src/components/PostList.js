import Post from "./Post";

const PostList = ({ photos }) => {
  return (
    <ul className="postList">
      {photos?.map((photo) => {
        return (
          <li key={photo.photoName}>
            <Post
              name={photo.photoName}
              location={photo.location}
              caption={photo.caption}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
