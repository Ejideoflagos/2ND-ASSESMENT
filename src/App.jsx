import {useState} from "react";
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

const App = () => {
    const [username, setUsername] = useState ('Aisha');

    const handleChangeName = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div className = 'bg-amber-300 items-center'>
            <UserOutput name={username}/>
            <UserInput changeName={handleChangeName} username={username}/>
        </div>
    )
}

export default App;