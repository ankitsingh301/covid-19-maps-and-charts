import ChartsandMaps from "./pages/ChartsandMaps";
import Contact from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const queryClient = new QueryClient();
const baseurl = process.env.PUBLIC_URL;

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/charts-and-maps" element={<ChartsandMaps />}></Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
};

export default App;
