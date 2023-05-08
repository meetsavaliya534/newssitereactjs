import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState("dark"); 

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <LoadingBar color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/general/us">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalUS"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          </Route>
          <Route exact path="/general/uk">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalUK"
              pageSize={pageSize}
              country="gb"
              category="general"
            />
          </Route>
          <Route exact path="/general/cn">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalCN"
              pageSize={pageSize}
              country="cn"
              category="general"
            />
          </Route>
          <Route exact path="/general/ru">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalRU"
              pageSize={pageSize}
              country="ru"
              category="general"
            />
          </Route>
          <Route exact path="/general/ua">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalUA"
              pageSize={pageSize}
              country="ua"
              category="general"
            />
          </Route>
          <Route exact path="/general/de">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalDE"
              pageSize={pageSize}
              country="de"
              category="general"
            />
          </Route>
          <Route exact path="/general/jp">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalJP"
              pageSize={pageSize}
              country="jp"
              category="general"
            />
          </Route>
          <Route exact path="/general/au">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalAU"
              pageSize={pageSize}
              country="au"
              category="general"
            />
          </Route>
          <Route exact path="/general/it">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="generalIT"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
