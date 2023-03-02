import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import FooterIcons from "./FooterIcons";
import UserName from "./UserName";
import { useEffect, useContext, useState } from "react";
import { TokenContext } from "..";

function FooterPost(data) {
  const [token] = useContext(TokenContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [like, setLike] = useState(null);
  const [showComents, setShowComents] = useState(false);

  useEffect(() => {
    async function loadUserLike() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/photos`,
          {
            headers: { Authorization: token },
          }
        );
        const { data } = await response.json();

        setLike(data[1].likes); ////Cómo sacar los de cada post

        console.log("DATA CERO", data[1].likes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (token) loadUserLike();
  }, [token]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <FooterIcons />
      <p>{like} Me gusta</p>
      <p>
        <UserName />
      </p>
      <p></p>
      <button
        className="showComments"
        onClick={() => {
          setShowComents(!showComents);
        }}
      >
        Ver comentarios
      </button>
      {showComents && <CommentList />}
      <p className="commentForm">
        <CommentForm />
      </p>
    </>
  );
}

export default FooterPost;
