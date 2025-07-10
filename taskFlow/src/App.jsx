import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import ContactForm from "./pages/ContactForm";
import './App.css';



function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
