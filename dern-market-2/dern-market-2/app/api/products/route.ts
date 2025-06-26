import { NextResponse } from "next/server"

// Mock data - haqiqiy loyihada MongoDB bilan ishlash
const products = [
  {
    id: 1,
    name: "Smartfon Samsung Galaxy S24",
    price: 12000000,
    category: "Elektronika",
    stock: 15,
    description: "Eng so'nggi Samsung smartfoni",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Noutbuk Lenovo ThinkPad",
    price: 18000000,
    category: "Kompyuter",
    stock: 8,
    description: "Professional ishlar uchun noutbuk",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Kiyim - Ko'ylak",
    price: 250000,
    category: "Kiyim",
    stock: 25,
    description: "Yuqori sifatli paxta ko'ylak",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export async function GET() {
  try {
    // Haqiqiy loyihada MongoDB'dan ma'lumotlar olinadi
    return NextResponse.json({
      success: true,
      data: products,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Mahsulotlarni olishda xatolik" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validatsiya
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json({ success: false, error: "Majburiy maydonlar to'ldirilmagan" }, { status: 400 })
    }

    // Yangi mahsulot yaratish (haqiqiy loyihada MongoDB'ga saqlash)
    const newProduct = {
      id: products.length + 1,
      ...body,
      createdAt: new Date().toISOString(),
    }

    products.push(newProduct)

    return NextResponse.json(
      {
        success: true,
        data: newProduct,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: "Mahsulot qo'shishda xatolik" }, { status: 500 })
  }
}
