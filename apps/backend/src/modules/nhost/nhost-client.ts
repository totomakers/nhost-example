import { NhostClient } from "@nhost/nhost-js";

export const nhost = new NhostClient({
  backendUrl: process.env.NHOST_BACKEND_URL,
  adminSecret: process.env.NHOST_ADMIN_SECRET,
});
