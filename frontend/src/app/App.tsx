import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { appRoutes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
