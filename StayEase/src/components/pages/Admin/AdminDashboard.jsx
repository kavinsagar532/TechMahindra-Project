import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Admin/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-main">
        <h2 className="admin-dashboard-title">Welcome to Admin Dashboard</h2>
        <div className="admin-dashboard-content">
          <p className="admin-dashboard-description">
            Manage tenants, landlords, properties, and more.
          </p>
          <div className="admin-dashboard-actions">
            <Link to="/admin/landlords" className="admin-dashboard-btn">
              View Landlords
            </Link>
            <Link to="/admin/tenants" className="admin-dashboard-btn">
              View Tenants
            </Link>
            <Link to="/admin/properties" className="admin-dashboard-btn">
              View Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
