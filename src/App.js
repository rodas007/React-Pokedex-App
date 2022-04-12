
import "./App.scss";
import Home from "./page/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

<Router>
<Routes>
         <Route path="/" element={<Home />}/>
         <Route path="*" element={<Home />} />
       </Routes>


</Router>

  )}
export default App;
