import Link, { type LinkProps } from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import styles from "./TextLink.module.css";

type TextLinkBaseProps = {
  children: ReactNode;
  className?: string;
  block?: boolean;
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
  const { children, className, block } = props;

  const classNames = [
    styles["text-link"],
    block && styles["text-link--block"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href !== undefined) {
    const { href, onClick: _onClick, block: _block, ...rest } = props;
    void _onClick;
    void _block;
    return (
      <Link href={href} className={classNames} {...rest}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", href: _href, block: _block, ...rest } = props;
  void _href;
  void _block;
  return (
    <button type={type} onClick={onClick} className={classNames} {...rest}>
      {children}
    </button>
  );
}
