import Header from './Header'
import About from './About'
import Links from './Links'
import ArticleList from './ArticleList'

// Home is the main page component.
// It receives the blog object from App, then connects Header, About, Links, and ArticleList.
function Home({ blog }) {
  return (
    <>
      <Header title={blog.title} />
      <About image={blog.image} name={blog.name} text={blog.text} />
      <Links links={blog.links} />
      <ArticleList posts={blog.posts} />
    </>
  )
}

export default Home
