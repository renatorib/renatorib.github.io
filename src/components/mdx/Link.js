import React from "react";
import { useTheme } from "emotion-theming";

const Link = React.forwardRef(({ css, ...props }, ref) => {
  const { palette, highlightColor } = useTheme();
  return (
    <a
      css={{
        textDecoration: "none",
        transition: "all 300ms ease",
        color: palette.color[0],
        "&:visited": { color: palette.color[0] },
        "&:hover": { color: highlightColor },
        ...css
      }}
      ref={ref}
      {...props}
    />
  );
});

export default Link;
