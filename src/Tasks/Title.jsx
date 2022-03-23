import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import getHashColor from "../hooks/GetHashColor";

const Title = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

const Text = styled.input`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  color: ${({ colorText }) => colorText()};
  margin: 0;
  padding: 0 15px 0 5px;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom: 1px dashed #868686;
  }
`;

const Edit = styled.svg`
  margin-left: 15px;
  cursor: pointer;

  & path {
    fill: #dfdfdf;
    transition: fill 0.5s ease;
  }

  &:hover path {
    fill: #898a8a;
    transition: fill 0.5s ease;
  }
`;

const Done = styled(Edit)`
  & path {
    fill: none;
    stroke: #dfdfdf;
    transition: stroke 0.5s ease;
  }

  &:hover path {
    fill: none;
    stroke: #898a8a;
    transition: stroke 0.5s ease;
  }
`;

const TitleComp = ({ getActiveFolder, editTitleFolder, isActiveFolder }) => {
  const [txt, setTxt] = useState("");
  const [disabledEditableInput, setDisabledEditableInput] = useState(true);
  const ref = useRef();

  const valueInput = useMemo(() => {
    if (txt) return txt;
    else if (disabledEditableInput && !txt) return getActiveFolder().folderName;
    else if (disabledEditableInput) return setTxt;
  }, [txt, disabledEditableInput, isActiveFolder]);

  const saveTitle = () => {
    editTitleFolder(txt);
    setTxt("");
    setDisabledEditableInput(true);
  };

  const editTitle = () => {
    setDisabledEditableInput(false);
  };

  useEffect(() => {
    if (!disabledEditableInput) ref.current.focus();
  }, [disabledEditableInput]);

  function colorTxt() {
    if (!getActiveFolder()) return "orange";
    return getHashColor(getActiveFolder().colorId);
  }

  return (
    <Title>
      <Text
        onChange={(event) => setTxt(event.target.value)}
        ref={ref}
        onBlur={saveTitle}
        colorText={colorTxt}
        disabled={disabledEditableInput}
        value={valueInput}
      />
      {disabledEditableInput ? (
        <Edit
          onClick={editTitle}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z"
            fill="#DFDFDF"
          />
        </Edit>
      ) : (
        <Done
          width="20"
          height="17"
          viewBox="0 0 10 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
            stroke="#B3B3B3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Done>
      )}
    </Title>
  );
};

export default TitleComp;
