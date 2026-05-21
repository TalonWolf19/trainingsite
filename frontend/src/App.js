import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#242424",
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "0px",
            fontFamily: "DM Sans, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
