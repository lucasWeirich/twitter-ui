import { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet";

interface FAKE_API_PROPS {
  newTweet?: string,
  id?: number
}

export default function FAKE_API(props: FAKE_API_PROPS) {
  const FAKE_USER = {
    id: 1,
    name: 'Lucas Weirich',
    username: 'lucasWeirich'
  }

  const [FAKE_TWEET, setFAKE_TWEET] = useState([
    {
      id: 1,
      post: 'Este post está top, apenas um teste',
      comments: {
        qnt: 4,
        comment: [],
      },
      retweets: {
        qnt: 1,
        retweet: []
      },
      likes: {
        qnt: 20,
        like: []
      }
    },
    {
      id: 2,
      post: 'Estamos vivendo um momento interessante no mercado de startups. Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first. Tudo começa com um projeto open source/free 👀',
      comments: {
        qnt: 0,
        comment: [],
      },
      retweets: {
        qnt: 2,
        retweet: []
      },
      likes: {
        qnt: 18,
        like: []
      }
    },
    {
      id: 3,
      post: 'Este post está bom, apenas mais um teste para ter texto',
      comments: {
        qnt: 4,
        comment: [],
      },
      retweets: {
        qnt: 1,
        retweet: []
      },
      likes: {
        qnt: 20,
        like: []
      }
    },
    {
      id: 4,
      post: 'Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias. Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev',
      comments: {
        qnt: 4,
        comment: [],
      },
      retweets: {
        qnt: 1,
        retweet: []
      },
      likes: {
        qnt: 20,
        like: []
      }
    },
    {
      id: 5,
      post: 'lidar com datas continua sendo uma das coisas mais chatas em programação... por exemplo: - o mês no JS começa em 0 (janeiro = 0) - a semana começa em 0 (domingo = 0) - o mês no MySQL começa em 1 (janeiro = 1) - a semana no MySQL começa na segunda-feira (domingo = 6)',
      comments: {
        qnt: 4,
        comment: [],
      },
      retweets: {
        qnt: 1,
        retweet: []
      },
      likes: {
        qnt: 20,
        like: []
      }
    },
  ])

  function handleState() {
    if (!props.newTweet) return;

    setFAKE_TWEET([
      ...FAKE_TWEET,
      {
        id: FAKE_TWEET.length + 1,
        post: props.newTweet,
        comments: {
          qnt: 0,
          comment: [],
        },
        retweets: {
          qnt: 0,
          retweet: []
        },
        likes: {
          qnt: 0,
          like: []
        }
      }
    ]);
  }

  useEffect(() => {
    handleState()
    console.log('as', props.newTweet)
  }, [FAKE_TWEET])

  return <>
    {
      props.id
        ?
        <Tweet
          user={FAKE_USER}
          tweet={FAKE_TWEET[props.id]}
        />
        :
        FAKE_TWEET.map(tweet => (
          <Tweet
            user={FAKE_USER}
            tweet={tweet}
          />
        )).reverse()
    }
  </>
}