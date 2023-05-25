import { TaskProvider } from "../context/taskContext";
import Home from "../pages/home";

export default function Root() {
  return (
    <TaskProvider>
      <Home/>
    </TaskProvider>
  );
}