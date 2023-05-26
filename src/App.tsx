import ChartsandMaps from "./pages/ChartsandMaps";
import Contact from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const queryClient = new QueryClient();
const baseurl = process.env.PUBLIC_URL;

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={baseurl}>
        <Routes>
          <Route path={baseurl + "/"} element={<Home />}></Route>
          <Route path={baseurl + "/contact"} element={<Contact />}></Route>
          <Route
            path={baseurl + "charts-and-maps"}
            element={<ChartsandMaps />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
