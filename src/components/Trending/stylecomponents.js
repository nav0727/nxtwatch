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
export const TrendingBody = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#181818' : '#fff')};
  height: 90vh;
  flex-direction: column;
`
