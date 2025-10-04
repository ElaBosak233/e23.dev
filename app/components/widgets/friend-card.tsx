import type React from "react";
import type { ReactNode } from "react";
import { cn } from "@/utils";

type FriendCardProps = React.ComponentProps<"div"> & {
  name: string;
  description?: ReactNode;
  link?: ReactNode;
  avatar: string;
};

function FriendCard(props: FriendCardProps) {
  const { name, description, link, avatar, className, ...rest } = props;

  return (
    <div
      className={cn([
        "flex",
        "bg-card",
        "border",
        "md:mx-4",
        "shadow-md",
        "rounded-xl",
        "h-full",
        "w-full",
        className,
      ])}
      {...rest}
    >
      <div className={cn(["flex-1", "items-center", "px-6", "py-6"])}>
        <div className={cn(["flex", "space-x-2", "items-center"])}>
          <h3 className={cn(["text-2xl", "font-serif"])}>{name}</h3>
        </div>
        <span className={cn(["italic", "text-sm"])}>{description}</span>
        <div className={cn(["text-gray-400", "py-3", "text-sm"])}>{link}</div>
      </div>
      <div
        className={cn(["flex", "items-center", "justify-end", "px-4", "py-4"])}
      >
        <img
          className="rounded-full"
          src={avatar}
          alt=""
          draggable="false"
          width="100"
        />
      </div>
    </div>
  );
}
export { FriendCard };
