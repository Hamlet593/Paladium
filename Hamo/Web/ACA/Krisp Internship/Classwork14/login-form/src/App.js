import { useState, useEffect } from "react";
import MakeForm from "./components/Form/Form.jsx";
import "./App.css";

function App() {
  
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSetUserName = e => {
    setUserName(e.target.value)
  }

  const handleSetPassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      userName,
      password,
    }

    setUser(user)
    alert(JSON.stringify(user))
  }
  useEffect(() => {
    if(user){
      document.title = user.userName
    }
  }, [user])
  return (
    
    <div>
      <MakeForm handleSetUserName={handleSetUserName} handleSetPassword={handleSetPassword} handleSubmit={handleSubmit} />
    </div>
  )
}

export default App;