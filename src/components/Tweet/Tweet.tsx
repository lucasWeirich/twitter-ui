import * as T from './Tweet.styles'
import imgUser from '../../assets/images/fake/user.png'
import { comment, like, retweeter, TweetProps } from '../../types/TweetProps'
import { useState } from 'react'
import ButtonActions from './Actions'

export default function Tweet({ user, tweet }: TweetProps) {

  const [comments, setComments] = useState<{ qnt: number; comment: comment[]; }>(tweet.comments)
  const [retweets, setRetweets] = useState<{ qnt: number; retweet: retweeter[]; }>(tweet.retweets)
  const [likes, setLikes] = useState<{ qnt: number; like: like[]; }>(tweet.likes)

  return <T.Wrapper>
    <T.Img src={imgUser} alt="User Fake" />

    <T.Content>
      <T.User>{user.name} <span>@{user.username}</span></T.User>

      <T.Post>
        {tweet.post}
      </T.Post>

      <T.Actions>
        <ButtonActions idTweet={tweet.id} type="comment" qnt={comments.qnt} />
        <ButtonActions idTweet={tweet.id} type="retweet" qnt={retweets.qnt} />
        <ButtonActions idTweet={tweet.id} type="like" qnt={likes.qnt} />
      </T.Actions>

    </T.Content>
  </T.Wrapper>
}