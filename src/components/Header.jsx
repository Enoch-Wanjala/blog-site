
// thi is our header component
//it's receiving a prop called title from the parent component (App)
// which we are using to display the title
function Header({ title }) {
    return (        
             <h1 style={{ color: '#333', fontSize: '2rem', margin: '20px' }}>{title}</h1>
    )
}   

export default Header;