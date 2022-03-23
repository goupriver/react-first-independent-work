import React, { useState } from "react";
import styled from "styled-components";
import AddTask from "./AddTask";
import FormAddTask from "./FormAddTask";
import Task from "./Task";
import Title from "./Title";

const Wrapper = styled.div`
  background: #ffffff;
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.size.paddingTask};
`;

const FolderInside = styled.div`
  padding-bottom: 10px;
`;

const BlankList = styled.h1`
  transform: translateY(25vh);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: #c9d1d3;
`;

const ListTasks = styled.div``;

const WrapperTasks = (props) => {
  const [visibleForm, setVisibleForm] = useState(false);

  return (
    <Wrapper>
      {props.folders.length && props.isActiveFolder ? (
        <>
          <FolderInside>
            <Title
              isActiveFolder={props.isActiveFolder}
              editTitleFolder={props.editTitleFolder}
              getActiveFolder={props.getActiveFolder}
            />
            <ListTasks>
              {props.getActiveFolder().tasks &&
                props.getActiveFolder().tasks.map((task) => {
                  return (
                    <Task
                      editStatusTask={props.editStatusTask}
                      isActiveFolder={props.isActiveFolder}
                      editTask={props.editTask}
                      removeTask={props.removeTask}
                      task={task}
                      key={task.taskId}
                    />
                  );
                })}
            </ListTasks>
          </FolderInside>
          {visibleForm ? (
            <FormAddTask
              AddTask={props.AddTask}
              setVisibleForm={setVisibleForm}
            />
          ) : (
            <AddTask setVisibleForm={setVisibleForm} />
          )}
        </>
      ) : (
        <BlankList>У вас пусто, добавьте папку.</BlankList>
      )}
    </Wrapper>
  );
};

export default WrapperTasks;
