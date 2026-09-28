import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">AI Disaster Response</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-slate-300">Home</Link>
          <Link to="/report" className="hover:text-slate-300">Report</Link>
          <Link to="/map" className="hover:text-slate-300">Map</Link>
          <Link to="/dashboard" className="hover:text-slate-300">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
