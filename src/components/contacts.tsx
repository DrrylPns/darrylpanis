"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { toast } from "sonner";
import { useState } from "react";

export function Contacts() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  return (
    <div className="z-50">
      <Link
        href="https://github.com/DrrylPns"
        className={cn(
          "text-muted-foreground",
          buttonVariants({
            variant: "ghost",
          })
        )}
        target="_"
      >
        <FaGithub />
        GitHub
      </Link>

      <Button
        variant="ghost"
        className={cn(
          "text-muted-foreground",
          buttonVariants({
            variant: "ghost",
          })
        )}
        onClick={() => {
          navigator.clipboard.writeText("darrylpaniss@gmail.com");
          toast.success("Email copied to clipboard", {
            duration: 3000,
          });
          setIsEmailCopied(true);
          setTimeout(() => setIsEmailCopied(false), 3000);
        }}
      >
        {isEmailCopied ? <MdMarkEmailRead /> : <MdEmail />}
        {isEmailCopied ? "Copied" : "Email"}
      </Button>
    </div>
  );
}
