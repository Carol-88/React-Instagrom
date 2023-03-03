function FooterIcons({ likedByLogguedUser }) {
  function liked() {}
  function like() {}

  return (
    <div className="footer-icons">
      <div className="footer-icons-img">
        {likedByLogguedUser ? (
          <img
            onClick={liked}
            className="icon"
            src="/icons/red-heart-icon.webp"
            alt="liked"
          />
        ) : (
          <img
            onClick={like}
            className="icon"
            src="/icons/corazon.png"
            alt="like"
          />
        )}
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
