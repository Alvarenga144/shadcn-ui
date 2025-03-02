"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const smalldate = date?.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short",
    });

    return (
        <div className="flex-col sm:flex flex-grap sm:flex-row gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
                disabled={ (date) => date.getDay() == 0 || date.getDay() == 6}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />

            <div>
                <h1 className="text-3xl">Information</h1>
                <div className="border-b"></div>
                <p>{ smalldate }</p>
            </div>
        </div>
    );
}