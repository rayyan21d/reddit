"use client";

import { User } from "next-auth";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

interface UserAccountNavProps {
  user: Pick<User, "name" | "email" | "image">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({
  user,
}: UserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{ name: user.name || null, image: user.image || null }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white align='end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.name && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
