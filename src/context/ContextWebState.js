import { useState } from "react";
import ContextWeb from "./ContextWeb";
const ContextWebState = (props) => {
  const [stateWeb, setStateWeb] = useState({});
  const updateStateWeb = (newState) => {
    setStateWeb(stateWeb);
  }
  return (
    <ContextWeb.Provider value={{ stateWeb, setStateWeb }}>
      {props.children}
    </ContextWeb.Provider>
  );
};

export default ContextWebState;
