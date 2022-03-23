import React from "react";
import styled from "styled-components";
import AllTasks from "./AllTasks";
import AllTitle from "./AllTitle";

const Wrapper = styled.div`
  background: #ffffff;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.size.paddingTask};
`;

const FolderInside = styled.div`
  padding-bottom: 10px;
`;

const ListTasks = styled.div``;

const AllFolders = ({ folders }) => {
  return (
    <Wrapper>
      {folders.map((folder) => {
        return (
          <FolderInside key={folder.folderId}>
          <AllTitle folder={folder}/>
          <ListTasks>
            {folder.tasks && (
              folder.tasks.map(task => {
                return (
                  <AllTasks key={task.taskId} tasks={task}/>
                )
              })
            )}
          </ListTasks>
        </FolderInside>
        )
      })}
    </Wrapper>
  );
};

export default AllFolders;
