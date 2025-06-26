"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Filter } from "lucide-react"
import { useCart } from "../contexts/cart-context"
import { Header } from "../components/header"

// Mock data - haqiqiy loyihada bu ma'lumotlar API'dan keladi
const products = [
  {
    id: 1,
    name: "Smartfon Samsung Galaxy S24",
    price: 12000000,
    category: "Elektronika",
    image: "/placeholder.svg?height=200&width=200",
    stock: 15,
    description: "Eng so'nggi Samsung smartfoni",
  },
  {
    id: 2,
    name: "Noutbuk Lenovo ThinkPad",
    price: 18000000,
    category: "Kompyuter",
    image: "/placeholder.svg?height=200&width=200",
    stock: 8,
    description: "Professional ishlar uchun noutbuk",
  },
  {
    id: 3,
    name: "Kiyim - Ko'ylak",
    price: 250000,
    category: "Kiyim",
    image: "/placeholder.svg?height=200&width=200",
    stock: 25,
    description: "Yuqori sifatli paxta ko'ylak",
  },
  {
    id: 4,
    name: "Kitob - Dasturlash asoslari",
    price: 150000,
    category: "Kitob",
    image: "/placeholder.svg?height=200&width=200",
    stock: 12,
    description: "Dasturlashni o'rganish uchun kitob",
  },
  {
    id: 5,
    name: "Quloqchin Sony WH-1000XM5",
    price: 4500000,
    category: "Elektronika",
    image: "/placeholder.svg?height=200&width=200",
    stock: 6,
    description: "Shovqinni bekor qiluvchi quloqchin",
  },
  {
    id: 6,
    name: "Soat Apple Watch Series 9",
    price: 6000000,
    category: "Elektronika",
    image: "/placeholder.svg?height=200&width=200",
    stock: 10,
    description: "Aqlli soat eng so'nggi versiyasi",
  },
]

const categories = ["Barchasi", "Elektronika", "Kompyuter", "Kiyim", "Kitob"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Barchasi")
  const [sortBy, setSortBy] = useState("name")
  const { addToCart } = useCart()

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "Barchasi" || product.category === selectedCategory),
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price
      if (sortBy === "name") return a.name.localeCompare(b.name)
      return 0
    })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price) + " so'm"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mahsulotlar katalogi</h1>

        {/* Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Mahsulot qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Kategoriya tanlang" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Saralash" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nom bo'yicha</SelectItem>
                <SelectItem value="price">Narx bo'yicha</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="flex items-center justify-center">
              <Filter className="h-4 w-4 mr-2" />
              Filtrlar
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <span className="text-xs text-gray-500">Zaxira: {product.stock}</span>
                </div>
                <CardTitle className="text-sm sm:text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                <CardDescription className="mb-4 text-xs sm:text-sm line-clamp-2">
                  {product.description}
                </CardDescription>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                  <Button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm">Qo'shish</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Hech qanday mahsulot topilmadi</p>
          </div>
        )}
      </div>
    </div>
  )
}
