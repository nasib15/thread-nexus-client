import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <ul className="space-y-1.5">
      <li>
        <NavLink
          to={"/dashboard/profile"}
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
          My Profile
        </NavLink>
      </li>

      <li className="hs-accordion" id="users-accordion">
        <NavLink
          to={"/dashboard/add-post"}
          type="button"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-x-3 py-2 px-[9px] bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
              : "flex items-center gap-x-3 py-2 px-[9px] text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
          }
        >
          <MdOutlinePostAdd className="size-5" />
          Add Post
        </NavLink>
      </li>

      <li className="hs-accordion" id="projects-accordion">
        <NavLink
          to={"/dashboard/my-posts"}
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
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          My Posts
        </NavLink>
      </li>
    </ul>
  );
};

export default UserSidebar;
