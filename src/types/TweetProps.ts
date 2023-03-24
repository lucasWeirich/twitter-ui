export interface comment {
  id: number,
  user: {
    id: number,
    name: string,
    username: string,
    imgUser: React.ReactNode
  },
  message: string
}

export interface retweeter {
  user: {
    id: number,
    name: string,
    username: string,
  }
}

export interface like {
  user: {
    id: number,
    name: string,
    username: string,
  }
}

export interface TweetProps {
  user: {
    id: number,
    name: string,
    username: string
  },
  tweet: {
    id: number
    post: string,
    comments: {
      qnt: number,
      comment: Array<comment>,
    },
    retweets: {
      qnt: number,
      retweet: Array<retweeter>
    },
    likes: {
      qnt: number,
      like: Array<like>
    }
  }
}