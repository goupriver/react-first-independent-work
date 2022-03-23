import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px 0px;
  width: 100%;
  background: #ffffff;
`;

const EnterText = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #efefef;
  border-radius: 4px;

  &:focus {
    outline: 2px solid #696969;
  }
`;

const BlockButtons = styled.div`
  padding-top: 12px;
  display: flex;
`;

const Add = styled.button`
  padding: 9px 14px;
  margin-right: 10px;
  background-color: #4dd599;
  border-radius: 4px;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;

  &:active {
    background-color: #aad599;
  }
`;

const Cancel = styled(Add)`
  background: #f4f6f8;
  color: #9c9c9c;

  &:active {
    background-color: #6c9c9c;
    color: #f4f6f8;
  }
`;

const FormAddTask = (props) => {

  const [task, setTask] = useState('')

  const aTask = () => {
    props.AddTask(task)
    setTask('');
    props.setVisibleForm(false)
  }
  
  return (
    <Wrapper>
      <EnterText onChange={event => setTask(event.target.value)} value={task} type="text" placeholder="Enter text" />
      <BlockButtons>
        <Add onClick={aTask} >Add</Add>
        <Cancel onClick={()=> props.setVisibleForm(false)}>Cancel</Cancel>
      </BlockButtons>
    </Wrapper>
  );
};

export default FormAddTask;
