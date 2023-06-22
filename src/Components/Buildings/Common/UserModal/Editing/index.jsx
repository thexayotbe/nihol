import { Button, Form } from "antd";
import userModalApi from "../../../../Generic/UserModalApi";
import { editingFormMapValues } from "../../../../../mock/userModal";
import { Wrapper } from "../style";
const Editing = () => {
  const { editingInitialValues, filterInput } = userModalApi();
  return (
    <Wrapper>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        layout="vertical"
        initialValues={{
          ...editingInitialValues,
        }}
        autoComplete="off">
        {editingFormMapValues.map(({ id, name, label }) => {
          return (
            <Form.Item
              key={id}
              label={label}
              name={name}
              rules={[{ required: true, message: "Please fill the input" }]}>
              {filterInput(name)}
            </Form.Item>
          );
        })}
      </Form>
      <Wrapper.Buttons>
        <Button>Cancel</Button>
        <Button type="primary">Edit</Button>
      </Wrapper.Buttons>
    </Wrapper>
  );
};

export default Editing;
