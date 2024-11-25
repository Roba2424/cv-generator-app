import React, { useState } from "react";
import { Form, Input, Button, List, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  removeSkill,
} from "../../../state-management/slices/cvSlice";
import { ROUTE_CONSTANTS } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.cv.skills);
  const navigate = useNavigate();
  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    if (skill.trim()) {
      dispatch(addSkill(skill));
      setSkill("");
    }
  };

  const saveSkills = () => {
    navigate(ROUTE_CONSTANTS.SOCIAL);
    notification.success({ message: "Skills saved." });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Skills</h2>
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="Enter a skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleAddSkill}>
            Add Skill
          </Button>
        </Form.Item>
      </Form>
      <List
        bordered
        dataSource={skills}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                type="link"
                danger
                onClick={() => dispatch(removeSkill(index))}
              >
                Remove
              </Button>,
            ]}
          >
            {item}
          </List.Item>
        )}
        style={{ marginTop: "20px" }}
      />

      <Button type="primary" style={{ margin: "10px 0" }} onClick={saveSkills}>
        Save Skills
      </Button>
    </div>
  );
};

export default SkillsForm;
