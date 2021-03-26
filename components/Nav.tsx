import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/Link';

const Nav = () => {
  return (
    <Background>
      <Container>
        <Items>
          <Item>
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Link href="/about">About</Link>
          </Item>
          <Item>
            <Link href="/links">Links (Fauna DB)</Link>
          </Item>
        </Items>
      </Container>
    </Background>
  );
};

export default Nav;

const Background = styled.div`
  background-color: #eee;
  height: 75px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding-left: 0px;
`;

const Item = styled.li`
  list-style: none;
  margin-right: 30px;
  font-size: 18px;
  transition: all 0.25s linear 0s;

  &:hover {
    color: #ff3366;
    transition: all 0.25s linear 0s;
  }
`;
