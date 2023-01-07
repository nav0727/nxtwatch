/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Paragraph = styled.p`
  color: ${props => (props.isDark ? '#020202' : '#f9f9f9')};
  padding: 0px;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`
