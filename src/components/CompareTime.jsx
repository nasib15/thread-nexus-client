import { formatDistanceToNow } from "date-fns";

export const formatTimeAgo = (timeString) => {
  const date = new Date(timeString);
  return formatDistanceToNow(date, { addSuffix: true, includeSeconds: true });
};
