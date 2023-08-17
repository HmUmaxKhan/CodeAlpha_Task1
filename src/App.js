import Education from "./components/Education";
import Personal from "./components/Personal";
import Registered from "./components/Registered";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
     <Routes>
     <Route exact path="/" element={<SignUp />} />
     <Route exact path="/personal" element={<Personal />} />
     <Route exact path="/education" element={<Education />} />
     <Route exact path="/registered" element={<Registered />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
