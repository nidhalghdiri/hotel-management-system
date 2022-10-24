import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faHotel,
  faKey,
  faFileInvoiceDollar,
  faUsers,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  const sidebarItems = [
    { id: 1, title: "لوحة المعلومات", icon: faDashboard, link: "/" },
    { id: 2, title: "المستخدمين", icon: faUsers, link: "/users" },
    { id: 3, title: "الشقق والتسكين", icon: faHotel, link: "/" },
    { id: 4, title: "التأجير و الحجوزات", icon: faKey, link: "/" },
    {
      id: 5,
      title: "السندات و الفواتير",
      icon: faFileInvoiceDollar,
      link: "/",
    },
    { id: 6, title: "العملاء", icon: faUsers, link: "/" },
    { id: 7, title: "التقارير", icon: faNewspaper, link: "/" },
  ];

  const sidebarLi = sidebarItems.map((item, index) => (
    <li className="sidebar_content_list-item" key={index}>
      <Link to={item.link}>
        <FontAwesomeIcon icon={item.icon} size="2x" />
        <span>{item.title}</span>
      </Link>
    </li>
  ));
  return (
    <div className="sidebar_container">
      <div className="sidebar_content">
        <ul className="sidebar_content_list">{sidebarLi}</ul>
      </div>
    </div>
  );
}

export default Sidebar;
