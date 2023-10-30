
import { useState } from "react"
import UserForm from "./Components/UserForm"


function App() {
  const [Users,SetUsers] = useState([])

  const handleSaveUser =(user) => {
    console.log(user)
  };
const name = 'Evans Kurgat';
  return (
    <div className= "Container mt5">
      <UserForm handlesaveUser= {handleSaveUser} name={name} />
       </div>
  );
}

export default App
