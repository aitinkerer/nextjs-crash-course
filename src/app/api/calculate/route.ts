import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
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
      case 'multiply':
        result = a * b
        break
      case 'divide':
        if (b === 0) {
          return NextResponse.json(
            { error: 'Division by zero is not allowed' },
            { status: 400 }
          )
        }
        result = a / b
        break
      default:
        return NextResponse.json(
          { error: 'Invalid operation. Use: add, subtract, multiply, or divide' },
          { status: 400 }
        )
    }
    
    return NextResponse.json({
      a,
      b,
      operation,
      result,
      calculation: `${a} ${operation} ${b} = ${result}`
    })
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    )
  }
} 