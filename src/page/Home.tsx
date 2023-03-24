import { useEffect, useState } from "react"
import styled from "styled-components"
import FAKE_API from "../components/api/tweets"
import Post from "../components/Post/Post"
import Tweet from "../components/Tweet/Tweet"

export default function Home() {

  const FAKE_USER = {
    id: 1,
    name: 'Lucas Weirich',
    username: 'lucasWeirich'
  }

  /* const [tweets, setTweets] = useState(FAKE_TWEET);

  const updateTweets = () => {
    setTweets(FAKE_TWEET);
  }

  useEffect(() => {
    updateTweets();
    console.log(FAKE_TWEET)
  }, [FAKE_TWEET]) */

  return <Wrapper>
    <Post
      type="tweet"
      label="Whats happening?"
    />

    <AllTweets>
      {
        /* tweets.map(tweet => (
          <Tweet
            user={FAKE_USER}
            tweet={tweet}
          />
        )).reverse() */
        <FAKE_API />
      }
    </AllTweets>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const AllTweets = styled.div`
  background-color: var(--bg);
`