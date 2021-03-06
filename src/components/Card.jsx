import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: ${(props) => props.color};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const Title = styled.span`
  padding: 5px;
  background-color: ${(props) => props.color};
  flex: 1;
`;

const Card = ({ title, ...props }) => {
  function getColorCard() {
    if (props.red) return "#c62828";
    if (props.blue) return "#1565c0";
    if (props.green) return "#2e7d32";
    if (props.purple) return "#6c5093";
  }

  function getColorTitle() {
    if (props.red) return "#f44336";
    if (props.blue) return "#2196f3";
    if (props.green) return "#4caf50";
    if (props.purple) return "#9c27b0";
  }

  return (
    <CardContainer color={getColorCard}>
      <HeaderContainer>
        <Title color={getColorTitle}>{title}</Title>
      </HeaderContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </CardContainer>
  );
};

export default Card;
