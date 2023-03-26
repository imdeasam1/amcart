import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Search from "./pages/search";
import Login from "./Login";
import App from "./App";

export default function Capp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*<Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
  */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));