import { useParams } from "react-router-dom"
import styled from "styled-components"
import FAKE_API from "../components/api/tweets";

import Post from "../components/Post/Post"
import Tweet from "../components/Tweet/Tweet"

export default function Tweeter() {
  const idTweet = useParams().id;

  const FAKE_USER = {
    id: 1,
    name: 'Lucas Weirich',
    username: 'lucasWeirich'
  }

  return <Wrapper>
    {/* <Tweet
      user={FAKE_USER}
      tweet={FAKE_TWEET[Number(idTweet) - 1]}
    /> */}
    <FAKE_API id={Number(idTweet) - 1} />

    <Comments>
      <Post
        type="answer"
        label="Tweet your answer?"
      />
      {/* {
        FAKE_TWEET.map(tweet => (
          <Tweet
          user={FAKE_USER}
          tweet={tweet}
          />
          ))
        } */}
      <FAKE_API />

    </Comments>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const Comments = styled.div`
  background-color: var(--bg);
`