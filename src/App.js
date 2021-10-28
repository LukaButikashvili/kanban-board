import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Switch } from "react-router";

import "./App.css";
import Kanban from "./pages/Kanban";
import Labels from "./pages/Labels";

function App() {
  return (
    <Switch>
      <DndProvider backend={HTML5Backend}>
        <Route exact path="/" component={Kanban} />
        <Route exact path="/Labels" component={Labels} />
      </DndProvider>
    </Switch>
  );
}

export default App;
