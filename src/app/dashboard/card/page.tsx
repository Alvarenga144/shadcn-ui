import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Ghost } from "lucide-react";


export default function Page() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {'123456789'.split("").map((item) => (
                <Card key={item}>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="ghost">Info</Button>
                        <Button variant="default">Mas</Button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    );
}