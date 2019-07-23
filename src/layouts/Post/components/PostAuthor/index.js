import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import Link from "~/components/mdx/Link";
import { theme, prop } from "styled-tools";

const Wrapper = styled.div`
  display: flex;
  border-radius: 99px;
  color: white;
  font-family: ${theme("titleFontFamily")};
  padding: 2px;
`;

const Avatar = styled.img`
  max-width: 100%;
  border-radius: 999px;
  margin-right: 10px;
  width: ${prop("size", "60px")};
  height: ${prop("size", "60px")};
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px lime;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font-weight: bold;

  &,
  &:visited {
    color: white;
  }
`;

const PostAuthor = ({ avatar, name, twitter, date }) => (
  <Wrapper>
    <Avatar src={avatar} />
    <Content>
      <div>
        <StyledLink
          href={`https://twitter.com/${twitter}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </StyledLink>
      </div>
      {date ? (
        <div>
          <time dateTime={date}>{format(date, "MMM D, YYYY")}</time>
        </div>
      ) : (
        <div>Unknown date</div>
      )}
    </Content>
  </Wrapper>
);

export default PostAuthor;
