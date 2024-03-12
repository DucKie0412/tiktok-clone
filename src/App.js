import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "~/layouts";
import { Fragment } from "react";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout; //neu k co layout nao thi mac dinh la defaultlayout
            const Page = route.component
            return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />  {/* Page trở thành children */}
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
