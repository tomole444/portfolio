function About({ t }) {
  return (
    <section>
      <div className="container">
        <div>
          <h1>{t("about")}</h1>
          <div className="even-columns">
            <div>
              <p>{t("aboutme")}</p>
            </div>
            <div>
              <p>IMAGE GOES HERE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
