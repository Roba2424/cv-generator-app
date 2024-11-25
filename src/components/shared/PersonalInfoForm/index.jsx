import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../utils/constant";
import { updatePersonalInfo } from "../../../state-management/slices/cvSlice";

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.cv.personalInfo);

  const handleFinish = (values) => {
    dispatch(updatePersonalInfo(values));
    navigate(ROUTE_CONSTANTS.SKILLS);
    notification.success({ message: "Personal information saved." });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Personal Information</h2>
      <Form
        layout="vertical"
        initialValues={personalInfo}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        <Form.Item
          label="Pitch"
          name="pitch"
          rules={[{ required: true, message: "Please enter a short pitch" }]}
        >
          <Input.TextArea
            placeholder="Enter a short and engaging pitch about yourself"
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Personal Info
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInfoForm;
