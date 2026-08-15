import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

/**
 * Ensures that the current request has an active session.
 * Used exclusively inside Server Actions to prevent unauthorized RPC calls.
 */
export async function requireAuth() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error("Unauthorized. You must be logged in to perform this action.");
  }
  return session;
}
