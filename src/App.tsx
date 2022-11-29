import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from './router'

function App() {

  return (
    <>
      <Suspense fallback={<>KiMi空间 - 欢迎您</>}>
        <Router>
          <Routes>
            {routes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
