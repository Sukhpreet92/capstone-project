import styled from "styled-components";

export default function Card({ name }) {
  return (
    <Article>
      <p>{name}</p>
    </Article>
  );
}

const Article = styled.article`
  background: white;
  border: 1px solid #000000;
  filter: blur(0.04em);
  border-radius: 50px;
  text-align: center;
`;
