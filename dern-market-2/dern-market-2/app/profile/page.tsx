"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Edit, Save, X } from "lucide-react"
import { useAuth } from "../contexts/auth-context"
import { Header } from "../components/header"
import Link from "next/link"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  })

  const handleSave = async () => {
    try {
      // Here you would make an API call to update user data
      console.log("Updating user data:", formData)
      alert("Profil muvaffaqiyatli yangilandi!")
      setIsEditing(false)
    } catch (error) {
      alert("Profil yangilashda xatolik yuz berdi")
    }
  }

  const handleCancel = () => {
    setFormData({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    })
    setIsEditing(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Profilni ko'rish uchun tizimga kiring</h1>
            <Link href="/login">
              <Button>Kirish</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Mening profilim</h1>
            <Button variant="outline" onClick={logout}>
              Chiqish
            </Button>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profil ma'lumotlari</TabsTrigger>
              <TabsTrigger value="security">Xavfsizlik</TabsTrigger>
              <TabsTrigger value="preferences">Sozlamalar</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Shaxsiy ma'lumotlar</CardTitle>
                      <CardDescription>Profilingiz haqidagi asosiy ma'lumotlar</CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Tahrirlash
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button onClick={handleSave} size="sm">
                          <Save className="h-4 w-4 mr-2" />
                          Saqlash
                        </Button>
                        <Button variant="outline" onClick={handleCancel} size="sm">
                          <X className="h-4 w-4 mr-2" />
                          Bekor qilish
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-10 w-10 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{user.firstName + " " + user.lastName}</h3>
                      <p className="text-gray-600">{user.email}</p>
                      <Badge variant={user.role === "admin" ? "destructive" : "default"} className="mt-1">
                        {user.role === "admin" ? "Admin" : "Mijoz"}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ism</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Familiya</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Rol</Label>
                      <Input value={user.role === "admin" ? "Admin" : "Mijoz"} disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistika</CardTitle>
                  <CardDescription>Hisobingiz bo'yicha statistik ma'lumotlar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">5</div>
                      <p className="text-sm text-gray-600">Jami buyurtmalar</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">3</div>
                      <p className="text-sm text-gray-600">Yetkazilgan</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">2.5M</div>
                      <p className="text-sm text-gray-600">Jami xarid (so'm)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Parol o'zgartirish</CardTitle>
                  <CardDescription>Hisobingiz xavfsizligini ta'minlash uchun parolni yangilang</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Joriy parol</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Yangi parol</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Yangi parolni tasdiqlang</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Parolni yangilash</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hisobni o'chirish</CardTitle>
                  <CardDescription>Bu amalni qaytarib bo'lmaydi. Ehtiyot bo'ling!</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive">Hisobni o'chirish</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bildirishnomalar</CardTitle>
                  <CardDescription>Email bildirishnomalarini boshqaring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Buyurtma yangilanishlari</p>
                      <p className="text-sm text-gray-600">Buyurtma holati o'zgarganda xabar olish</p>
                    </div>
                    <input type="checkbox" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing xabarlari</p>
                      <p className="text-sm text-gray-600">Yangi mahsulotlar va chegirmalar haqida</p>
                    </div>
                    <input type="checkbox" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
