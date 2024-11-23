import React, { useState } from "react";
import { Form, Input, Button, List } from "antd";

const SkillsForm = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {};
  const handleRemoveSkill = () => {};

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
              <Button type="link" danger onClick={handleRemoveSkill}>
                Remove
              </Button>,
            ]}
          >
            {item}
          </List.Item>
        )}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
};

export default SkillsForm;
