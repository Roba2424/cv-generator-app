import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import {
  FIRESTORE_PATH_NAMES,
  PROFICIENCY_LEVEL,
  ROUTE_CONSTANTS,
} from "../../../utils/constant";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import {
  addMyResumes,
  resetForm,
} from "../../../state-management/slices/cvSlice";
import { auth, db } from "../../../service/index";
import { doc, setDoc } from "@firebase/firestore";

const ExportPDF = () => {
  const { personalInfo, skills, languages, socialLinks, myResumes } =
    useSelector((state) => state.cv);
  const resume = useSelector((state) => state.cv);
  const { authUserInfo } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveInFirestore = async () => {
    if (!auth.currentUser) {
      console.error("No authenticated user");
      return;
    }
    const userId = auth.currentUser.uid;

    const docRef = doc(db, FIRESTORE_PATH_NAMES.USERS_RESUMES, userId);
    try {
      await setDoc(docRef, {
        personalInfo,
        skills,
        socialLinks,
        languages,
        createdAt: new Date(),
      });
      notification.success({ message: "CV saved successfully!" });
    } catch (error) {
      console.error("Error saving CV:", error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${authUserInfo.userData["firstName"]}'s_Resume`, 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${personalInfo.name || "N/A"}`, 10, 20);
    doc.text(`Email: ${personalInfo.email || "N/A"}`, 10, 30);
    doc.text(`Phone: ${personalInfo.phone || "N/A"}`, 10, 40);
    doc.text(`Pitch: ${personalInfo.pitch || "N/A"}`, 10, 50);

    let currentY = 60;
    if (skills.length > 0) {
      doc.setFontSize(14);
      doc.text("Skills", 20, currentY);
      doc.setFontSize(12);
      skills.forEach((skill, index) => {
        doc.text(`- ${skill}`, 10, currentY + 10 + index * 10);
      });
      currentY += 10 + skills.length * 10;
    }

    if (socialLinks) {
      doc.setFontSize(14);
      doc.text("Social Links", 20, currentY);
      doc.setFontSize(12);
      if (socialLinks.github) {
        doc.text(`- GitHub: ${socialLinks.github}`, 10, currentY + 10);
        currentY += 10;
      }
      if (socialLinks.linkedin) {
        doc.text(`- LinkedIn: ${socialLinks.linkedin}`, 10, currentY + 10);
        currentY += 10;
      }
      if (socialLinks.facebook) {
        doc.text(`- Facebook: ${socialLinks.facebook}`, 10, currentY + 10);
        currentY += 10;
      }
    }

    if (languages.length > 0) {
      doc.setFontSize(14);
      doc.text("Languages", 20, currentY);
      doc.setFontSize(12);
      languages.forEach((lang, index) => {
        const langLevel = PROFICIENCY_LEVEL[lang["level"]];
        const language = lang["language"];
        doc.text(`- ${language}: ${langLevel}`, 10, currentY + 10 + index * 10);
      });
      currentY += 10 + languages.length * 10;
    }

    doc.save("CV.pdf");
    navigate(ROUTE_CONSTANTS.PROFILE);
    dispatch(addMyResumes(resume));//TODO
    saveInFirestore();
    dispatch(resetForm());
  };

  return (
    <Button onClick={generatePDF} style={{ marginTop: "20px" }}>
      Download CV as PDF
    </Button>
  );
};

export default ExportPDF;
