import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Shield, Mail, Lock } from "lucide-react"
import Link from "next/link"

const demoAccounts = [
  {
    role: "admin",
    email: "admin@dern-market.uz",
    password: "admin123",
    name: "Admin User",
    description: "To'liq admin huquqlari bilan",
    features: ["Mahsulot boshqaruvi", "Buyurtma nazorati", "Hisobotlar", "Foydalanuvchi boshqaruvi"],
    icon: Shield,
    color: "bg-red-100 text-red-800",
  },
  {
    role: "customer",
    email: "customer@example.com",
    password: "customer123",
    name: "Mijoz",
    description: "Oddiy mijoz huquqlari bilan",
    features: ["Mahsulot ko'rish", "Buyurtma berish", "Profil boshqaruvi", "Buyurtma tarixi"],
    icon: User,
    color: "bg-blue-100 text-blue-800",
  },
  {
    role: "admin",
    email: "demo@admin.com",
    password: "demo123",
    name: "Demo Admin",
    description: "Demo admin hisobi",
    features: ["Barcha admin funksiyalar", "Test ma'lumotlari", "Hisobotlar", "Dashboard"],
    icon: Shield,
    color: "bg-purple-100 text-purple-800",
  },
]

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded"></div>
            <span className="text-xl font-bold">Dern-Market</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Kirish</Button>
            </Link>
            <Link href="/register">
              <Button>Ro'yxatdan o'tish</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Demo hisoblar</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dern-Market platformasini sinab ko'rish uchun quyidagi demo hisoblardan foydalaning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demoAccounts.map((account, index) => {
            const IconComponent = account.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8 text-gray-600" />
                    <Badge className={account.color}>{account.role}</Badge>
                  </div>
                  <CardTitle className="text-xl">{account.name}</CardTitle>
                  <CardDescription>{account.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">{account.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Lock className="h-4 w-4 text-gray-500" />
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">{account.password}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Imkoniyatlar:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/login" className="block">
                    <Button className="w-full">
                      {account.role === "admin" ? "Admin sifatida kirish" : "Mijoz sifatida kirish"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Qanday foydalanish kerak?</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">1. Demo hisob tanlang</h4>
                  <p className="text-sm text-gray-600">
                    Yuqoridagi hisoblardan birini tanlang va login ma'lumotlarini nusxalang
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Kirish sahifasiga o'ting</h4>
                  <p className="text-sm text-gray-600">"Kirish" tugmasini bosing va demo ma'lumotlarni kiriting</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3. Platformani sinab ko'ring</h4>
                  <p className="text-sm text-gray-600">Admin yoki mijoz sifatida barcha funksiyalarni sinab ko'ring</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">4. Yangi hisob yarating</h4>
                  <p className="text-sm text-gray-600">
                    Kerak bo'lsa, o'zingizning yangi hisobingizni yaratishingiz mumkin
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
