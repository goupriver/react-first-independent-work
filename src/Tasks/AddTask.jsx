import React from "react";
import styled from "styled-components";

const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 3px 10px 3px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: "Roboto", -apple-system, system-ui, sans-serif;
  color: #b4b4b4;
  font-size: 14px;
  transition: color 0.5s ease;

  &:hover {
    color: #898A8A;
    transition: color 0.5s ease;
  }
`;

const SVG = styled.svg`
  width: 14px;
  height: 14px;
`;

const Text = styled.span`
  padding-left: 12px;
`;

const AddTask = ({setVisibleForm}) => {
  return (
    <AddFolderButton onClick={() => setVisibleForm(true)}>
      <SVG
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1V11"
          stroke="#b4b4b4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 6H11"
          stroke="#b4b4b4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
      <Text>Добавить задачу</Text>
    </AddFolderButton>
  );
};

export default AddTask;
