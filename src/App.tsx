import "@/App.css"

import { ThemeProvider } from "@/components/theme-provider"
import BannerCalcView from "@/modules/banner/BannerCalcView"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BannerCalcView />
    </ThemeProvider>
  )
}

export default App
