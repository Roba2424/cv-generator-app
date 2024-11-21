import { useState } from "react";
import { Button, Flex, Form, Input } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { regexpValidation, ROUTE_CONSTANTS } from "../../../utils/constant";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleRegister = async (values) => {
    console.log(values);
  };

  return (
    <AuthWrapper title="Sign Up">
      <Form layout="vertical" onFinish={handleRegister} form={form}>
        <Form.Item label="First Name" name="firstName">
          <Input type="text" placeholder="First Name" />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input type="text" placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          tooltip="minimum 5 characters max 15"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            {
              pattern: regexpValidation,
              message: "Wrong password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                }
              },
            }),
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Flex justify="end" align="center" className="btn-container">
          <Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>
          <Button
            type="default"
            htmlType="submit"
            loading={loading}
            style={{ backgroundColor: "#A5EAF8" }}
          >
            Register
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Register;
