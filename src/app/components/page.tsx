'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import CodeBlock from '@/components/CodeBlock'

export default function Components() {
  const [clickCount, setClickCount] = useState(0)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">React Components</h1>
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">What are Components?</h2>
            <p className="text-gray-600 mb-6">
              Components are the building blocks of React applications. They are reusable pieces of UI 
              that can accept inputs (called &quot;props&quot;) and return React elements describing what should 
              appear on the screen.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Benefits of Components:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Reusability</strong> - Use the same component multiple times</li>
                  <li>• <strong>Maintainability</strong> - Update in one place, changes everywhere</li>
                  <li>• <strong>Modularity</strong> - Break complex UI into smaller pieces</li>
                  <li>• <strong>Testability</strong> - Test components in isolation</li>
                </ul>
              </div>
              <div>
                <CodeBlock
                  code={`// Simple component example
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>
}

// Usage
<Welcome name="Alice" />
<Welcome name="Bob" />`}
                  language="tsx"
                  title="Basic Component"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Button Component Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Button Component</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Button Variants"
              description="Different styles of buttons for different actions"
              icon="🔘"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Primary Buttons</h4>
                  <div className="flex gap-2 mb-2">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Secondary Buttons</h4>
                  <div className="flex gap-2 mb-2">
                    <Button variant="secondary" size="small">Small</Button>
                    <Button variant="secondary" size="medium">Medium</Button>
                    <Button variant="secondary" size="large">Large</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Danger Buttons</h4>
                  <div className="flex gap-2 mb-2">
                    <Button variant="danger" size="small">Delete</Button>
                    <Button variant="danger" size="medium">Remove</Button>
                    <Button variant="danger" size="large">Destroy</Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interactive Button</h4>
                  <Button 
                    onClick={() => setClickCount(clickCount + 1)}
                    variant="primary"
                  >
                    Clicked {clickCount} times
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card
              title="Button Code"
              description="How the Button component is implemented"
              icon="📝"
            >
              <CodeBlock
                code={`interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false 
}: ButtonProps) {
  const classes = \`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}`}
                language="tsx"
                title="Button Component"
              />
            </Card>
          </div>
        </section>

        {/* Card Component Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Card Component</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Simple Card"
              description="A basic card with title and description"
              icon="📄"
            />
            
            <Card
              title="Card with Action"
              description="This card includes a button for user interaction"
              icon="⚡"
            >
              <Button size="small" onClick={() => alert('Card button clicked!')}>
                Click Me
              </Button>
            </Card>
            
            <Card
              title="Custom Content"
              description="Cards can contain any React elements as children"
              icon="🎨"
            >
              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-[75%]"></div>
                </div>
                <p className="text-sm text-gray-600">Progress: 75%</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Code Block Component Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Code Block Component</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">JavaScript Example</h3>
              <CodeBlock
                code={`const greeting = "Hello, World!"
console.log(greeting)

function add(a, b) {
  return a + b
}

const result = add(5, 3)
console.log(result) // 8`}
                language="javascript"
                title="Basic JavaScript"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">TypeScript Example</h3>
              <CodeBlock
                code={`interface User {
  id: number
  name: string
  email: string
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
}

function getUser(id: number): User | null {
  // Implementation here
  return user
}`}
                language="typescript"
                title="TypeScript Interface"
              />
            </div>
          </div>
        </section>

        {/* Component Composition */}
        <section className="mb-12">
          <Card
            title="Component Composition"
            description="How components work together to build complex UIs"
            icon="🧩"
          >
            <CodeBlock
              code={`// This entire page is built using our components!
export default function Components() {
  return (
    <div>
      <Card title="Example" description="Description">
        <Button onClick={handleClick}>
          Action Button
        </Button>
      </Card>
      
      <CodeBlock 
        code="const example = 'code'"
        language="javascript"
      />
    </div>
  )
}`}
              language="tsx"
              title="Component Composition Example"
            />
          </Card>
        </section>
      </div>
    </div>
  )
} 