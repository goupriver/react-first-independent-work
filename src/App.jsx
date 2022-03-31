import "animate.css";
import React, { useState } from "react";
import styled from "styled-components";

import WrapperDir from "./components/WrapperDir";
import AllFolders from "./Tasks/AllFolders";
import Tasks from "./Tasks/WrapperTasks";
import useDB from "./hooks/useDB";
import useActiveFolder from "./hooks/useActiveFolder";

const WrapperApp = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  const [folders, setFolders] = useState("");
  useDB(folders, setFolders)
  const [isActiveFolder, setIsActiveFolder] = useActiveFolder(folders)

  // активная папка
  const getActiveFolder = () => {
    if (!isActiveFolder) return "";
    return folders.find((folder) => folder.folderId === isActiveFolder);
  };

  // добавить папку
  const addFolder = (newData) => {
    const folderId = Date.now();
    setIsActiveFolder(folderId, 'add');
    setFolders([...folders, { folderId, ...newData, tasks: "" }]);
  };

  // удалить папку
  const removeFolder = (removeFolderid) => {
    setIsActiveFolder(removeFolderid)
    setFolders(folders.filter((folder) => folder.folderId !== removeFolderid));
  };

  // добавить задачу
  const AddTask = (text) => {
    const task = getActiveFolder().tasks;
    const tasks = [...task, { taskId: Date.now(), text, status: false }];
    const finish = { ...getActiveFolder(), tasks };
    const newFolders = [
      ...folders.map((folder) =>
        folder.folderId === isActiveFolder ? finish : folder
      ),
    ];
    setFolders(newFolders);
  };

  // Изменить заголовок задачи(папки)
  const editTitleFolder = (newFolderName) => {
    const activeFolder = getActiveFolder();
    const mutableFolder = { ...activeFolder, folderName: newFolderName };
    const mutable = [
      ...folders.map((folder) =>
        folder.folderId === activeFolder.folderId ? mutableFolder : folder
      ),
    ];
    setFolders(mutable);
  };

  // удаление задачи
  const removeTask = (id) => {
    const task = getActiveFolder().tasks;
    const actualTask = task.filter((task) => task.taskId !== id);
    const finish = { ...getActiveFolder(), tasks: actualTask };
    const newFolders = [
      ...folders.map((folder) =>
        folder.folderId === isActiveFolder ? finish : folder
      ),
    ];
    setFolders(newFolders);
  };

  // редактирование задачи

  const editTask = (id, newText) => {
    const task = getActiveFolder().tasks;
    const actualTask = task.filter((task) =>
      task.taskId === id ? (task.text = newText) : task
    );
    const finish = { ...getActiveFolder(), tasks: actualTask };
    const newFolders = [
      ...folders.map((folder) =>
        folder.folderId === isActiveFolder ? finish : folder
      ),
    ];
    setFolders(newFolders);
  };

  // изменить статус задачи

  const editStatusTask = (id, status) => {
    const task = getActiveFolder().tasks;
    const actualTask = task.map((task) =>
      task.taskId === id ? { ...task, status: !status } : task
    );
    const finish = { ...getActiveFolder(), tasks: actualTask };
    const newFolders = [
      ...folders.map((folder) =>
        folder.folderId === isActiveFolder ? finish : folder
      ),
    ];
    setFolders(newFolders);
  };

  return (
    <WrapperApp>
      <WrapperDir
        isActiveFolder={isActiveFolder}
        setIsActiveFolder={setIsActiveFolder}
        folders={folders}
        removeFolder={removeFolder}
        addFolder={addFolder}
      />
      {isActiveFolder === "allFolders" ? (
        <AllFolders folders={folders} />
      ) : (
        <Tasks
          editStatusTask={editStatusTask}
          editTask={editTask}
          removeTask={removeTask}
          isActiveFolder={isActiveFolder}
          editTitleFolder={editTitleFolder}
          AddTask={AddTask}
          getActiveFolder={getActiveFolder}
          folders={folders}
        />
      )}
    </WrapperApp>
  );
}

export default App;