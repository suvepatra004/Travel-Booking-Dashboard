import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  // Wrap your admin sub-routes inside the layout component
  layout("./routes/admin/Admin-layout.tsx", [
    route("dashboard", "./routes/admin/Dashboard.tsx"),
  ]),
] satisfies RouteConfig;
