"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Eye, Calendar, CreditCard } from "lucide-react"
import { useAuth } from "../contexts/auth-context"
import { Header } from "../components/header"
import Link from "next/link"

interface Order {
  id: number
  customerName: string
  items: any[]
  total: number
  status: string
  paymentMethod: string
  createdAt: string
}

export default function OrdersPage() {
  const { user } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchOrders()
    }
  }, [user])

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders")
      const data = await response.json()
      if (data.success) {
        // Filter orders for current user (in real app, this would be done on server)
        const userOrders = data.data.filter((order: Order) => order.customerName.includes(user?.firstName || ""))
        setOrders(userOrders)
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price) + " so'm"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Yangi":
        return "bg-blue-100 text-blue-800"
      case "Jarayonda":
        return "bg-yellow-100 text-yellow-800"
      case "Yetkazildi":
        return "bg-green-100 text-green-800"
      case "Bekor qilindi":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Buyurtmalarni ko'rish uchun tizimga kiring</h1>
            <Link href="/login">
              <Button>Kirish</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p>Buyurtmalar yuklanmoqda...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mening buyurtmalarim</h1>
          <Link href="/products">
            <Button>Yangi buyurtma berish</Button>
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Hozircha buyurtmalar yo'q</h2>
            <p className="text-gray-600 mb-6">Birinchi buyurtmangizni bering!</p>
            <Link href="/products">
              <Button>Mahsulotlarni ko'rish</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Buyurtma #{order.id}
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(order.createdAt).toLocaleDateString("uz-UZ")}
                        </span>
                        <span className="flex items-center gap-1">
                          <CreditCard className="h-4 w-4" />
                          {order.paymentMethod === "online" ? "Onlayn to'lov" : "Naqd to'lov"}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{formatPrice(order.total)}</p>
                      <p className="text-sm text-gray-500">{order.items.length} ta mahsulot</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image || "/placeholder.svg?height=40&width=40"}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">Miqdor: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Batafsil ko'rish
                    </Button>
                    {order.status === "Yangi" && (
                      <Button variant="outline" size="sm">
                        Bekor qilish
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
