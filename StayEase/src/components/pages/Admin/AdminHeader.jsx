import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Admin/AdminHeader.css";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <h1 className="admin-header-title">StayEase</h1>
      <nav className="admin-nav">
        <ul className="admin-nav-list">
          <li className="admin-nav-item">
            <Link to="/admin/dashboard" className="admin-nav-link"><b>Dashboard</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/manage-users" className="admin-nav-link"><b>Manage Users</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/admin/settings" className="admin-nav-link"><b>Settings</b></Link>
          </li>
          <li className="admin-nav-item">
            <Link to="/" className="admin-nav-link"><b>Logout</b></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
