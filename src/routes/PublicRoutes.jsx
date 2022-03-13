import { Navigate, Route, Routes } from 'react-router-dom';
import JobBoard from '../features/JobBoard/JobBoard';
import Job from '../features/Job/Job';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/jobs" />} />
    <Route path="/jobs" element={<JobBoard />} />
    <Route path="/jobs/:id" element={<Job />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default PublicRoutes;
