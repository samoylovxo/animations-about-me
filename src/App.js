import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Welcome} from "./components/Welcome/Welcome";
import {InfoContent} from "./components/InfoContent/InfoContent";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Redirect to="/welcome"/>
            <Route path="/welcome" render={() => <Welcome />}/>
            <Route path="/info" render={() => <InfoContent />}/>
            <div className="Footer">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </BrowserRouter>
  );
}

export default App;
