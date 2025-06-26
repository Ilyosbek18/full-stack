import { NextResponse } from "next/server"

// Mock users array - yangi foydalanuvchilar bu yerga qo'shiladi
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
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, password, role } = body

    console.log("Register attempt:", { firstName, lastName, email, role }) // Debug uchun

    // Validatsiya
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ success: false, error: "Barcha majburiy maydonlarni to'ldiring" }, { status: 400 })
    }

    // Email mavjudligini tekshirish
    const existingUser = users.find((u) => u.email === email)
    if (existingUser) {
      return NextResponse.json({ success: false, error: "Bu email allaqachon ro'yxatdan o'tgan" }, { status: 409 })
    }

    // Yangi foydalanuvchi yaratish
    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      password, // Haqiqiy loyihada hash qilinadi
      role: role || "customer",
      createdAt: new Date().toISOString(),
    }

    users.push(newUser)

    // Simple token yaratish
    const token = `token_${newUser.id}_${Date.now()}`

    // Parolni response'dan olib tashlash
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json(
      {
        success: true,
        data: {
          user: userWithoutPassword,
          token,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json({ success: false, error: "Server xatosi" }, { status: 500 })
  }
}
