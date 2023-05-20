import DOM from "react-dom/client";
import Game from "./components/Game";

const Root = () => {
  return <Game />;
};

DOM.createRoot(document.body).render(<Root />);
