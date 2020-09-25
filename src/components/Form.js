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
    <>
      {data !== undefined ? (
        <>
          {console.log(data.form)}
          <form id="contactForm" name="contactForm">
            <MailOutlineIcon />
            <fieldset>
              <div>
                {/* input name */}
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
              {/* input subject  */}
              <div>
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
              {/* message */}
              <div>
                <label htmlFor="contactMessage">{data.form.message}</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>
              {/* send form */}
              <div>
                <button
                  type="submit"
                  onClick={handleSendForm}
                  className="submit"
                >
                  {data.form.sendBtn}
                </button>
                {/* <span id="image-loader">
             <img alt="" src="images/loader.gif" />
           </span> */}
              </div>
            </fieldset>
          </form>
        </>
      ) : null}
    </>
  );
}

export default Form;
