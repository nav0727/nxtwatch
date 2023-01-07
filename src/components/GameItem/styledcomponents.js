/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GameListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 320px;
  background-color: ${props => (props.isDark ? '#020202' : '#fff')};
  color: ${props => (props.isDark ? '#cccccc' : '#181818')};
`
