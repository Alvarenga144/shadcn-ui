import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
    {
        id: "item-1",
        question: "How do I get started?",
        answer: "You can start by reading the documentations",
    },
    {
        id: "item-2",
        question: "How do I get started?",
        answer: "You can start by reading the",
    },
    {
        id: "item-3",
        question: "How do I get started?",
        answer: "You can start by the documentations",
    },
    {
        id: "item-4",
        question: "How do I get started?",
        answer: "Start by reading the documentations",
    },
]

export default function Page() {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                {
                    items.map((item) => (
                        <AccordionItem value={item.id} key={item.id}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    );
}