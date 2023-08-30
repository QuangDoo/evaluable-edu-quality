import { useRouteElements } from "~/hooks";
import "./App.css";

function App() {
  const routeElements = useRouteElements();

  return <>{routeElements}</>;
}

export default App;
