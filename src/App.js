import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Emailsent from './components/Emailsent';
import Verifiedemail from "./components/Verifiedemail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Emailsent />

        <Routes>
          <Route
            exact
            path="/verifiedemail"
            element={
              <Verifiedemail/>
            }
          />

          
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
