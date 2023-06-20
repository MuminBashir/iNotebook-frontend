import AlertContext from "./alertContext";
import { useState } from "react";

const AlertState = (props) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <AlertContext.Provider value={{ showAlert, alert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
