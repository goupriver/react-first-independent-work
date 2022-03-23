import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;

const RadioButton = styled.div`
  padding-right: 10px;
  display: flex;
`;

const HiddenInput = styled.input`
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  overflow: hidden;
  border: 0;
  margin: -1px;
  position: absolute;
`;

const InputSynthetic = styled.label`
  width: 20px;
  height: 20px;
  background: transparent;
  border: 2px solid #e8e8e8;
  border-radius: 50%;
  position: relative;
  
  ${HiddenInput}:checked + & {
    background: #4dd599;
    border: 2px solid #4dd599;
  }
`;

const Pic = styled.svg`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${HiddenInput}:checked + ${InputSynthetic} > & {
    opacity: 1;
  }
`;

const TextLabel = styled.label`
  flex: 1;
`;

const Text = styled.input`
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-family: "Roboto", -apple-system, system-ui, sans-serif;
  font-size: 16px;
  border-bottom: 1px solid transparent;

  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Task = ({tasks}) => {
  return (
    <Item>
      <RadioButton>
        <HiddenInput disabled={true} defaultChecked={tasks.status} type="checkbox" id={tasks.taskId} />
        <InputSynthetic htmlFor={tasks.taskId}>
          <Pic
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Pic>
        </InputSynthetic>
      </RadioButton>
      <TextLabel htmlFor={tasks.taskId}>
        <Text status={tasks.status} disabled={true} value={tasks.text} />
      </TextLabel>
    </Item>
  );
};

export default Task;
