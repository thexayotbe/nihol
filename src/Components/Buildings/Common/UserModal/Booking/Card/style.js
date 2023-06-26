import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;
Wrapper.TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
Wrapper.Title = styled.h3`
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
`;
Wrapper.Info = styled.div`
  display: flex;
`;
Wrapper.InfoItem = styled.div`
  flex: 1;
  padding: 20px 0;
`;
Wrapper.InfoTitle = styled.h3`
  color: rgba(0, 0, 0, 0.45);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.5714285714285714;
  text-align: start;
`;
Wrapper.Date = styled.p`
  display: table-cell;
  flex: 1;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  word-break: break-word;
  overflow-wrap: break-word;
`;
Wrapper.Icon = styled.div`
  cursor: pointer;
`;
