import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

const faqData = [
  {
    question: "Qanday qilib ro'yxatdan o'tishim mumkin?",
    answer:
      "Ro'yxatdan o'tish uchun 'Ro'yxatdan o'tish' tugmasini bosing va kerakli ma'lumotlarni kiriting. Email tasdiqlashdan so'ng hisobingiz faollashadi.",
  },
  {
    question: "To'lov usullari qanday?",
    answer:
      "Biz onlayn to'lovlar (Stripe orqali) va naqd to'lash (yetkazib berishda) usullarini qo'llab-quvvatlaymiz. Barcha to'lovlar xavfsiz va shifrlangan.",
  },
  {
    question: "Buyurtmani qanday bekor qilishim mumkin?",
    answer:
      "Buyurtmani 'Yangi' holatida bo'lganda bekor qilish mumkin. Buning uchun admin bilan bog'laning yoki shaxsiy hisobingizdan foydalaning.",
  },
  {
    question: "Yetkazib berish qancha vaqt oladi?",
    answer: "Odatda 2-3 ish kuni ichida yetkazib beramiz. Toshkent shahrida 1 kun ichida yetkazib berish mumkin.",
  },
  {
    question: "Mahsulotni qaytarish mumkinmi?",
    answer: "Ha, 14 kun ichida mahsulotni qaytarish mumkin, agar u ishlatilmagan va asl qadoqda bo'lsa.",
  },
  {
    question: "Admin paneli qanday ishlaydi?",
    answer:
      "Admin paneli orqali mahsulotlarni boshqarish, buyurtmalarni kuzatish va sotuvlar hisobotlarini ko'rish mumkin. Faqat admin huquqiga ega foydalanuvchilar kirishi mumkin.",
  },
  {
    question: "Parolimni unutsam nima qilishim kerak?",
    answer:
      "Kirish sahifasida 'Parolni unutdingizmi?' havolasini bosing va emailingizga kelgan ko'rsatmalarga amal qiling.",
  },
  {
    question: "Mobil qurilmalarda ishlaydi mi?",
    answer:
      "Ha, saytimiz barcha qurilmalarda (telefon, planshet, kompyuter) to'liq ishlaydi va responsiv dizaynga ega.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded"></div>
            <span className="text-xl font-bold">Dern-Market</span>
          </Link>
          <Link href="/">
            <Button variant="outline">Bosh sahifa</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tez-tez so'raladigan savollar</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dern-Market platformasi haqida eng ko'p so'raladigan savollar va javoblar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Savollar va javoblar</CardTitle>
                <CardDescription>Quyidagi ro'yxatdan kerakli savolingizni toping</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Yordam kerakmi?</CardTitle>
                <CardDescription>Javob topa olmadingizmi? Biz bilan bog'laning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm text-gray-600">+998 90 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">support@dern-market.uz</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Online chat</p>
                    <p className="text-sm text-gray-600">24/7 yordam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Texnik ma'lumotlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-sm">Frontend</p>
                  <p className="text-sm text-gray-600">React + Tailwind CSS</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Backend</p>
                  <p className="text-sm text-gray-600">Node.js + Express.js</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Ma'lumotlar bazasi</p>
                  <p className="text-sm text-gray-600">MongoDB</p>
                </div>
                <div>
                  <p className="font-medium text-sm">Xavfsizlik</p>
                  <p className="text-sm text-gray-600">JWT + HTTPS + Stripe</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
