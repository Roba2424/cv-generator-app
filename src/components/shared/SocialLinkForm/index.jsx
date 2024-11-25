import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateSocialLinks } from "../../../state-management/slices/cvSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../utils/constant";

const SocialLinksForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socialLinks = useSelector((state) => state.cv.socialLinks);

  const handleFinish = (values) => {
    dispatch(updateSocialLinks(values));
    notification.success({ message: "Social links saved" });
    navigate(ROUTE_CONSTANTS.PREVIEW);
  };

  return (
    <div>
      <h2>Social Links</h2>
      <Form
        layout="vertical"
        initialValues={socialLinks}
        onFinish={handleFinish}
      >
        <Form.Item
          label="GitHub URL"
          name="github"
          rules={[
            { message: "Please enter your GitHub URL" },
            { type: "url", message: "Please enter a valid URL" },
          ]}
        >
          <Input placeholder="e.g., https://github.com/username" />
        </Form.Item>
        <Form.Item
          label="LinkedIn URL"
          name="linkedin"
          rules={[
            { message: "Please enter your LinkedIn URL" },
            { type: "url", message: "Please enter a valid URL" },
          ]}
        >
          <Input placeholder="e.g., https://linkedin.com/in/username" />
        </Form.Item>
        <Form.Item
          label="Facebook URL"
          name="facebook"
          rules={[
            { message: "Please enter your Facebook URL" },
            { type: "url", message: "Please enter a valid URL" },
          ]}
        >
          <Input placeholder="e.g., https://facebook.com/username" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Save Social Links
        </Button>
      </Form>
    </div>
  );
};

export default SocialLinksForm;
