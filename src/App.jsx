import Home from './components/Home'
import './App.css'

function App() {

  // App stores the blog data and passes it to Home, which organizes the page sections.
  const blog = {
    name: "Enock Wanjala",
    title: "Let's Talk About Cars",
    image: "https://images.pexels.com/photos/36847299/pexels-photo-36847299/free-photo-of-yellow-robot-character-on-orange-background.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "I blog about cars.",
    links: [
      {
        id: 1,
        label: "Home",
        href: "#home"
      },
      {
        id: 2,
        label: "Articles",
        href: "#articles"
      },
      {
        id: 3,
        label: "About",
        href: "#about"
      }
    ],
    posts: [
      {
        id: 1,
        title: "Toyota Supra",
        preview:
          "The Toyota Supra is a legendary sports car known for its powerful engine, sleek design, and impressive speed.",
        date: "May 10, 2026"
      },
      {
        id: 2,
        title: "Ford Mustang",
        preview:
          "The Ford Mustang is an iconic American muscle car that combines performance, style, and a rich automotive history.",
        date: "May 12, 2026"
      },
      {
        id: 3,
        title: "Tesla Model S",
        preview:
          "The Tesla Model S is a luxury electric vehicle famous for its advanced technology, fast acceleration, and long battery range.",
        date: "May 14, 2026"
      }
    ]
  }
  
  return (
    <Home blog={blog} />
  )
}

export default App
