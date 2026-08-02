import { Badge } from "@/components/ui/badge";

interface Props {
  status: "ACTIVE" | "SUSPENDED";
}

export default function UserStatusBadge({ status }: Props) {
  if (status === "ACTIVE") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Active
      </Badge>
    );
  }

  return (
    <Badge variant="destructive" className="hover:bg-destructive">
      Suspended
    </Badge>
  );
}
