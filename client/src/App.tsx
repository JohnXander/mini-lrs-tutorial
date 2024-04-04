import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Statements } from "./pages/StatementsPage";
import { Learners } from "./pages/LearnersPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Statements />} />
        <Route path="/learners" element={<Learners />} />
      </Routes>
    </BrowserRouter>
  );
}
