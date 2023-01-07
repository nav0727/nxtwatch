/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'

export const LeftNavContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  width: 16vw;
  display: flex;
  padding-right: 30px;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 5677px) {
    width: 150px;
  }
`

export const Paragraph = styled.p`
  color: ${props => (props.isDark ? '#020202' : '#f9f9f9')};
  padding: 0px;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`
