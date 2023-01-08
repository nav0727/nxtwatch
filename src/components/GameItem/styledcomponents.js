/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GameListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 20px;

  color: ${props => (props.isDark ? '#181818' : '#fff')};
`
