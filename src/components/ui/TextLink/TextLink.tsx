import Link, { type LinkProps } from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import styles from "./TextLink.module.css";

type TextLinkBaseProps = {
  children: ReactNode;
  className?: string;
};

type TextLinkAsLinkProps = TextLinkBaseProps & {
  href: LinkProps["href"];
  onClick?: never;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

type TextLinkAsButtonProps = TextLinkBaseProps & {
  href?: never;
  onClick: () => void;
  type?: "button" | "submit";
} & Omit<ComponentProps<"button">, "onClick" | "children" | "className" | "type">;

type TextLinkProps = TextLinkAsLinkProps | TextLinkAsButtonProps;

export function TextLink(props: TextLinkProps) {
  const { children, className } = props;

  const classNames = [styles["text-link"], className].filter(Boolean).join(" ");

  if ("href" in props && props.href !== undefined) {
    const { href, onClick: _onClick, ...rest } = props;
    void _onClick;
    return (
      <Link href={href} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", href: _href, ...rest } = props;
  void _href;
  return (
    <button type={type} onClick={onClick} className={classNames} {...rest}>
      {children}
    </button>
  );
}
