import BlogLine from './BlogLine'
import React from 'react'
import { useSelector } from 'react-redux'
import { List } from '@mui/material'

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs)

  return (
    <List data-testid="blog_list">
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <BlogLine key={blog.id} blog={blog} />
        ))}
    </List>
  )
}

export default BlogList
