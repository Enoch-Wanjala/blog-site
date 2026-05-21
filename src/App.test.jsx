import { render, screen, within } from '@testing-library/react'
import App from './App'
import About from './components/About'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import Header from './components/Header'

describe('App', () => {
  test('renders the correct child components', () => {
    const { container } = render(<App />)

    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('aside')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
  })
})

describe('About', () => {
  test('renders an aside element', () => {
    const { container } = render(<About text="I blog about cars." />)

    expect(container.querySelector('aside')).toBeInTheDocument()
  })

  test("renders an img with the blog logo and alt text of 'blog logo'", () => {
    render(<About image="https://example.com/logo.png" text="I blog about cars." />)

    expect(screen.getByRole('img', { name: 'blog logo' })).toHaveAttribute(
      'src',
      'https://example.com/logo.png',
    )
  })

  test('uses a default value for the image if no image is passed as a prop', () => {
    render(<About text="I blog about cars." />)

    expect(screen.getByRole('img', { name: 'blog logo' })).toHaveAttribute('src')
  })

  test('renders a p with the about text', () => {
    render(<About text="I blog about cars." />)

    expect(screen.getByText('I blog about cars.').tagName).toBe('P')
  })
})

describe('Article', () => {
  test('renders an article element', () => {
    const { container } = render(<Article title="Toyota Supra" preview="A sports car." />)

    expect(container.querySelector('article')).toBeInTheDocument()
  })

  test('renders a h3 with the title of the post', () => {
    render(<Article title="Toyota Supra" preview="A sports car." />)

    expect(screen.getByRole('heading', { level: 3, name: 'Toyota Supra' })).toBeInTheDocument()
  })

  test('renders a small with the date of the post', () => {
    const { container } = render(
      <Article title="Toyota Supra" date="May 10, 2026" preview="A sports car." />,
    )

    expect(container.querySelector('small')).toHaveTextContent('May 10, 2026')
  })

  test('uses a default value for the date if no date is passed as a prop', () => {
    const { container } = render(<Article title="Toyota Supra" preview="A sports car." />)

    expect(container.querySelector('small')).toHaveTextContent('January 1, 1970')
  })

  test('renders a p with the preview text', () => {
    render(<Article title="Toyota Supra" preview="A sports car." />)

    expect(screen.getByText('A sports car.').tagName).toBe('P')
  })
})

describe('ArticleList', () => {
  const posts = [
    {
      id: 1,
      title: 'Toyota Supra',
      date: 'May 10, 2026',
      preview: 'A legendary sports car.',
    },
    {
      id: 2,
      title: 'Ford Mustang',
      date: 'May 12, 2026',
      preview: 'An iconic muscle car.',
    },
  ]

  test('renders a main element', () => {
    const { container } = render(<ArticleList posts={posts} />)

    expect(container.querySelector('main')).toBeInTheDocument()
  })

  test('renders a Article component for each post passed as a prop', () => {
    const { container } = render(<ArticleList posts={posts} />)

    expect(container.querySelectorAll('article')).toHaveLength(posts.length)
  })
})

describe('Header', () => {
  test('renders a header element', () => {
    const { container } = render(<Header title="Let's Talk About Cars" />)

    expect(container.querySelector('header')).toBeInTheDocument()
  })

  test('renders a h1 with the blog name', () => {
    render(<Header title="Let's Talk About Cars" />)

    expect(
      within(screen.getByRole('banner')).getByRole('heading', {
        level: 1,
        name: "Let's Talk About Cars",
      }),
    ).toBeInTheDocument()
  })
})
