'use client';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function Page() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-6">
            <AlertDialog
            open={dialogOpen}
                //onOpenChange={(open) => console.log({ open })}
                onOpenChange={setDialogOpen}
            >
                <AlertDialogTrigger asChild>
                    <Button onClick={() => setDialogOpen(true)} variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => console.log('cancelao')}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => console.log('continuao')}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Button onClick={() => setDialogOpen(true)}>Abierto manualmente</Button>
        </div>
    );
}