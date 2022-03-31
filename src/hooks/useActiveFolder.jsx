import { useState } from "react";

const useActiveFolder = (folders) => {
  const [isActiveFolder, setActiveFolder] = useState("");

  function setIsActiveFolder(targetFolderId, mode = "default") {
    if (mode === "reset") return setActiveFolder("");
    if (mode === "checkout") return setActiveFolder(targetFolderId);
    if (mode === "allFolders") return setActiveFolder(mode);
    if (mode === "add") return setActiveFolder(targetFolderId);

    const indexTargetFolder = folders.findIndex(
      (folder) => folder.folderId === targetFolderId
    );
    const indexActive = folders.findIndex(
      (folder) => folder.folderId === isActiveFolder
    );
    const lastFolder = indexTargetFolder === folders.length - 1;

    if (indexTargetFolder === -1) return setActiveFolder(targetFolderId);
    if (folders.length === 1) return setActiveFolder("");
    if (indexTargetFolder === 0 && folders.length >= 2)
      return setActiveFolder(folders[indexTargetFolder + 1].folderId);
    if (indexTargetFolder === indexActive && folders.length !== 1)
      return setActiveFolder(folders[indexTargetFolder - 1].folderId);
    if (indexTargetFolder === indexActive && lastFolder && folders.length !== 1)
      return setActiveFolder(folders[indexTargetFolder - 1].folderId);
  }

  return [isActiveFolder, setIsActiveFolder];
};

export default useActiveFolder;
