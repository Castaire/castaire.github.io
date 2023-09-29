function Bookmark() {

  /* Custom bookmark */
  
  return (
    <div id="bookmark">
      <div className="bookmark-section" id="intro">
        <h1>
          {">"}
          {">"} JENNE HUI
        </h1>
        <p>
          Integration Lead @ Conexiom.
          <br />
          UBC 2019. Statistics + Comp. Sci
          <br />
          <br />
          <span>&nbsp; About me: &nbsp;</span>
          <br />
          ~ Hi, Jenne here!
          <br />
          <br />I am mostly occupied with work these days, but in my spare time
          you can usually find me:
          <br />
        </p>
        <p className="align-left">
          - building out weekend projects
          <br />
          - learning and playing music
          <br />
          - engineering dubiously in Hyrule
          <br />
          <br />
        </p>
        <p>Thanks for visiting my site!</p>
        <br />
      </div>
      <div className="bookmark-section" id="quests">
        <p>
          <span>&nbsp; What I am up to: &nbsp;</span>
          <br />
        </p>
        <p className="align-left">
          - violining lots
          <br />
          - learning Go web development
          <br />
          - seeking out niche coffee profiles 
        </p>
        <br />
      </div>
      <div className="bookmark-section" id="contact">
        <p>
          <span className="align-label-left">&nbsp; Find me: &nbsp;</span>&nbsp;
          <a href="mailto:jenne.hui@gmail.com">@ Email</a>&nbsp;|&nbsp;
          <a href="https:/github.com/Castaire" target="_blank" rel="noreferrer">
            @ Github
          </a>
          &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/jenne-hui" target="_blank" rel="noreferrer">
            @LinkedIn
          </a>
          <br />
          <br />
          <span className="align-label-left">&nbsp; Resumé: &nbsp;&nbsp;</span>&nbsp;
          <a
            href="https://drive.google.com/file/d/1RYxuOXgPbm9fZaeqAwM89WrVU9JRE_vh/view?usp=drive_link"
            target="_blank" rel="noreferrer">
            right here!
          </a>
        </p>
      </div>
    </div>
  );
}

export default Bookmark;