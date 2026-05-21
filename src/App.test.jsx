import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Links from './components/Links'
import ArticleList from './components/ArticleList'

describe('Blog components', () => {
  test('renders content from props', () => {
    const posts = [
      {
        id: 1,
        title: 'Toyota Supra',
        date: 'May 10, 2026',
        preview: 'A legendary sports car with a powerful engine.',
      },
    ]

    render(
      <>
        <Header title="Let's Talk About Cars" />
        <About
          image="https://example.com/avatar.png"
          name="Enock Wanjala"
          text="I blog about cars."
        />
        <ArticleList posts={posts} />
      </>,
    )

    expect(screen.getByRole('heading', { name: "Let's Talk About Cars" })).toBeInTheDocument()
    expect(screen.getByText('Enock Wanjala')).toBeInTheDocument()
    expect(screen.getByText('I blog about cars.')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'blog logo' })).toHaveAttribute(
      'src',
      'https://example.com/avatar.png',
    )
    expect(screen.getByRole('heading', { name: 'Toyota Supra' })).toBeInTheDocument()
    expect(screen.getByText('May 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('A legendary sports car with a powerful engine.')).toBeInTheDocument()
  })

  test('renders the Home component with connected sections', () => {
    const blog = {
      title: "Let's Talk About Cars",
      image: 'https://example.com/avatar.png',
      name: 'Enock Wanjala',
      text: 'I blog about cars.',
      links: [
        { id: 1, label: 'Home', href: '#home' },
        { id: 2, label: 'Articles', href: '#articles' },
      ],
      posts: [
        {
          id: 1,
          title: 'Toyota Supra',
          date: 'May 10, 2026',
          preview: 'A legendary sports car with a powerful engine.',
        },
      ],
    }

    render(<Home blog={blog} />)

    expect(screen.getByRole('heading', { name: "Let's Talk About Cars" })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Blog links' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '#articles')
    expect(screen.getByRole('heading', { name: 'Toyota Supra' })).toBeInTheDocument()
  })

  test('renders blog links from props', () => {
    render(<Links links={[{ id: 1, label: 'About', href: '#about' }]} />)

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
  })

  test('updates rendered content when props change', () => {
    const { rerender } = render(<Header title="Original Blog Title" />)

    expect(screen.getByRole('heading', { name: 'Original Blog Title' })).toBeInTheDocument()

    rerender(<Header title="Updated Blog Title" />)

    expect(screen.getByRole('heading', { name: 'Updated Blog Title' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Original Blog Title' })).not.toBeInTheDocument()
  })
})
