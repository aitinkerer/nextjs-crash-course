import Link from 'next/link'
import Card from '@/components/Card'
import CodeBlock from '@/components/CodeBlock'
import Button from '@/components/Button'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Next.js</h1>
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">What is Next.js?</h2>
            <p className="text-gray-600 mb-6">
              Next.js is a React framework that provides additional features and optimizations 
              for building web applications. It&apos;s built on top of React and provides:
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• <strong>Server-Side Rendering (SSR)</strong> - Pages rendered on the server</li>
              <li>• <strong>Static Site Generation (SSG)</strong> - Pre-built pages at build time</li>
              <li>• <strong>API Routes</strong> - Backend functionality in the same project</li>
              <li>• <strong>File-based Routing</strong> - Automatic routing based on file structure</li>
              <li>• <strong>Built-in Optimization</strong> - Image optimization, code splitting, etc.</li>
            </ul>
          </div>
        </section>

        {/* Pages and Routing */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pages and Routing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="App Router"
              description="Next.js 13+ uses the App Router for modern routing"
              icon="🗂️"
            >
              <CodeBlock
                code={`src/app/
├── page.tsx          # Home page (/)
├── about/
│   └── page.tsx      # About page (/about)
├── blog/
│   └── [slug]/
│       └── page.tsx  # Dynamic route (/blog/[slug])
└── layout.tsx        # Root layout`}
                language="text"
                title="App Router Structure"
              />
            </Card>
            
            <Card
              title="Navigation"
              description="Using Next.js Link component for client-side navigation"
              icon="🔗"
            >
              <CodeBlock
                code={`import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}`}
                language="tsx"
                title="Navigation Component"
              />
            </Card>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Concepts</h2>
          <div className="space-y-6">
            <Card
              title="Server Components vs Client Components"
              description="Understanding the difference between server and client components"
              icon="⚡"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Server Components (Default)</h4>
                  <CodeBlock
                    code={`// This runs on the server
export default function ServerComponent() {
  return <div>Server Component</div>
}`}
                    language="tsx"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Client Components</h4>
                  <CodeBlock
                    code={`'use client'

// This runs in the browser
export default function ClientComponent() {
  return <div>Client Component</div>
}`}
                    language="tsx"
                  />
                </div>
              </div>
            </Card>
            
            <Card
              title="Layouts"
              description="Shared UI that wraps multiple pages"
              icon="📱"
            >
              <CodeBlock
                code={`// src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>Navigation</nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )
}`}
                language="tsx"
                title="Root Layout"
              />
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Explore More</h2>
          <p className="text-gray-600 mb-8">
            Continue learning by exploring different aspects of Next.js
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/components">
              <Button>See Components</Button>
            </Link>
            <Link href="/api-demo">
              <Button variant="secondary">Try API Routes</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 