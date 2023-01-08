/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const VideosContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#f4f4f4')};

  @media screen and (min-width: 5677px) {
    font-size: 12px;
  }
`
export const InPutBar = styled.input`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#f4f4f4')};
`
