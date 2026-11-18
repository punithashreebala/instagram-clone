import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal
} from "lucide-react";

import React, { useState } from 'react'

function Post({ post}) {
    const[liked, setLiked] = useState(post.isLiked ?? false);
    const[saved, setSaved] = useState(post.isSaved ?? false);
    const[likes, setLikes] = useState(post.isLikes ?? 0);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(liked ? likes -1 : likes +1);
    };



  return (
    <>
    <article className="post">
        <div className="post-header">
            <img src={post.avatar} alt={post.username} />
            <div>
                <strong>{post.username}</strong>
                <p>{post.location}</p>
            </div>
             <MoreHorizontal />
        </div>
        <img
        className="post-image"
        src={post.image}
        alt={post.caption}
      />
      <div className="post-actions">

        <div className="action-left">
          <Heart
            onClick={handleLike}
            fill={liked ? "red" : "none"}
            color={liked ? "red" : "currentColor"}
          />

          <MessageCircle />
          <Send />
        </div>

        <Bookmark
          onClick={() => setSaved(!saved)}
          fill={saved ? "black" : "none"}
        />

      </div>
      <div className="post-content">
        <strong>{(likes ?? 0).toLocaleString()}likes</strong>

        <p>
          <strong>{post.username}</strong>{" "}
          {post.caption}
        </p>

        <p className="muted">
          View all comments
        </p>

        <span className="muted">{post.timeAgo}</span>
      </div>

    </article>

    </>
  )
}

export default Post