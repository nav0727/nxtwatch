/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#bfbfbf' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};

  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;

  font-size: 16px;
  @media screen and (max-width: 5677px) {
    font-size: 12px;
  }
`
