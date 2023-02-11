import { useState } from "react";

function Connect({ t }) {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  const { fName, lName, email, message } = formData;

  const handleSubmit = (e) => {
    console.log("Your message has been submitted");
    console.log({
      name: `${fName} ${lName}`,
      message: message,
    });
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  return (
    <section>
      <div>{t("contact")}</div>
      <div>{t("contactTitle")}</div>
      <div>{t("contactBody")}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className=""
            id="fName"
            name="fName"
            placeholder={t("firstName")}
            value={fName}
            onChange={onChange}
            required
            // autoComplete='off'
          />
          <input
            type="text"
            className=""
            id="lName"
            name="lName"
            placeholder={t("lastName")}
            value={lName}
            onChange={onChange}
            required
            // autoComplete='off'
          />
          <input
            type="email"
            className=""
            id="email"
            name="email"
            placeholder={t("email")}
            value={email}
            onChange={onChange}
            required
            // autoComplete='off'
          />
          <input
            type="text"
            className=""
            id="message"
            name="message"
            placeholder={t("message")}
            value={message}
            onChange={onChange}
            required
            // autoComplete='off'
          />

          <button
            type="submit"
            className="button"
            // disabled={!!(!validPassword || !passwordMatch)}
          >
            Make my mobile buzz!
          </button>
        </form>
      </div>
    </section>
  );
}

export default Connect;
