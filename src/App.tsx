import { ThemeProvider } from "./components/theme/theme-providder";
import { AmountProvider } from "./context/amount-provider";
import { ModeToggle } from "./components/theme-toggle/theme-toggle";
import FormWrapper from "./components/form/Form";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AmountProvider>
        <div className="container p-10">
        <ModeToggle />
        <FormWrapper/>
        </div>
      </AmountProvider>
    </ThemeProvider>
  );
}

export default App;
