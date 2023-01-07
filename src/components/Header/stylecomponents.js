/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HeadContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#fff' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#fff')};
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`
