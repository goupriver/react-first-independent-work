import React, { useState } from "react";
import styled from "styled-components";

const SetupTask = styled.div`
  margin-bottom: 20px;
`;

const LI = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 14px 15px;
  border-radius: 4px;
  box-shadow: ${({ isActiveFolder }) =>
    isActiveFolder === 'allFolders' ? "rgba(0, 0, 0, 0.25) 0px 1px 3px" : "none"};
  background-color: ${({ isActiveFolder }) =>
    isActiveFolder === 'allFolders' ? "#ffffff" : "none"};
`;

const SVG = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.SVGColor.list};
`;

const Text = styled.div`
  white-space: nowrap;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AllFolder = ({ setIsActiveFolder, folders, isActiveFolder }) => {
  const [stebel, setStebel] = useState("animate__animated");

  const showAllFolders = () => {
    if (folders.length >= 1) setIsActiveFolder("allFolders");
    else {
      setStebel("animate__animated animate__shakeX");
      setTimeout(() => setStebel("animate__animated"), 1500);
    }
  };

  return (
    <SetupTask>
      <ul>
        <LI
          isActiveFolder={isActiveFolder}
          className={stebel}
          onClick={showAllFolders}
        >
          <SVG
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.96 5.10001H5.74001C5.24321 5.10001 5.20001 5.50231 5.20001 6.00001C5.20001 6.49771 5.24321 6.90001 5.74001 6.90001H10.96C11.4568 6.90001 11.5 6.49771 11.5 6.00001C11.5 5.50231 11.4568 5.10001 10.96 5.10001ZM12.76 9.60001H5.74001C5.24321 9.60001 5.20001 10.0023 5.20001 10.5C5.20001 10.9977 5.24321 11.4 5.74001 11.4H12.76C13.2568 11.4 13.3 10.9977 13.3 10.5C13.3 10.0023 13.2568 9.60001 12.76 9.60001ZM5.74001 2.40001H12.76C13.2568 2.40001 13.3 1.99771 13.3 1.50001C13.3 1.00231 13.2568 0.600006 12.76 0.600006H5.74001C5.24321 0.600006 5.20001 1.00231 5.20001 1.50001C5.20001 1.99771 5.24321 2.40001 5.74001 2.40001ZM2.86001 5.10001H1.24001C0.743212 5.10001 0.700012 5.50231 0.700012 6.00001C0.700012 6.49771 0.743212 6.90001 1.24001 6.90001H2.86001C3.35681 6.90001 3.40001 6.49771 3.40001 6.00001C3.40001 5.50231 3.35681 5.10001 2.86001 5.10001ZM2.86001 9.60001H1.24001C0.743212 9.60001 0.700012 10.0023 0.700012 10.5C0.700012 10.9977 0.743212 11.4 1.24001 11.4H2.86001C3.35681 11.4 3.40001 10.9977 3.40001 10.5C3.40001 10.0023 3.35681 9.60001 2.86001 9.60001ZM2.86001 0.600006H1.24001C0.743212 0.600006 0.700012 1.00231 0.700012 1.50001C0.700012 1.99771 0.743212 2.40001 1.24001 2.40001H2.86001C3.35681 2.40001 3.40001 1.99771 3.40001 1.50001C3.40001 1.00231 3.35681 0.600006 2.86001 0.600006Z" />
          </SVG>
          <Text>Все задачи</Text>
        </LI>
      </ul>
    </SetupTask>
  );
};

export default AllFolder;
