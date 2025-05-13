import { Route, Routes } from "react-router";
import { Done, Pending, Home } from "./pages";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/done" element={<Done />} />
      </Route>
    </Routes>
  );
}

export default App;
