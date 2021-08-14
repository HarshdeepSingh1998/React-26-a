import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName=event.target.name;
    const [value, Name] = event.target;

    // if(inputName==="fName"){
    //   setFullName({fname:newValue})
    // }else(inputName==="lName"){
    //   setFullName({lName:newValue})
    // // }
    // we can add function in setValue also
    // it will have the prev value of fullName it will print an object with fName and lName
    setFullName((prevValue) => {
      if (Name === "fName") {
        return {
          fName: Value,
          lName: prevValue.lName
        };
      } else if (Name === "lName") {
        return {
          fName: prevValue.fName,
          lName: Value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
