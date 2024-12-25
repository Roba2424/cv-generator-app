import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Card, Spin, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { fetchMyResumes } from "../../state-management/slices/cvSlice";
import { ROUTE_CONSTANTS } from "../../utils/constant";

const MyResumes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myResumes, loading, error } = useSelector((state) => state.cv);

  useEffect(() => {
    dispatch(fetchMyResumes());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      notification.error({
        message: "Error Fetching Resumes",
        description: error,
      });
    }
  }, [error]);

  if (loading) {
    return (
      <Spin size="large" style={{ margin: "20px auto", display: "block" }} />
    );
  }

  const resumeKeys = Object.keys(myResumes);
  console.log(myResumes)

  const handleResumeClick = (resumeId) => {
    navigate(ROUTE_CONSTANTS.PREVIEW.replace(":resumeId", resumeId), {
      state: { resume: myResumes[resumeId] },
    });
  };

  return (
    <div>
      <h2>My Resumes</h2>
      {resumeKeys.length === 0 ? (
        <p>No resumes found.</p>
      ) : (
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={resumeKeys}
          renderItem={(resumeId) => (
            <List.Item>
              <Card
                title={
                  myResumes[resumeId].personalInfo.name || "Unnamed Resume"
                }
                onClick={() => handleResumeClick(resumeId)}
                style={{ cursor: "pointer" }}
              >
                <p>
                  <strong>Email:</strong>{" "}
                  {myResumes[resumeId].personalInfo.email || "N/A"}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(myResumes[resumeId].createdAt).toLocaleString()}
                </p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default MyResumes;
