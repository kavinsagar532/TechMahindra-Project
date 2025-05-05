import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Tenant/TenantDashboard.css";

export default function TenantDashboard() {
  return (
    <div className="tenant-dashboard-container">
      <h2 className="tenant-dashboard-title">Welcome to the Tenant Dashboard</h2>
      <p className="tenant-dashboard-description">Browse available properties, view bookings, and more.</p>
      <div className="tenant-dashboard-actions">
        <Link to="/tenant/browse-properties" className="tenant-dashboard-btn">Browse Properties</Link>
        <Link to="/tenant/view-bookings" className="tenant-dashboard-btn">View Bookings</Link>
        <Link to="/tenant/settings" className="tenant-dashboard-btn">Settings</Link>
      </div>
    </div>
  );
}
