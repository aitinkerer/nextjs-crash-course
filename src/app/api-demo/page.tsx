'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import CodeBlock from '@/components/CodeBlock'

interface TimeData {
  timestamp: number
  iso: string
  local: string
  utc: string
  date: string
  time: string
  timezone: string
}

interface User {
  id: number
  name: string
  email: string
  role: string
}

interface UsersResponse {
  users: User[]
  total: number
  filtered: boolean
  filter?: string
}

export default function ApiDemo() {
  const [timeData, setTimeData] = useState<TimeData | null>(null)
  const [timeLoading, setTimeLoading] = useState(false)
  
  const [calcResult, setCalcResult] = useState<{
    a: number;
    b: number;
    operation: string;
    result: number;
    calculation: string;
    error?: string;
  } | null>(null)
  const [calcLoading, setCalcLoading] = useState(false)
  const [calcA, setCalcA] = useState('10')
  const [calcB, setCalcB] = useState('5')
  const [calcOperation, setCalcOperation] = useState('add')
  
  const [users, setUsers] = useState<User[]>([])
  const [usersLoading, setUsersLoading] = useState(false)
  const [userFilter, setUserFilter] = useState('')
  
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' })
  const [createUserLoading, setCreateUserLoading] = useState(false)

  const fetchTime = async () => {
    setTimeLoading(true)
    try {
      const response = await fetch('/api/time')
      const data = await response.json()
      setTimeData(data)
    } catch (error) {
      console.error('Error fetching time:', error)
    } finally {
      setTimeLoading(false)
    }
  }

  const performCalculation = async () => {
    setCalcLoading(true)
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          a: parseFloat(calcA),
          b: parseFloat(calcB),
          operation: calcOperation
        })
      })
      const data = await response.json()
      setCalcResult(data)
    } catch (error) {
      console.error('Error performing calculation:', error)
    } finally {
      setCalcLoading(false)
    }
  }

  const fetchUsers = async () => {
    setUsersLoading(true)
    try {
      const url = userFilter ? `/api/users?role=${userFilter}` : '/api/users'
      const response = await fetch(url)
      const data: UsersResponse = await response.json()
      setUsers(data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setUsersLoading(false)
    }
  }

  const createUser = async () => {
    setCreateUserLoading(true)
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      })
      
      if (response.ok) {
        setNewUser({ name: '', email: '', role: '' })
        fetchUsers() // Refresh the user list
      }
    } catch (error) {
      console.error('Error creating user:', error)
    } finally {
      setCreateUserLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">API Routes Demo</h1>
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">What are API Routes?</h2>
            <p className="text-gray-600 mb-6">
              Next.js API routes allow you to create backend endpoints within your Next.js application. 
              These routes can handle HTTP requests (GET, POST, PUT, DELETE) and return JSON responses.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Benefits:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• <strong>Full-stack</strong> - Frontend and backend in one project</li>
                  <li>• <strong>Serverless</strong> - Automatic scaling and deployment</li>
                  <li>• <strong>TypeScript</strong> - Type safety for API endpoints</li>
                  <li>• <strong>Easy deployment</strong> - Deploy with your app</li>
                </ul>
              </div>
              <div>
                <CodeBlock
                  code={`// src/app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from API!' 
  })
}`}
                  language="typescript"
                  title="Simple API Route"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Time API Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Time API Demo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Current Time"
              description="Fetch the current time from our API endpoint"
              icon="⏰"
            >
              <div className="space-y-4">
                <Button 
                  onClick={fetchTime} 
                  disabled={timeLoading}
                >
                  {timeLoading ? 'Loading...' : 'Get Current Time'}
                </Button>
                
                {timeData && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Time Data:</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Local:</strong> {timeData.local}</p>
                      <p><strong>UTC:</strong> {timeData.utc}</p>
                      <p><strong>ISO:</strong> {timeData.iso}</p>
                      <p><strong>Timezone:</strong> {timeData.timezone}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            <Card
              title="API Code"
              description="How the time API endpoint is implemented"
              icon="💻"
            >
              <CodeBlock
                code={`// src/app/api/time/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()
  
  return NextResponse.json({
    timestamp: now.getTime(),
    iso: now.toISOString(),
    local: now.toLocaleString(),
    utc: now.toUTCString(),
    date: now.toDateString(),
    time: now.toTimeString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  })
}`}
                language="typescript"
                title="Time API Route"
              />
            </Card>
          </div>
        </section>

        {/* Calculator API Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Calculator API Demo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Simple Calculator"
              description="Perform calculations using our POST API endpoint"
              icon="🔢"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Number A</label>
                    <input
                      type="number"
                      value={calcA}
                      onChange={(e) => setCalcA(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Number B</label>
                    <input
                      type="number"
                      value={calcB}
                      onChange={(e) => setCalcB(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Operation</label>
                  <select
                    value={calcOperation}
                    onChange={(e) => setCalcOperation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="add">Add (+)</option>
                    <option value="subtract">Subtract (-)</option>
                    <option value="multiply">Multiply (×)</option>
                    <option value="divide">Divide (÷)</option>
                  </select>
                </div>
                
                <Button 
                  onClick={performCalculation} 
                  disabled={calcLoading}
                >
                  {calcLoading ? 'Calculating...' : 'Calculate'}
                </Button>
                
                {calcResult && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Result:</h4>
                    {calcResult.error ? (
                      <p className="text-red-600">{calcResult.error}</p>
                    ) : (
                      <p className="text-lg font-mono">{calcResult.calculation}</p>
                    )}
                  </div>
                )}
              </div>
            </Card>
            
            <Card
              title="Calculator API Code"
              description="POST endpoint that handles calculations"
              icon="⚙️"
            >
              <CodeBlock
                code={`export async function POST(request: NextRequest) {
  const { a, b, operation } = await request.json()
  
  // Validate input
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NextResponse.json(
      { error: 'Both a and b must be numbers' },
      { status: 400 }
    )
  }
  
  let result: number
  
  switch (operation) {
    case 'add':
      result = a + b
      break
    case 'subtract':
      result = a - b
      break
    // ... other operations
  }
  
  return NextResponse.json({
    a, b, operation, result,
    calculation: \`\${a} \${operation} \${b} = \${result}\`
  })
}`}
                language="typescript"
                title="Calculator API Route"
              />
            </Card>
          </div>
        </section>

        {/* Users API Demo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Users API Demo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="User Management"
              description="Fetch and create users with our API"
              icon="👥"
            >
              <div className="space-y-4">
                <div className="flex gap-2">
                  <select
                    value={userFilter}
                    onChange={(e) => setUserFilter(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Users</option>
                    <option value="Developer">Developers</option>
                    <option value="Designer">Designers</option>
                    <option value="Manager">Managers</option>
                  </select>
                  <Button 
                    onClick={fetchUsers} 
                    disabled={usersLoading}
                  >
                    {usersLoading ? 'Loading...' : 'Fetch Users'}
                  </Button>
                </div>
                
                {users.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto">
                    <h4 className="font-semibold mb-2">Users ({users.length}):</h4>
                    <div className="space-y-2">
                      {users.map(user => (
                        <div key={user.id} className="bg-white p-2 rounded border">
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-sm text-blue-600">{user.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            <Card
              title="Create New User"
              description="Add a new user via POST request"
              icon="➕"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    <option value="QA Engineer">QA Engineer</option>
                  </select>
                </div>
                
                <Button 
                  onClick={createUser} 
                  disabled={createUserLoading || !newUser.name || !newUser.email || !newUser.role}
                >
                  {createUserLoading ? 'Creating...' : 'Create User'}
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* API Routes Summary */}
        <section className="mb-12">
          <Card
            title="API Routes Summary"
            description="Overview of all available endpoints"
            icon="📋"
          >
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">GET /api/time</h4>
                <p className="text-sm text-green-600">Returns current time in multiple formats</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">POST /api/calculate</h4>
                <p className="text-sm text-blue-600">Performs mathematical operations</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800">GET/POST /api/users</h4>
                <p className="text-sm text-purple-600">Manages user data with filtering</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
} 