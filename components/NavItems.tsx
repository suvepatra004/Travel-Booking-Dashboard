import React from "react";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "../lib/utils";
import { isatty } from "tty";

const NavItems = () => {
  const user = {
    name: "Suvendu",
    email: "suve@mail.com",
    imageUrl: "/assets/images/david.webp",
  };
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size:30px" />
        <h2 className="">TravelGo</h2>
      </Link>
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 text-white!": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover: brightness-0 size-0 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/public/assets/images/david.webp"}
            alt={user?.name || "David"}
          />
          <article>
            <h2>{user?.name}</h2>
            <h2>{user?.email}</h2>
          </article>
          <button
            className="cursor-pointer"
            onClick={() => {
              console.log("Logged Out");
            }}
          >
            <img
              className="size-6"
              src="/public/assets/icons/logout.svg"
              alt="logout"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
