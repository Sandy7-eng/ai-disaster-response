import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-slate-800 text-white text-center p-4 mt-auto">
        &copy; {new Date().getFullYear()} AI Disaster Response Assistant
      </footer>
    </div>
  );
}
