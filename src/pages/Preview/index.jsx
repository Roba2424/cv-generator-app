import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { PROFICIENCY_LEVEL } from "../../utils/constant";
import DownloadResumeButton from "../../components/shared/DowloadPdf";

const CVTemplate = () => {
  const { name, email, phone, pitch } = useSelector(
    (state) => state.cv.personalInfo
  );

  const { skills, languages, socialLinks } = useSelector((state) => state.cv);

  return (
    <div className="cv-template" id="cv-template">
      <h1>Personal Information</h1>
      <h2>{name}</h2>

      <div className="contact-info">
        <p>
          <b>Email</b>: {email}
        </p>
        <p>
          <b>Phone</b>: {phone}
        </p>
      </div>
      <br />
      <h4>About me</h4>
      <p>{pitch}</p>

      <section>
        <h3>Social</h3>
        {Object.values(socialLinks).map((edu, index) => (
          <p key={index}>{edu}</p>
        ))}
      </section>

      <section>
        <h3>SKILLS</h3>
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </section>

      <section>
        <h3>LANGUAGES</h3>
        {languages.map((lang, index) => {
          const langLevel = PROFICIENCY_LEVEL[lang["level"]];
          const language = lang["language"];
          return <div key={index}>{`${language} : ${langLevel}`}</div>;
        })}
      </section>
      <DownloadResumeButton/>
    </div>
  );
};

export default CVTemplate;
