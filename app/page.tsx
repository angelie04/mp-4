"use client";
import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background: #ffe4ec;
  `;
const Title = styled.h2`  
  color: #ab7de0;
  font-size: calc(30px + 1vw);
  margin-bottom: 8px;
`;
const Subtitle = styled.p`
  color: #68697c;
  margin-bottom: 32px;
  font-size: calc(8px + 0.9vw);
`;
const Input = styled.input`
  padding: 6px 12px;
  border-radius: 900px;
  border: 1px solid #f9a8d4;
  outline: none;
  width: 250px;
  margin-bottom: 16px;
`;
const StyledLink = styled(Link)`
  background: #fbcfe8;
  color: #dc6095;
  padding: 6px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
`;
// Landing pages like Home page will go here
export default function Home() {
  const [city, setCity]= useState("");
  return (
    <>
    <PageWrapper>
      <Title>Weather App</Title>
      <Subtitle>Enter a city name to find its weather</Subtitle>
      <Input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
      <StyledLink href={`/${city}`}>
        Get Weather ☁️
      </StyledLink>
    </PageWrapper>
    </>
  );
}
