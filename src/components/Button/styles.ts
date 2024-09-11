import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  
  background-color: ${(props) => (props.disabled ? "#d3d3d3" : "#81259d")};
  color: ${(props) => (props.disabled ? "#a9a9a9" : "#fff")};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
