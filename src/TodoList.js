import React, { useState } from 'react';

const TodoList = (props) => {
  const [val, setVal] = useState('');
  const [ent, setEnt] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState(props.text);

  const addInput = (e) => {
    setVal(e.target.value);
  };

  const buttonClick = () => {
    setEnt((previous) => {
      return [...previous, val];
    });
    setVal('');
  };

  const enterval = (id) => {
    setEnt((previous) => {
      return previous.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  const edform = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setShowForm(false);
      }}
      style={{ margin: '0px 5px' }}
    >
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
    </form>
  );

  return (
    <div className="items">
      <div className="button2">
        <button
          id="btn2"
          onClick={() => {
            // props.onChange(props.id);
            setShowForm(!showForm);
          }}
        >
          edit
        </button>
        <br />

        <button
          id="btn2"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          -
        </button>
        <div
          style={{
            display: 'flex',
          }}
        >
          <li>{text}</li>
          {showForm && edform}
        </div>
      </div>

      <div className="input2">
        <input
          type="text"
          placeholder="enter value"
          onChange={addInput}
          value={val}
        />

        <button
          id="btn3"
          onClick={() => {
            val && buttonClick();
          }}
        >
          @
        </button>
      </div>
      <div className="mainlist">
        <ol id="list1">
          {ent.map((valu, index) => (
            <div className="list4" key={index}>
              <li key={valu} id="li1">
                {valu}
              </li>
              <button onClick={enterval}>O</button>
            </div>
          ))}
        </ol>
      </div>
      <TodoList />
    </div>
  );
};
export default TodoList;
