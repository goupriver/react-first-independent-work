import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import AllFolder from "./AllFolder";
import ListFolder from "./ListFolder";
import AddFolderButt from "./AddFolderButt";
import ModalAddFolder from "./ModalAddFolder";

const WrapperDirectory = styled.div`
  background: #f4f6f8;
  width: 300px;
  flex-shrink: 0;
  flex-grow: 0;
  min-height: 100%;
  border-right: 1px solid #f1f1f1;
  padding: ${({ theme }) => theme.size.paddingTop};
`;

const WrapperDir = (props) => {
  const [statusModal, setStatusModal] = useState(false);

  const resetActiveFolder = (event) => {
    event.stopPropagation();
    props.setIsActiveFolder(null, "reset");
  };

  return (
    <WrapperDirectory onClick={resetActiveFolder}>
      <AllFolder
        isActiveFolder={props.isActiveFolder}
        folders={props.folders}
        setIsActiveFolder={props.setIsActiveFolder}
      />
      <ListFolder
        isActiveFolder={props.isActiveFolder}
        setIsActiveFolder={props.setIsActiveFolder}
        removeFolder={props.removeFolder}
        folders={props.folders}
      />
      <AddFolderButt setStatusModal={setStatusModal} />
      <CSSTransition
        unmountOnExit
        in={statusModal}
        timeout={{
          appear: 200,
          enter: 500,
          exit: 500,
        }}
        classNames={{
          enter: "animate__animated animate__flipInX",
          exit: "animate__animated animate__flipOutX",
        }}
      >
        <ModalAddFolder {...props} setStatusModal={setStatusModal} />
      </CSSTransition>
    </WrapperDirectory>
  );
};

export default WrapperDir;
