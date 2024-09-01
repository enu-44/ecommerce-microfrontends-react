import AppRoutes from "./routes/AppRoutes"
import { ErrorBoundary } from "./routes/ErrorBoundary"

function App() {
  return (
    <ErrorBoundary>
     <AppRoutes />
    </ErrorBoundary>
  )
}

export default App