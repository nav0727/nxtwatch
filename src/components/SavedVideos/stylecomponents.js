/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const SavedCon = styled.nav`
  background-color: ${props => (props.isDark ? '#f0f0f0' : '#020202')};
  color: ${props => (props.isDark ? '#020202' : '#f4f4f4')};

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 90vh;

  @media screen and (min-width: 5677px) {
    font-size: 12px;
  }
`
