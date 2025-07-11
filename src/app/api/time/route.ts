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
} 