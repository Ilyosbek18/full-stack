import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Smartphone, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">WebDev Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Xususiyatlar
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                Xizmatlar
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                Biz haqimizda
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            🚀 Yangi texnologiyalar bilan
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kelajak uchun
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}
              Web Yechimlari
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Zamonaviy full-stack texnologiyalar yordamida biznesingiz uchun mukammal web ilovalar yaratamiz. React,
            Next.js, Node.js va boshqa ilg'or texnologiyalar bilan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Boshlash <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Loyihalarni ko'rish
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bizning Xususiyatlarimiz</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Zamonaviy web development sohasidagi eng so'nggi texnologiyalar va yondashuvlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Full-Stack Development</CardTitle>
                <CardDescription className="text-gray-300">
                  Frontend va Backend texnologiyalarining to'liq integratsiyasi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                    TypeScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Database className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Ma'lumotlar Bazasi</CardTitle>
                <CardDescription className="text-gray-300">
                  Zamonaviy ma'lumotlar bazasi yechimlari va optimizatsiya
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Prisma
                  </Badge>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                    Redis
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Responsive Design</CardTitle>
                <CardDescription className="text-gray-300">
                  Barcha qurilmalarda mukammal ko'rinish va ishlash
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    Mobile First
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    PWA
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Yuqori Tezlik</CardTitle>
                <CardDescription className="text-gray-300">
                  Optimizatsiya va tez yuklanish uchun zamonaviy yondashuvlar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                    SSR
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                    Caching
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    CDN
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-pink-400 mb-4" />
                <CardTitle className="text-white">Foydalanuvchi Tajribasi</CardTitle>
                <CardDescription className="text-gray-300">
                  Intuitiv va foydalanuvchi-do'st interfeys dizayni
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">
                    UI/UX
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300">
                    Accessibility
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Animation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <Code className="h-12 w-12 text-indigo-400 mb-4" />
                <CardTitle className="text-white">Clean Code</CardTitle>
                <CardDescription className="text-gray-300">
                  Toza, o'qilishi oson va kengaytirilishi mumkin kod
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300">
                    ESLint
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Prettier
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    Testing
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bizning Xizmatlarimiz</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Biznesingizning barcha ehtiyojlarini qondirish uchun keng xizmatlar spektri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-200 text-xl">Web Ilovalar Yaratish</CardTitle>
                <CardDescription className="text-purple-300">
                  Zamonaviy web ilovalar va saytlar yaratish xizmati
                </CardDescription>
              </CardHeader>
              <CardContent className="text-purple-100 space-y-4">
                <ul className="space-y-2">
                  <li>• E-commerce platformalar</li>
                  <li>• Korporativ saytlar</li>
                  <li>• SaaS ilovalar</li>
                  <li>• Portfolio saytlar</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Batafsil ma'lumot
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-200 text-xl">API Development</CardTitle>
                <CardDescription className="text-blue-300">
                  RESTful va GraphQL API'lar yaratish va integratsiya
                </CardDescription>
              </CardHeader>
              <CardContent className="text-blue-100 space-y-4">
                <ul className="space-y-2">
                  <li>• REST API yaratish</li>
                  <li>• GraphQL server</li>
                  <li>• Uchinchi tomon integratsiyalar</li>
                  <li>• API dokumentatsiya</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Batafsil ma'lumot
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-200 text-xl">Ma'lumotlar Bazasi Dizayni</CardTitle>
                <CardDescription className="text-green-300">
                  Samarali va masshtablanadigan ma'lumotlar bazasi yechimlari
                </CardDescription>
              </CardHeader>
              <CardContent className="text-green-100 space-y-4">
                <ul className="space-y-2">
                  <li>• Ma'lumotlar bazasi arxitekturasi</li>
                  <li>• Optimizatsiya va tuning</li>
                  <li>• Migration va backup</li>
                  <li>• Xavfsizlik sozlamalari</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                  Batafsil ma'lumot
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-200 text-xl">Texnik Qo'llab-quvvatlash</CardTitle>
                <CardDescription className="text-orange-300">
                  24/7 texnik yordam va loyihalarni qo'llab-quvvatlash
                </CardDescription>
              </CardHeader>
              <CardContent className="text-orange-100 space-y-4">
                <ul className="space-y-2">
                  <li>• Bug fixing va debugging</li>
                  <li>• Performance monitoring</li>
                  <li>• Security updates</li>
                  <li>• Feature enhancements</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                  Batafsil ma'lumot
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Biz Haqimizda</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            WebDev Pro - bu zamonaviy web texnologiyalar sohasida ixtisoslashgan professional jamoa. Biz
            mijozlarimizning biznes ehtiyojlarini chuqur tushunib, ularga eng yaxshi texnik yechimlarni taklif etamiz.
          </p>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Bizning maqsadimiz - har bir loyihani yuqori sifat va zamonaviy standartlar asosida amalga oshirish. React,
            Next.js, Node.js, TypeScript va boshqa ilg'or texnologiyalar yordamida biz sizning g'oyalaringizni hayotga
            tatbiq etamiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Loyiha boshlash
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Bog'lanish
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">WebDev Pro</span>
              </div>
              <p className="text-gray-300 mb-4">Zamonaviy web texnologiyalar bilan biznesingizni rivojlantiring</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Xizmatlar</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Web Development</li>
                <li>API Development</li>
                <li>Database Design</li>
                <li>Technical Support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Bog'lanish</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: rahimovilyosbek63@gmail.com</li>
                <li>Tel: +998906402806</li>
                <li>Manzil: Toshkent, O'zbekiston</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 WebDev Pro. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
