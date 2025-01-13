import { Routes, Route} from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Register from "./Register";
import DiplomaDetails from "./Details";
import Header from "./Header";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Republic Polytechnic" />} />

        <Route path="Diplomas" element={<Diplomas />}>
          <Route path=":dipId" element={<Diploma />} >
            <Route path=":modId" element={<DiplomaDetails />} />
          </Route>
        </Route>

        <Route path="Register" element={<Register />}/> 
        <Route path="Confirmed" element={<Confirmation />}/>
        
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/openhouse">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
