import Article from './Article'

// ArticleList connects the post data to the Article component.
// It receives posts from Home and creates one Article for each post.
function ArticleList({ posts }) {

    return (        
            
        <main>
            {posts.map((post) => (
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
            ))}
        </main>
    )

}   

export default ArticleList;
