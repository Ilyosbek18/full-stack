import { NextResponse } from "next/server"

// Mock users data - demo uchun
const users = [
  {
    id: 1,
    email: "admin@dern-market.uz",
    password: "admin123",
    role: "admin",
    firstName: "Admin",
    lastName: "User",
  },
  {
    id: 2,
    email: "customer@example.com",
    password: "customer123",
    role: "customer",
    firstName: "Mijoz",
    lastName: "Foydalanuvchi",
  },
  {
    id: 3,
    email: "demo@admin.com",
    password: "demo123",
    role: "admin",
    firstName: "Demo",
    lastName: "Admin",
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log("Login attempt:", { email, password }) // Debug uchun

    // Validatsiya
    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email va parol majburiy" }, { status: 400 })
    }

    // Foydalanuvchini topish
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ success: false, error: "Noto'g'ri email yoki parol" }, { status: 401 })
    }

    // Simple token yaratish (haqiqiy loyihada JWT ishlatiladi)
    const token = `token_${user.id}_${Date.now()}`

    // Parolni response'dan olib tashlash
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      success: true,
      data: {
        user: userWithoutPassword,
        token,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
