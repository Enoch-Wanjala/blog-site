// Article displays one blog post preview.
// It receives title, date, and preview from ArticleList and has no child components.
function Article({ title, date = 'January 1, 1970', preview }) {

    return (    

        <article style={{ border: '1px solid lightgray', padding: '20px', marginBottom: '20px', borderRadius: '5px' }}>
            <h3 style={{fontWeight: 'bolder', fontSize: '1.25rem', margin: '10px 0' }}>{ title }</h3>
            <small style={{color: 'gray', fontSize: '0.875rem', margin: '10px 0' }}>{ date }</small>
            <p style={{ margin: '10px 0' }}>{ preview }</p>
        </article>  
    )
}   

export default Article;
