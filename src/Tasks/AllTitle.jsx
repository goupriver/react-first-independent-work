import React from "react";
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
  color: ${({ colorText }) => colorText};
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

const TitleComp = ({folder}) => {
  return (
    <Title>
      <Text
        colorText={getHashColor(folder.colorId)}
        disabled={true}
        value={folder.folderName}
      />
    </Title>
  );
};

export default TitleComp;
