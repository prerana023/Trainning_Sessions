import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./contexts/ThemeContextProvder";
import { useEffect, useState } from "react";

function App() {

  const [themeMode, setThememode] = useState('light')

  const darkTheme = () =>{
    setThememode('dark')
  }

  const lightTheme =() =>{
    setThememode('light')
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove("dark", "light")
    document.querySelector('html')?.classList.add(themeMode)
  }, [themeMode])

  return (
    <div>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme }}>
          <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
