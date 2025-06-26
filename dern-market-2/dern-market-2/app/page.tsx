import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Users, TrendingUp, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dern-Market</h1>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Mahsulotlar
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              Biz haqimizda
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Aloqa
            </Link>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/demo" className="hidden sm:block">
              <Button variant="outline" size="sm">
                Demo
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                Kirish
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="text-xs sm:text-sm">
                Ro'yxat
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Dern-Market bilan <span className="text-blue-600">raqamli savdo</span>ni boshlang
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Zamonaviy to'liq stek texnologiyalar asosida yaratilgan e-commerce platforma. Foydalanuvchilar uchun qulay
            interfeys va adminlar uchun kuchli boshqaruv tizimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/products">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                Mahsulotlarni ko'rish
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
              >
                Demo hisoblar
              </Button>
            </Link>
            <Link href="/admin" className="hidden sm:block">
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
                Admin paneli
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Platformaning asosiy xususiyatlari
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Foydalanuvchi boshqaruvi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Xavfsiz ro'yxatdan o'tish, JWT autentifikatsiyasi va shaxsiy hisob boshqaruvi
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingBag className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Mahsulot katalogi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Qidirish, saralash, kategoriyalar bo'yicha filtrlash va savatcha funksiyasi
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Admin paneli</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mahsulot boshqaruvi, buyurtma nazorati, sotuvlar hisobotlari va grafiklar
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Xavfsiz to'lovlar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Stripe API orqali onlayn to'lovlar va naqd to'lash opsiyasi</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Texnologik stek</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Frontend</h4>
              <p className="text-gray-600">React + Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2 text-green-600">Backend</h4>
              <p className="text-gray-600">Node.js + Express.js</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2 text-purple-600">Ma'lumotlar bazasi</h4>
              <p className="text-gray-600">MongoDB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-lg mb-2 text-orange-600">Joylashtirish</h4>
              <p className="text-gray-600">Vercel + Railway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6" />
                <span className="text-xl font-bold">Dern-Market</span>
              </div>
              <p className="text-gray-400">
                BTEC Unit 25 loyihasi doirasida ishlab chiqilgan zamonaviy e-commerce platforma
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sahifalar</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Mahsulotlar
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Aloqa
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hisob</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    Kirish
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white transition-colors">
                    Ro'yxatdan o'tish
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white transition-colors">
                    Profil
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Yordam</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    Qo'llab-quvvatlash
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Shartlar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dern-Market. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
