import { Button, Flex, Form, Input, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import { ROUTE_CONSTANTS } from "../../../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchUserProfileInfo,
  setIsAuth,
} from "../../../state-management/slices/userProfile";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../service";

const Login = () => {
  const [form] = useForm();
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      form.resetFields();
      dispatch(setIsAuth(true));
      dispatch(fetchUserProfileInfo());
    } catch (error) {
      notification.error({
        message: "Invalid Login Credentials",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper title="Sign In">
      <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
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
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Flex justify="end" align="center" className="btn-container">
          <Link to={ROUTE_CONSTANTS.REGISTER}>Create Account</Link>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign in
          </Button>
        </Flex>
      </Form>
    </AuthWrapper>
  );
};

export default Login;
