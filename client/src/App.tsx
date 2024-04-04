import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Statements } from "./pages/StatementsPage";
import { Learners } from "./pages/LearnersPage";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Statements />} />
        <Route path="/learners" element={<Learners />} />
      </Routes>
    </BrowserRouter>
  );
}
