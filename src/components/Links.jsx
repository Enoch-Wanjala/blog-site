// Links displays the blog navigation links.
// It receives link data from Home and renders each link as a clickable anchor.
function Links({ links }) {
  return (
    <nav aria-label="Blog links" style={{ margin: '20px' }}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          style={{ color: '#1a5fb4', marginRight: '16px' }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Links
