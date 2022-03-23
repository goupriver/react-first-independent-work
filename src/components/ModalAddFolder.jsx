import React, { useState } from "react";
import styled from "styled-components";
import colorPallete from "../hooks/colorPallete";

const WrapperModal = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vw;
  z-index: 1;
`;

const Modal = styled.div`
  position: relative;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: ${({validation})=> (validation === 'animate__animated animate__shakeX') ? 'rgba(255, 0, 0, 0.8) 0px 2px 5px' : 'rgba(0, 0, 0, 0.25) 0px 2px 5px'};
  transition: box-shadow 0.5s ease;  
`;
const EnterFolder = styled.input`
  padding: 7px 14px;
  border: ${({validation})=> (validation === 'animate__animated animate__shakeX') ? '1px solid rgba(255, 0, 0, 0.2)' : '1px solid #efefef'};
  border-radius: 4px;
  transition: border 0.5s ease;

  &:focus {
    outline: 2px solid #696969;
  }
`;

const ButtonAddFolder = styled.button`
  padding: 8px 14px;
  background-color: #4dd599;
  border-radius: 4px;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;

  &:active {
    background-color: #7dd599;
  }
`;

const ColorPalette = styled.div`
  display: flex;
  padding: 14px 0px;
  justify-content: space-evenly;
`;

const ManyCircle = styled.div`
  display: flex;
  justify-content: space-around;
`;

const InputTransparent = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: 0;
  clip: rect(0 0 0 0);
`;

const FakeInput = styled.label`
  background: ${({ color }) => color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  position: transparent;

  ${InputTransparent}:checked + & {
    border-width: 2px;
    border-style: solid;
    border-color: #09011a;
  }
`;

const CloseModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -7px;
  right: -7px;
  background: #5c5c5c;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  cursor: pointer;
`;

const ModalAddFolder = (props) => {
  const [validation, setValidation] = useState('animate__animated')
  const [folderAndColor, setFolderAndColor] = useState({
    colorId: "",
    folderName: "",
  });

  const addFolder = () => {
    if (!folderAndColor.colorId || !folderAndColor.folderName) {
      setValidation('animate__animated animate__shakeX')
      setTimeout(()=> setValidation('animate__animated'), 1500)
      return 
    }

    props.addFolder(folderAndColor);
    props.setStatusModal(false);
  };

  return (
    <WrapperModal onClick={() => props.setStatusModal(false)}>
      <Modal className={validation} validation={validation} onClick={(event) => event.stopPropagation()}>
        <EnterFolder
          validation={validation}
          onChange={(event) =>
            setFolderAndColor({
              ...folderAndColor,
              folderName: event.target.value,
            })
          }
          type="text"
          value={folderAndColor.folderName}
          placeholder="Folder Name"
        />
        <ColorPalette>
          {colorPallete.map((color) => {
            return (
              <ManyCircle key={color.id}>
                <InputTransparent
                  onClick={(event) =>
                    setFolderAndColor({
                      ...folderAndColor,
                      colorId: parseFloat(event.target.id),
                    })
                  }
                  id={color.id}
                  name="colorPalette"
                  type="radio"
                />
                <FakeInput htmlFor={color.id} color={color.hash} />
              </ManyCircle>
            );
          })}
        </ColorPalette>
        <ButtonAddFolder onClick={addFolder}>Add</ButtonAddFolder>
        <CloseModal onClick={() => props.setStatusModal(false)}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z"
              fill="#FFFFFF"
            />
          </svg>
        </CloseModal>
      </Modal>
    </WrapperModal>
  );
};

export default ModalAddFolder;
