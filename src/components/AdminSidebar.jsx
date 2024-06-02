import React from "react";
import { GoReport } from "react-icons/go";
import { TfiAnnouncement } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <ul className="space-y-1.5">
      <li>
        <NavLink
          to={"/dashboard/admin-profile"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
              : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
          }
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Admin Profile
        </NavLink>
      </li>

      <li className="hs-accordion" id="users-accordion">
        <NavLink
          to={"/dashboard/manage-users"}
          type="button"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
              : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
          }
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Manage Users
        </NavLink>
      </li>

      <li className="hs-accordion" id="projects-accordion">
        <NavLink
          to={"/dashboard/reported-comments"}
          type="button"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
              : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
          }
        >
          <GoReport className="size-4" />
          Reported Comments
        </NavLink>
      </li>
      <li className="hs-accordion" id="projects-accordion">
        <NavLink
          to={"/dashboard/announcements"}
          type="button"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
              : "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
          }
        >
          <TfiAnnouncement className="size-4" />
          Make Announcements
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminSidebar;
