import ConnectWallet from "../utils/ConnectWallet";
import ThemeToggle from "../utils/ThemeToggle";

function App() {
  return (
    <>
      <h1>Home</h1>
      <ThemeToggle />
      <ConnectWallet />
    </>
  );
}

export default App;
