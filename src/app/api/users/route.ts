import { NextRequest, NextResponse } from 'next/server'

// Sample user data
const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Developer' },
  { id: 5, name: 'Eve Adams', email: 'eve@example.com', role: 'QA Engineer' }
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const role = searchParams.get('role')
  
  if (role) {
    const filteredUsers = users.filter(user => 
      user.role.toLowerCase() === role.toLowerCase()
    )
    return NextResponse.json({
      users: filteredUsers,
      total: filteredUsers.length,
      filtered: true,
      filter: role
    })
  }
  
  return NextResponse.json({
    users,
    total: users.length,
    filtered: false
  })
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, role } = await request.json()
    
    // Validate input
    if (!name || !email || !role) {
      return NextResponse.json(
        { error: 'Name, email, and role are required' },
        { status: 400 }
      )
    }
    
    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      role
    }
    
    // In a real app, you would save to a database
    users.push(newUser)
    
    return NextResponse.json({
      message: 'User created successfully',
      user: newUser
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    )
  }
} 