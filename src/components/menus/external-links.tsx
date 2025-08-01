import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {VIALogo} from '../icons/via';
import {CategoryMenuTooltip} from '../inputs/tooltip';
import {CategoryIconContainer} from '../panes/grid';

const ExternalLinkContainer = styled.span`
  position: absolute;
  right: 1em;
  display: flex;
  gap: 1em;
`;

export const ExternalLinks = () => (
  <ExternalLinkContainer>
    <a href="https://thockkeyboard.com/" target="_blank">
      <CategoryIconContainer>
        <img height="25px" src="/images/logo.png"/>
        <CategoryMenuTooltip>افضل كيبورد في العالم</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <CategoryIconContainer></CategoryIconContainer>
  </ExternalLinkContainer>
);
