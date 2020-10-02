import React from "react";
import format from "date-fns/format";
import Link from "~/components/mdx/Link";
import { Flex } from "react-system";

const PostAuthor = ({ avatar, name, profiles, date, ...props }) => (
  <Flex
    css={{
      borderRadius: "99px",
      color: "white",
      fontFamily: "PT Sans, sans-serif",
      padding: "2px"
    }}
    {...props}
  >
    {avatar && (
      <img
        src={avatar}
        css={{
          maxWidth: "100%",
          borderRadius: "999px",
          width: "60px",
          height: "60px",
          border: "2px solid transparent",
          boxShadow: "0 0 0 2px lime",
          marginRight: "20px"
        }}
      />
    )}
    <Flex flexDirection="column" justifyContent="center">
      <div>
        <Link
          href={profiles[0].url}
          rel="noopener noreferrer"
          target="_blank"
          css={{
            fontWeight: "bold",
            color: "white",
            "&:visited": { color: "white" }
          }}
        >
          {name}
        </Link>
      </div>
      {date ? (
        <div>
          <time dateTime={date}>{format(date, "MMM D, YYYY")}</time>
        </div>
      ) : (
        <div>Unknown date</div>
      )}
    </Flex>
  </Flex>
);

export default PostAuthor;
