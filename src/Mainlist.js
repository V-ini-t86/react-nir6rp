import React, { useState } from 'react';
import TodoList from './TodoList';

const Mainlist = () => {
  const [inputList, setinputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listItems = () => {
    setItems((oldData) => {
      return [...oldData, inputList];
    });
    setinputList('');
  };

  const deleteitems = (id) => {
    setItems((oldData) => {
      return oldData.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  // const editItems = ()=>{

  // }

  return (
    <>
      <div className="maindiv">
        <div className="centerdiv">
          <br />
          <h1>ToDo List</h1>
          <br />
          <div className="input1">
            <input
              type="text"
              placeholder="Add Items"
              onChange={itemEvent}
              value={inputList}
            />
            <button id="btn1" onClick={listItems}>
              +
            </button>
          </div>
          <ol>
            {items &&
              items.map((itemval, indexval) => {
                return (
                  <>
                    <TodoList
                      key={indexval}
                      text={itemval}
                      onSelect={deleteitems}
                      child={items}
                    />
                  </>
                );
              })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Mainlist;
