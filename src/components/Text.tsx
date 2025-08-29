import type { HTMLAttributes } from "react";

type TextFontFamily = "monospace" | "sans-serif";

// Combine base types into one
type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  fontFamily?: TextFontFamily;
};

// Inherit from base type
// interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
//       fontFamily?: TextFontFamily;

// }

export default function Text({
  children,
  style,
  fontFamily = "sans-serif",
  ...props
}: TextProps) {
  return (
    <p
      {...props}
      style={{
        ...style,
        fontFamily,
      }}
    >
      {children}
    </p>
  );
}
