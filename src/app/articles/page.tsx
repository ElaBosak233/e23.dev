import { cn } from "@/utils";
import { ConstructionIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Articles - E23.DEV",
};

export default function Articles() {
    return (
        <div
            className={cn([
                "flex-1",
                "flex",
                "justify-center",
                "items-center",
                "gap-2",
            ])}
        >
            <ConstructionIcon />
            <span>Still under developping</span>
        </div>
    );
}
