import ChartsandMaps from "./pages/ChartsandMaps";
import Contact from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/charts-and-maps" element={<ChartsandMaps />}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
