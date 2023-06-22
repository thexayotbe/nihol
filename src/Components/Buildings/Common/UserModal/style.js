import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
`;
Wrapper.Item = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f5f5f5;
`;
Wrapper.Title = styled.p`
  flex: 1;
  font-size: 14px;
  line-height: 1.5714285714285714;
  word-wrap: break-word;
`;
Wrapper.Info = styled.p`
  flex: 1;
  font-size: 14px;
  line-height: 1.5714285714285714;
  word-wrap: break-word;
`;
Wrapper.Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  margin: 20px 0;
`;
