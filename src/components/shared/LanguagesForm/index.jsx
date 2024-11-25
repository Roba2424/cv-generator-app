import { Form, Input, Button, Select, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addLanguages,
  removeLanguage,
} from "../../../state-management/slices/cvSlice";
import { PROFICIENCY_LEVEL, ROUTE_CONSTANTS } from "../../../utils/constant";
import { Link } from "react-router-dom";

const { Option } = Select;

const LanguagesForm = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state) => state.cv.languages);
  const [form] = Form.useForm();

  const handleAddLanguage = (values) => {
    dispatch(addLanguages(values));
    form.resetFields();
  };

  return (
    <div>
      <h2>Languages</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleAddLanguage}
        style={{ marginBottom: "20px" }}
      >
        <Form.Item
          label="Language"
          name="language"
          rules={[{ required: true, message: "Please enter a language" }]}
        >
          <Input placeholder="e.g., English, Spanish" />
        </Form.Item>
        <Form.Item
          label="Proficiency Level"
          name="level"
          rules={[
            { required: true, message: "Please select a proficiency level" },
          ]}
        >
          <Select placeholder="Select proficiency level">
            {Object.keys(PROFICIENCY_LEVEL).map((key) => (
              <Option key={key} value={key}>
                {`${key}/${Object.keys(PROFICIENCY_LEVEL).length}`}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add Language
        </Button>
      </Form>

      <List
        bordered
        dataSource={languages}
        renderItem={(item, index) => (
          <List.Item
            className="language-container"
            actions={[
              <Button
                type="link"
                danger
                onClick={() => dispatch(removeLanguage(index))}
              >
                Remove
              </Button>,
            ]}
          >
            <div>
              <strong>{item.language}</strong>: {PROFICIENCY_LEVEL[item.level]}
            </div>
          </List.Item>
        )}
      />
      <Button type="primary" style={{ margin: "1rem auto" }}>
        <Link to={ROUTE_CONSTANTS.PREVIEW}>Preview Page</Link>
      </Button>
    </div>
  );
};

export default LanguagesForm;
