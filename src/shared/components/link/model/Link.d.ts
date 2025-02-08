import { ComponentProps } from "react";
import Link from "next/link";

export interface ILinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode;
  className?: string;
}
