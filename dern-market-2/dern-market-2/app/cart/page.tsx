"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Minus, Plus, Trash2, ShoppingCart, CreditCard } from "lucide-react"
import { useCart } from "../contexts/cart-context"
import { useAuth } from "../contexts/auth-context"
import { Header } from "../components/header"
import Link from "next/link"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const [paymentMethod, setPaymentMethod] = useState("online")
  const [isProcessing, setIsProcessing] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price) + " so'm"
  }

  const handleCheckout = async () => {
    if (!user) {
      alert("Buyurtma berish uchun tizimga kiring!")
      return
    }

    if (items.length === 0) {
      alert("Savatcha bo'sh!")
      return
    }

    setIsProcessing(true)

    try {
      const orderData = {
        userId: user.id,
        customerName: `${user.firstName} ${user.lastName}`,
        items: items,
        total: getTotalPrice(),
        paymentMethod: paymentMethod,
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (result.success) {
        alert("Buyurtma muvaffaqiyatli berildi!")
        clearCart()
        window.location.href = "/orders"
      } else {
        alert("Buyurtma berishda xatolik: " + result.error)
      }
    } catch (error) {
      alert("Server bilan bog'lanishda xatolik")
    } finally {
      setIsProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Savatcha bo'sh</h1>
            <p className="text-gray-600 mb-6">Hozircha hech qanday mahsulot qo'shilmagan</p>
            <Link href="/products">
              <Button>Mahsulotlarni ko'rish</Button>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Savatcha</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src={item.image || "/placeholder.svg?height=80&width=80"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-blue-600 font-semibold">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                        className="w-16 text-center"
                        min="1"
                      />
                      <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                      <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Buyurtma xulosasi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Mahsulotlar soni:</span>
                  <span>{items.reduce((total, item) => total + item.quantity, 0)} ta</span>
                </div>
                <div className="flex justify-between">
                  <span>Jami summa:</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span>Yetkazib berish:</span>
                  <span>Bepul</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Jami to'lov:</span>
                  <span className="text-blue-600">{formatPrice(getTotalPrice())}</span>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">To'lov usuli:</label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Onlayn to'lov (Stripe)</SelectItem>
                      <SelectItem value="cash">Naqd to'lash (yetkazib berishda)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleCheckout} disabled={isProcessing} className="w-full" size="lg">
                  <CreditCard className="h-4 w-4 mr-2" />
                  {isProcessing ? "Buyurtma berilmoqda..." : "Buyurtma berish"}
                </Button>

                <Button variant="outline" onClick={clearCart} className="w-full">
                  Savatchani tozalash
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
