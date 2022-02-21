import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default Router;
