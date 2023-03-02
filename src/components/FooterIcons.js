function FooterIcons() {
  return (
    <div className="footer-icons">
      <div className="footer-icons-img">
        <img className="icon" src="/icons/corazon.png" alt="like" />
        <img className="icon" src="/icons/comentario.png" alt="comment" />
        <img className="icon" src="/icons/compartir.png" alt="share" />
      </div>
      <div className="icon-last">
        <img className="icon" src="/icons/marcador.png" alt="keep-post" />
      </div>
    </div>
  );
}
export default FooterIcons;

///////PRUEBA
// import { useContext, useState } from "react";
// import { TokenContext } from "..";

// function FooterIcons() {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [token] = useContext(TokenContext);

//   const handleSubmit = async (e) => {
//     try {
//       setLoading(true);

//       e.preventDefault();

//       const data = new FormData(e.target);

//       const res = await fetch(`${process.env.REACT_APP_BACKEND}/favs`, {
//         method: "POST",
//         body: data,
//         headers: {
//           Authorization: token,
//         },
//       });

//       if (!res.ok) {
//         const body = await res.json();

//         throw new Error(body.message);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="footer-icons">
//       <div className="footer-icons-img">
//         <ul>
//           <li onSubmit={handleSubmit}>
//             <img className="icon" src="/icons/corazon.png" alt="like" />
//           </li>

//           <li>
//             <img className="icon" src="/icons/comentario.png" alt="comment" />
//           </li>
//           <li>
//             <img className="icon" src="/icons/compartir.png" alt="share" />
//           </li>
//         </ul>
//       </div>

//       <div className="icon-last">
//         <img className="icon" src="/icons/marcador.png" alt="keep-post" />
//       </div>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default FooterIcons;
