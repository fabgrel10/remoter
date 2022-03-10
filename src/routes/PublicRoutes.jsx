import { Navigate, Route, Routes } from 'react-router-dom';
import JobList from '../features/JobBoard/JobBoard';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/jobs" />} />
    <Route path="/jobs" element={<JobList />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default PublicRoutes;
