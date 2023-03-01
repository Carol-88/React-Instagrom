import React from "react";

function FooterIcons() {
  return (
    <div className="footer-icons">
      <div className="footer-icons-img">
        {/* <img className="icon" src="/icons/corazon.png" alt="like" like={like} /> */}

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
