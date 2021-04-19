import React from "react"

import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => (
  <PrimaryLayout column="col-xs-6">
    <Post
      title="This is our first post"
      excerpt="We are writing to be displayed in our excerpt."
    />
    <Post
      title="This is our first post"
      excerpt="We are writing to be displayed in our excerpt."
    />
    <Post
      title="This is our first post"
      excerpt="We are writing to be displayed in our excerpt."
    />
  </PrimaryLayout>
)
