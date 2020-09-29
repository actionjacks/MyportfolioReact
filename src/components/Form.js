import React, { useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Form({ data }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendForm = (e) => {
    e.preventDefault();
    const myMail = "actionjacks22@gmail.com";
    window.open(`mailto:${myMail}?subject=${subject}&body=${name}: ${message}`);
  };
  return (
    <div className="form">
      {data !== undefined ? (
        <>
          <form className="form__contactForm">
            <MailOutlineIcon className="form__icon" />
            <fieldset className="form__fieldset">
              <h3>{data.form.formTitle}</h3>
              <div className="form__button">
                <button
                  type="submit"
                  onClick={handleSendForm}
                  className="submit"
                >
                  {data.form.sendBtn}
                </button>
              </div>
              <div className="form__inputName">
                <label htmlFor="contactName">{data.form.name}</label>
                <input
                  value={name}
                  type="text"
                  defaultValue=""
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__inputTitle">
                <label htmlFor="contactSubject">{data.form.subject}</label>
                <input
                  value={subject}
                  type="text"
                  defaultValue=""
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form__inputTextArea">
                <label htmlFor="contactMessage">{data.form.message}</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>
            </fieldset>
          </form>
        </>
      ) : null}
    </div>
  );
}

export default Form;
