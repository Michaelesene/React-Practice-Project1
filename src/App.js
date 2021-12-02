import './App.css';

import ToDo from './components/ToDo.js'
//  JSX
function App() {
    return ( 
        <div className = "App" >
            <h1 className = "App-logo" >
                HELLO WORLD MY NAME IS MICHAEL 
            </h1>
            <ul>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
                <ToDo/>
            </ul>
                
        </div>
    );
}
export default App;