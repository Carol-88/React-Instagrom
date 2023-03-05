import "./App.css";
import PostList from "./components/PostList";
// import Avatar from "./components/Avatar";
import Stories from "./components/Stories";
import UserName from "./components/UserName";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from ".";
import LogoutForm from "./components/LogoutForm";

function App(data) {
  const [photos, setPhotos] = useState([]);
  const [userName, setUserName] = useState(null);
  const [token] = useContext(TokenContext);

  const getPhotos = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/photos`, {
      headers: { authorization: token },
    });
    const responseBody = await res.json();

    setPhotos(responseBody.data);
    setUserName(data.username);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <header>
        <Stories />
      </header>
      <main>
        <PostList photos={photos} />
      </main>
      <footer>
        <div className="footerApp">
          {/* <Avatar img={data.avatar} /> */}

          <p className="username-footer spaceFooter">
            <UserName name={userName} />
          </p>

          <p className="logout spaceFooter">
            <LogoutForm />
          </p>

          <p className="info spaceFooter">
            Información - Ayuda - Prensa - API - Empleo - Privacidad -
            Condiciones - Ubicaciones - Idioma - Español
          </p>
          <p className="insta-footer">
            {" "}
            © 2023 INSTAGROM FROM CAROLINA & MARTA
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
