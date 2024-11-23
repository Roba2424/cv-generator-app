import React from "react";
import {  useSelector } from "react-redux";
import { Button, Form, Input } from "antd";

const PersonalInfoForm = () => {
  const personalInfo = useSelector((state) => state.cv.personalInfo);
  const handleFinish = (values) => {
    console.log(values)
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
