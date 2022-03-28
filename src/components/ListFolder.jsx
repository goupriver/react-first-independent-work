import React from "react";
import styled from "styled-components";
import Folder from "./Folder";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

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
      {folders &&
        <ul>
          <TransitionGroup>
            {folders.map((folder) => (
              <CSSTransition
                key={folder.folderId}
                timeout={{
                  appear: 700,
                  enter: 1000,
                  exit: 700,
                }}
                classNames={{
                  enterActive: 'animate__animated animate__lightSpeedInLeft',
                  exitActive: 'animate__animated animate__lightSpeedOutLeft',
                }}
              >
                <Folder
                  isActiveFolder={isActiveFolder}
                  setIsActiveFolder={setIsActiveFolder}
                  folder={folder}
                  removeFolder={removeFolder}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      }
    </SetupTask>
  );
};

export default ListFolder;
