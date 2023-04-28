import { UnauthenticatedError } from "../errors";
import { User } from "../types";

const checkPermissions = (
  requestUser: User | undefined,
  resourceUserId: string | null | undefined
) => {
  if (requestUser?.userId === resourceUserId?.toString()) return;
  throw new UnauthenticatedError("Not authorized to access this route");
};

export default checkPermissions;
