/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ParagraphEl = styled.p`
  color: ${props => (props.isDark ? '#181818' : '#f0f0f0')};
  padding: 0px;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`
