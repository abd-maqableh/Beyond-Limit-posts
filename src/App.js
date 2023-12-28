import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Layout />} />
            <Route path="/posts/:userId" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
