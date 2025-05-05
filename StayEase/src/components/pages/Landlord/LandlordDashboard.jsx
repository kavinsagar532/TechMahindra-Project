import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Landlord/LandlordDashboard.css";

export default function LandlordDashboard() {
  return (
    <div className="landlord-dashboard-container">
      <h2 className="landlord-dashboard-title">Welcome to the Landlord Dashboard</h2>
      <p className="landlord-dashboard-description">Manage your properties, view tenants, and more.</p>
      <div className="landlord-dashboard-actions">
        <Link to="/landlord/manage-properties" className="landlord-dashboard-btn">Manage Properties</Link>
        <Link to="/landlord/view-tenants" className="landlord-dashboard-btn">View Tenants</Link>
        <Link to="/landlord/settings" className="landlord-dashboard-btn">Settings</Link>
      </div>
    </div>
  );
}
