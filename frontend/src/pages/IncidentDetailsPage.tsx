import { useParams } from 'react-router-dom';

export default function IncidentDetailsPage() {
  const { id } = useParams();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Incident Details</h1>
      <p className="text-slate-600">Viewing details and status for incident ID: {id}</p>
    </div>
  );
}
