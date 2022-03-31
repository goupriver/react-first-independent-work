import React from "react";
import styled from "styled-components";

const AddFolderButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: "Roboto", -apple-system, system-ui, sans-serif;
  color: ${({ theme }) => theme.SVGColor.add};
  font-size: 16px;
  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.SVGColor.addHover};
    transition: color 0.5s ease;
  }
`;

const SVG = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.SVGColor.list};
`;

const Text = styled.span`
  padding-left: 10px;
`;

const AddFolderButt = ({ setStatusModal }) => {

  const setStatModal = e => {
    setStatusModal(true)
    e.stopPropagation()
  }

  return (
    <AddFolderButton onClick={setStatModal}>
      <SVG
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1V11"
          stroke="#868686"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 6H11"
          stroke="#868686"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
      <Text>Добавить папку</Text>
    </AddFolderButton>
  );
};

export default AddFolderButt;
