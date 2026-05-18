// this is our article list component
// it's receiving a prop called posts from the parent component (App) which we are using to display the title, date, and preview of the article by passing it down to the Article component as props
import Article from './Article'

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
