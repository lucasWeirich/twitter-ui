import { Icon } from '@mdi/react'
import { mdiCardsHeartOutline, mdiAutorenew, mdiChatOutline, mdiInformation } from '@mdi/js'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

interface ButtonActionsProps {
  type: 'like' | 'comment' | 'retweet'
  qnt: number
  idTweet: number
}

export default function ButtonActions(props: ButtonActionsProps) {
  const navigate = useNavigate();

  function getIcon() {
    switch (props.type) {
      case 'like':
        return mdiCardsHeartOutline;
      case 'comment':
        return mdiChatOutline;
      case 'retweet':
        return mdiAutorenew;
      default:
        return mdiInformation;
    }
  }
  const iconActions = getIcon();

  function clickAction() {
    switch (props.type) {
      case 'like':
        console.log('Like')
        break;
      case 'comment':
        navigate(`/${props.idTweet}`)
        break;
      case 'retweet':
        console.log('retweet')
        break;
      default:
        console.log('Action Not Found')
        break;
    }
  }

  return <Wrapper onClick={clickAction}>
    <Icon
      path={iconActions}
      size='24px'
    />
    {props.qnt}
  </Wrapper>
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  color: var(--placeholder);
  background-color: transparent;
  border: none;
  outline: none;
  transition: all 0.3s;

  & svg {
    color: var(--placeholder);
    transition: all 0.3s;
  }

  &.active {
    color: var(--color);
    font-weight: 500;

    & svg {
      color: var(--color);
    }
  }
`