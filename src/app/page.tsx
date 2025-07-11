import Link from 'next/link'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-8">
        <h1 className="text-5xl font-bold mb-4">Next.js Crash Course</h1>
        <p className="text-xl mb-8">Learn React with Next.js through hands-on examples</p>
        <div className="flex justify-center gap-4">
          <Link href="/about">
            <Button size="large">Get Started</Button>
          </Link>
          <Link href="/concepts">
            <Button variant="secondary" size="large">Learn Concepts</Button>
          </Link>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">What You&apos;ll Learn</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Pages & Routing"
            description="Learn how Next.js handles page routing and navigation between different views."
            icon="🏗️"
          >
            <Link href="/about">
              <Button size="small">Explore Pages</Button>
            </Link>
          </Card>
          
          <Card
            title="Components"
            description="Understand React components and how to build reusable UI elements."
            icon="⚙️"
          >
            <Link href="/components">
              <Button size="small">See Components</Button>
            </Link>
          </Card>
          
          <Card
            title="API Routes"
            description="Create backend functionality with Next.js API routes and data fetching."
            icon="🔗"
          >
            <Link href="/api-demo">
              <Button size="small">Try APIs</Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Project Structure</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">📁 File Organization</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>src/app/</strong> - Page components (App Router)</li>
                <li><strong>src/components/</strong> - Reusable UI components</li>
                <li><strong>src/app/api/</strong> - API route handlers</li>
                <li><strong>public/</strong> - Static assets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🚀 Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>TypeScript</strong> - Type safety</li>
                <li><strong>Tailwind CSS</strong> - Utility-first styling</li>
                <li><strong>App Router</strong> - Modern routing system</li>
                <li><strong>API Routes</strong> - Full-stack capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-gray-600 mb-8">
          Navigate through the different sections using the navigation bar above. 
          Each section demonstrates different aspects of Next.js development.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/about">
            <Button>Start Learning</Button>
          </Link>
          <Link href="/concepts">
            <Button variant="secondary">View Concepts</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
