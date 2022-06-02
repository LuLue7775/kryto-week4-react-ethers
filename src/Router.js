import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EntryAssignment from "./pages/EntryAssignment";
import ERC721Assignment from "./pages/ERC721Assignment";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/entry" element={<EntryAssignment />} />
        <Route path="/erc721" element={<ERC721Assignment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
