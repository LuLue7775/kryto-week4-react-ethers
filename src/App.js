import BlockchainContextProvider from "./contexts/BlockchainContext";
import Router from "./Router";

export default function App() {
  return (
    <BlockchainContextProvider>
      <Router />
    </BlockchainContextProvider>
  );
}
