// Header displays the blog title.
// It receives title from Home and is shown at the top of the page.
function Header({ title }) {
    return (        
             <h1 style={{ color: '#333', fontSize: '2rem', margin: '20px' }}>{title}</h1>
    )
}   

export default Header;
