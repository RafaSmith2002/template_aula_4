import React from "react";
import styled from "styled-components";
const FooterWrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
//Modelo de exportação nomeada, você precisará importar com {}
export function Footer(props) {
  return (
    <FooterWrapper>
      <h2>Produzido por Rafael</h2>
    </FooterWrapper>
  );
}
