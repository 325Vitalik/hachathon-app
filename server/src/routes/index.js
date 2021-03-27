import { randomRoutes } from "./random.route";
import { forbiddenRoutes } from "./forbidden.route";
import { eventRoutes } from "./event.route";

export const combineRoutes = (app) => {
  app.use("/api", eventRoutes);
  app.use("/api/forbidden", forbiddenRoutes);
};
