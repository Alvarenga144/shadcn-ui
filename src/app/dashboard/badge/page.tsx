import { Badge } from "@/components/ui/badge";

export default function Page(){
    return (
        <div className="grid grid-cols-4 gap-4">
            <Badge>Default</Badge>
            <Badge variant={"destructive"}>destructive</Badge>
            <Badge variant={"secondary"}>secondary</Badge>
            <Badge variant={"outline"}>outline</Badge>
        </div>
    );
}