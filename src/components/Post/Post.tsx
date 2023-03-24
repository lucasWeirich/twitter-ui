import * as P from './Post.styles'
import imgUser from '../../assets/images/fake/user.png'
import Button from '../Button/Button'
import { FormEvent, useState } from 'react'

interface PostProps {
  type: 'tweet' | 'answer'
  label: string
}

export default function Post(props: PostProps) {

  const [valueTweet, setValueTweet] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
  }

  return <P.Wrapper type={props.type} onSubmit={handleSubmit}>
    <P.User src={imgUser} alt="User Fake" />
    <P.Input
      maxLength={1500}
      placeholder={props.label}
      onChange={(e) => setValueTweet(e.target.value)}
    />
    <Button
      type="submit"
      label={props.type}
      small
    />
  </P.Wrapper>
}