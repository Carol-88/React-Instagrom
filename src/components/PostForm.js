import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "..";
import Avatar from "./Avatar";

function PostForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [token] = useContext(TokenContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      setLoading(true);

      e.preventDefault();

      const data = new FormData(e.target);

      const res = await fetch(`${process.env.REACT_APP_BACKEND}/addPhoto`, {
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) {
        const body = await res.json();

        throw new Error(body.message);
      }

      navigate("/perfil");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Avatar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-post">Texto</label>
        <input
          id="text-post"
          name="caption"
          type="text"
          placeholder="Escribe.."
        ></input>
        <label htmlFor="location">Localización</label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Localización"
        ></input>
        <label htmlFor="photo-post">Foto</label>
        <input
          type="file"
          id="photo-post"
          name="photo"
          accept="image/png, image/jpg"
        ></input>
        <button type="submit">Enviar</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default PostForm;
