import React from "react";
import styled from "styled-components";
import Folder from "./Folder";

const SetupTask = styled.div`
  margin-bottom: 20px;
`;

const ListFolder = ({
  folders,
  removeFolder,
  setIsActiveFolder,
  isActiveFolder,
}) => {
  return (
    <SetupTask>
      <ul>
        {folders &&
          folders.map((folder) => (
            <Folder
              isActiveFolder={isActiveFolder}
              setIsActiveFolder={setIsActiveFolder}
              key={folder.folderId}
              folder={folder}
              removeFolder={removeFolder}
            />
          ))}
      </ul>
    </SetupTask>
  );
};

export default ListFolder;
