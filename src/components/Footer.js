import React from 'react';
import styled from 'styled-components';
import githubIcon from '../assets/icons/github.svg';

const Footer = (props) => {
  return (
    <PageFooter>
      <MadeBy>
        Made by
        <Anchor
          href="https://github.com/rchrd-0"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon img={githubIcon} />
          RCHRD
        </Anchor>
        for
        <Anchor
          href="https://www.theodinproject.com/"
          target="_blank"
          rel="noreferrer"
        >
          The Odin Project
        </Anchor>
      </MadeBy>
    </PageFooter>
  );
};

const PageFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: rgba(88, 89, 89, 0.7);
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.colour.light};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const MadeBy = styled.div`
  display: flex;
  gap: 0.5ch;
`;

const Anchor = styled.a`
  display: flex;
  gap: 0.5ch;
  &&& {
    color: ${(props) => props.theme.colour.primary};
  }
  font-weight: 500;
`;

const GithubIcon = styled.img`
  width: 24px;
  height: auto;
  content: url('${(props) => props.img}');
`;

export default Footer;
