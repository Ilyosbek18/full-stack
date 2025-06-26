import { NextResponse } from "next/server"

// Mock orders data
const orders = [
  {
    id: 1,
    userId: 2,
    customerName: "Ali Valiyev",
    items: [{ productId: 1, name: "Samsung Galaxy S24", price: 12000000, quantity: 1 }],
    total: 12000000,
    status: "Yangi",
    paymentMethod: "online",
    createdAt: "2025-06-25T10:00:00Z",
  },
  {
    id: 2,
    userId: 3,
    customerName: "Malika Karimova",
    items: [{ productId: 3, name: "Ko'ylak", price: 250000, quantity: 2 }],
    total: 500000,
    status: "Jarayonda",
    paymentMethod: "cash",
    createdAt: "2025-06-24T15:30:00Z",
  },
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: orders,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Buyurtmalarni olishda xatolik" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validatsiya
    if (!body.items || !body.total || !body.customerName) {
      return NextResponse.json({ success: false, error: "Majburiy maydonlar to'ldirilmagan" }, { status: 400 })
    }

    // Yangi buyurtma yaratish
    const newOrder = {
      id: orders.length + 1,
      ...body,
      status: "Yangi",
      createdAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    // Zaxira yangilash (haqiqiy loyihada MongoDB transaction)
    // Bu yerda mahsulot zaxirasi kamaytiriladi

    return NextResponse.json(
      {
        success: true,
        data: newOrder,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Buyurtma yaratishda xatolik" }, { status: 500 })
  }
}
