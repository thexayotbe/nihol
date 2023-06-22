import { Wrapper } from "../style";
import useObservingApi from "../../../../Generic/UserModalApi";
import { observingMapInfo } from "../../../../../mock/userModal";
import { Button } from "antd";
const Observing = () => {
  const { formatData } = useObservingApi();
  return (
    <Wrapper>
      {observingMapInfo.map((value, index) => {
        return (
          <Wrapper.Item key={index}>
            <Wrapper.Title>{value[1]}</Wrapper.Title>
            <Wrapper.Info>{formatData(value[0])}</Wrapper.Info>
          </Wrapper.Item>
        );
      })}
      <Wrapper.Buttons>
        <Button>Cancel</Button>
        <Button type="primary">Move</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Wrapper.Buttons>
    </Wrapper>
  );
};
export default Observing;
