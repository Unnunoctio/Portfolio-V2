import { FullPage } from "./pages/FullPage"
import { LayoutApp } from "./pages/layout/LayoutApp"
import { AppTheme } from "./theme/AppTheme"

export const App = () => {
  return (
    <AppTheme>
      <LayoutApp>
        <FullPage />
      </LayoutApp>
    </AppTheme>
  )
}
