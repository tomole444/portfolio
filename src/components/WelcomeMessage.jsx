function WelcomeMessage({ t }) {
  return (
    <section>
      <div className="container">
        <div>
          <h3 className="text-accent-400 fs-small-sub fw-accent-italic">
            {t("functionGreet")}
          </h3>

          <h1>Oliver Jones</h1>
          <h1 className="text-accent-300">{t("jobRole")}</h1>
          <h2 className="text-accent-300">{t("loveGradients")}</h2>

          <button className="button">{t("connectme")}</button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;
