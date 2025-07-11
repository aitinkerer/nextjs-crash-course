import Link from 'next/link'
import Card from '@/components/Card'
import CodeBlock from '@/components/CodeBlock'
import Button from '@/components/Button'

export default function Concepts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Key Concepts</h1>
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Understanding Next.js & React</h2>
            <p className="text-gray-600 mb-6">
              This section covers the fundamental concepts you need to understand when building 
              applications with Next.js and React. These concepts form the foundation of modern 
              web development.
            </p>
          </div>
        </section>

        {/* React Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">React Fundamentals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Components"
              description="Building blocks of React applications"
              icon="🧩"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  Components are JavaScript functions that return JSX (JavaScript XML). 
                  They represent pieces of UI that can be reused throughout your application.
                </p>
                <CodeBlock
                  code={`// Functional Component
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>
}

// Arrow Function Component
const Greeting = ({ message }) => {
  return <p>{message}</p>
}

// Using Components
<Welcome name="Alice" />
<Greeting message="Welcome to Next.js!" />`}
                  language="jsx"
                  title="React Components"
                />
              </div>
            </Card>
            
            <Card
              title="Props"
              description="How components receive data"
              icon="📡"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  Props (properties) are how you pass data from parent components to child components. 
                  They make components reusable and dynamic.
                </p>
                <CodeBlock
                  code={`// Parent Component
function App() {
  return (
    <div>
      <UserCard 
        name="John Doe"
        email="john@example.com"
        role="Developer"
      />
    </div>
  )
}

// Child Component
function UserCard({ name, email, role }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  )
}`}
                  language="jsx"
                  title="Props Example"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* State Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">State Management</h2>
          <div className="space-y-6">
            <Card
              title="useState Hook"
              description="Managing component state in React"
              icon="🔄"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">What is State?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    State is data that can change over time. When state changes, 
                    React re-renders the component to reflect the new state.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Local state:</strong> Data specific to a component</li>
                    <li>• <strong>Reactive:</strong> UI updates when state changes</li>
                    <li>• <strong>Immutable:</strong> Don&apos;t modify state directly</li>
                  </ul>
                </div>
                <div>
                  <CodeBlock
                    code={`import { useState } from 'react'

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0)
  
  // Event handler
  const increment = () => {
    setCount(count + 1)
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  )
}`}
                    language="jsx"
                    title="useState Example"
                  />
                </div>
              </div>
            </Card>
            
            <Card
              title="useEffect Hook"
              description="Handling side effects in React"
              icon="⚡"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Side Effects</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Side effects are operations that affect things outside the component, 
                    like API calls, subscriptions, or DOM manipulation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Data fetching:</strong> API calls</li>
                    <li>• <strong>Subscriptions:</strong> Event listeners</li>
                    <li>• <strong>Timers:</strong> setTimeout, setInterval</li>
                    <li>• <strong>DOM updates:</strong> Direct DOM manipulation</li>
                  </ul>
                </div>
                <div>
                  <CodeBlock
                    code={`import { useState, useEffect } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // This runs after component mounts
    fetchUser(userId)
      .then(userData => {
        setUser(userData)
        setLoading(false)
      })
  }, [userId]) // Dependency array
  
  if (loading) return <div>Loading...</div>
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}`}
                    language="jsx"
                    title="useEffect Example"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Next.js Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Next.js Specific Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="File-based Routing"
              description="How Next.js handles navigation"
              icon="🗂️"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  Next.js uses the file system to define routes. Each file in the app directory 
                  becomes a route automatically.
                </p>
                <CodeBlock
                  code={`src/app/
├── page.tsx                    # / (home page)
├── about/
│   └── page.tsx               # /about
├── blog/
│   ├── page.tsx               # /blog
│   └── [slug]/
│       └── page.tsx           # /blog/[slug]
├── products/
│   └── [category]/
│       └── [id]/
│           └── page.tsx       # /products/[category]/[id]
└── layout.tsx                 # Root layout`}
                  language="text"
                  title="File-based Routing Structure"
                />
              </div>
            </Card>
            
            <Card
              title="Server vs Client Components"
              description="Understanding where code runs"
              icon="🖥️"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  Next.js has two types of components: Server Components (default) that run on the server, 
                  and Client Components that run in the browser.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-800">Server Components</h5>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Run on server</li>
                      <li>• No JavaScript sent to client</li>
                      <li>• Can access backend directly</li>
                      <li>• Default in Next.js 13+</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-800">Client Components</h5>
                    <ul className="text-xs text-green-600 space-y-1">
                      <li>• Run in browser</li>
                      <li>• Interactive (useState, etc.)</li>
                      <li>• Use &apos;use client&apos; directive</li>
                      <li>• Can handle events</li>
                    </ul>
                  </div>
                </div>
                <CodeBlock
                  code={`// Server Component (default)
export default function ServerComponent() {
  return <h1>This runs on the server</h1>
}

// Client Component
'use client'

import { useState } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`}
                  language="jsx"
                  title="Server vs Client Components"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Layouts and Nested Routes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Layouts & Nested Routes</h2>
          <div className="space-y-6">
            <Card
              title="Layout System"
              description="Shared UI across multiple pages"
              icon="📱"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">What are Layouts?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Layouts are components that wrap around page components to provide 
                    shared UI elements like navigation, headers, and footers.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Root Layout:</strong> Wraps entire application</li>
                    <li>• <strong>Nested Layouts:</strong> For specific sections</li>
                    <li>• <strong>Persistent:</strong> State preserved on navigation</li>
                  </ul>
                </div>
                <div>
                  <CodeBlock
                    code={`// Root Layout (app/layout.tsx)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>Navigation</nav>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )
}

// Nested Layout (app/dashboard/layout.tsx)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <section>{children}</section>
    </div>
  )
}`}
                    language="jsx"
                    title="Layout Examples"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* API Routes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">API Routes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Backend in Frontend"
              description="Creating API endpoints in Next.js"
              icon="🔗"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  API routes allow you to create backend endpoints as part of your Next.js application. 
                  They&apos;re perfect for handling form submissions, database operations, and external API calls.
                </p>
                <CodeBlock
                  code={`// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const users = await fetchUsersFromDatabase()
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const userData = await request.json()
  const newUser = await createUser(userData)
  return NextResponse.json(newUser, { status: 201 })
}`}
                  language="typescript"
                  title="API Route Example"
                />
              </div>
            </Card>
            
            <Card
              title="HTTP Methods"
              description="Different types of API operations"
              icon="🌐"
            >
              <div className="space-y-4">
                <p className="text-gray-600">
                  API routes support different HTTP methods for different operations. 
                  Each method has a specific purpose and use case.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <strong className="text-green-800">GET</strong>
                    <p className="text-green-600">Retrieve data</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <strong className="text-blue-800">POST</strong>
                    <p className="text-blue-600">Create new data</p>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded">
                    <strong className="text-yellow-800">PUT</strong>
                    <p className="text-yellow-600">Update existing data</p>
                  </div>
                  <div className="bg-red-50 p-2 rounded">
                    <strong className="text-red-800">DELETE</strong>
                    <p className="text-red-600">Remove data</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <Card
            title="Best Practices"
            description="Tips for building better Next.js applications"
            icon="⭐"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Component Design</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Single Responsibility:</strong> Each component should have one job</li>
                  <li>• <strong>Reusable:</strong> Design components to be used in multiple places</li>
                  <li>• <strong>Props Interface:</strong> Use TypeScript interfaces for props</li>
                  <li>• <strong>Default Props:</strong> Provide sensible defaults</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Performance</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Server Components:</strong> Use by default for better performance</li>
                  <li>• <strong>Client Components:</strong> Only when interactivity is needed</li>
                  <li>• <strong>Image Optimization:</strong> Use Next.js Image component</li>
                  <li>• <strong>Code Splitting:</strong> Happens automatically in Next.js</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Continue Learning</h2>
          <p className="text-gray-600 mb-8">
            Now that you understand the core concepts, explore the practical examples 
            in the other sections of this crash course.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/components">
              <Button>Try Components</Button>
            </Link>
            <Link href="/api-demo">
              <Button variant="secondary">Test API Routes</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 