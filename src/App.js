import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaulLayout from "./layouts";
import { publicRouter } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Layout = route.layout ? (
              route.layout
            ) : route.layout === null ? (
              <></>
            ) : (
              DefaulLayout
            );
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <route.component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
