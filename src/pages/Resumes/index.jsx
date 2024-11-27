import React, { useEffect, useState } from "react";
import { List, Card, Spin, notification } from "antd";
import { fetchResumesFromDB } from "../../utils/functions/fetchResumesFromDB";
import "./style.css";

const Resumes = () => {
  const [loading, setLoading] = useState(true);
  const [resumes, setResumes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResumesFromDB();
        setResumes(data);
      } catch (error) {
        notification.error({
          message: "Error Fetching Resumes",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spin className="resume-page-spinner" size="large" />;
  }

  const resumeKeys = Object.keys(resumes);

  return (
    <div>
      <h2 className="resume-page-title">My Resumes</h2>
      {resumeKeys.length === 0 ? (
        <p>No resumes found.</p>
      ) : (
        <List
          className="list-resume-container"
          grid={{ gutter: 16, column: 3 }}
          dataSource={resumeKeys}
          renderItem={(resumeId) => (
            <List.Item>
              <Card
                title={resumes[resumeId].personalInfo.name || "Unnamed Resume"}
              >
                <p>
                  <strong>Email: </strong>
                  {resumes[resumeId].personalInfo.email || "N/A"}
                </p>
                <p>
                  <strong>Created At: </strong>
                  {new Date(resumes[resumeId].createdAt).toLocaleString()}
                </p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Resumes;
