"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  PieChart,
  Eye,
  Settings,
  Search,
} from "lucide-react"
import { Header } from "../components/header"

// Mock data
const stats = {
  totalProducts: 156,
  totalOrders: 89,
  totalUsers: 234,
  totalRevenue: 45600000,
}

const recentOrders = [
  { id: 1, customer: "Ali Valiyev", total: 1200000, status: "Yangi", date: "2025-06-25" },
  { id: 2, customer: "Malika Karimova", total: 850000, status: "Jarayonda", date: "2025-06-24" },
  { id: 3, customer: "Bobur Toshmatov", total: 2100000, status: "Yetkazildi", date: "2025-06-23" },
]

const products = [
  { id: 1, name: "Samsung Galaxy S24", price: 12000000, stock: 15, category: "Elektronika", status: "active" },
  { id: 2, name: "Lenovo ThinkPad", price: 18000000, stock: 8, category: "Kompyuter", status: "active" },
  { id: 3, name: "Ko'ylak", price: 250000, stock: 25, category: "Kiyim", status: "active" },
  { id: 4, name: "iPhone 15 Pro", price: 15000000, stock: 0, category: "Elektronika", status: "inactive" },
  { id: 5, name: "Nike Air Max", price: 800000, stock: 12, category: "Kiyim", status: "active" },
]

const users = [
  { id: 1, name: "Ali Valiyev", email: "ali@example.com", role: "customer", status: "active", joinDate: "2025-01-15" },
  {
    id: 2,
    name: "Malika Karimova",
    email: "malika@example.com",
    role: "customer",
    status: "active",
    joinDate: "2025-02-10",
  },
  {
    id: 3,
    name: "Bobur Toshmatov",
    email: "bobur@example.com",
    role: "customer",
    status: "inactive",
    joinDate: "2025-03-05",
  },
  {
    id: 4,
    name: "Dilnoza Rahimova",
    email: "dilnoza@example.com",
    role: "admin",
    status: "active",
    joinDate: "2024-12-01",
  },
]

export default function AdminPage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
  })

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

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
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleAddProduct = () => {
    console.log("Yangi mahsulot qo'shildi:", newProduct)
    // Bu yerda API ga so'rov yuboriladi
    setNewProduct({ name: "", price: "", stock: "", category: "", description: "" })
  }

  const handleEditProduct = (product) => {
    setSelectedProduct(product)
    setIsEditModalOpen(true)
  }

  const handleDeleteProduct = (productId) => {
    if (confirm("Mahsulotni o'chirishni tasdiqlaysizmi?")) {
      console.log("Mahsulot o'chirildi:", productId)
      // Bu yerda API ga DELETE so'rov yuboriladi
    }
  }

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    console.log("Buyurtma holati yangilandi:", orderId, newStatus)
    // Bu yerda API ga PUT so'rov yuboriladi
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami mahsulotlar</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">+12% o'tgan oydan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami buyurtmalar</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">+8% o'tgan oydan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Foydalanuvchilar</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">+15% o'tgan oydan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami daromad</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatPrice(stats.totalRevenue)}</div>
              <p className="text-xs text-muted-foreground">+22% o'tgan oydan</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-1">
            <TabsTrigger value="dashboard" className="text-xs sm:text-sm">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="products" className="text-xs sm:text-sm">
              Mahsulotlar
            </TabsTrigger>
            <TabsTrigger value="orders" className="text-xs sm:text-sm">
              Buyurtmalar
            </TabsTrigger>
            <TabsTrigger value="users" className="text-xs sm:text-sm">
              Foydalanuvchilar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>So'nggi buyurtmalar</CardTitle>
                  <CardDescription>Eng so'nggi buyurtmalar ro'yxati</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatPrice(order.total)}</p>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sales Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Sotuvlar grafigi</CardTitle>
                  <CardDescription>Oylik sotuvlar statistikasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Grafik bu yerda ko'rsatiladi</p>
                      <p className="text-sm text-gray-400">Chart.js integratsiyasi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Add Product Form - responsive qilish */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Yangi mahsulot qo'shish</CardTitle>
                  <CardDescription className="text-sm">Katalogga yangi mahsulot qo'shing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Mahsulot nomi
                    </Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      placeholder="Mahsulot nomini kiriting"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="price" className="text-sm font-medium">
                        Narxi (so'm)
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        placeholder="0"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="stock" className="text-sm font-medium">
                        Zaxira
                      </Label>
                      <Input
                        id="stock"
                        type="number"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                        placeholder="0"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-sm font-medium">
                      Kategoriya
                    </Label>
                    <Select
                      value={newProduct.category}
                      onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Kategoriya tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Elektronika">Elektronika</SelectItem>
                        <SelectItem value="Kompyuter">Kompyuter</SelectItem>
                        <SelectItem value="Kiyim">Kiyim</SelectItem>
                        <SelectItem value="Kitob">Kitob</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Tavsif
                    </Label>
                    <Textarea
                      id="description"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      placeholder="Mahsulot haqida qisqacha ma'lumot"
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <Button onClick={handleAddProduct} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Mahsulot qo'shish
                  </Button>
                </CardContent>
              </Card>

              {/* Products List - responsive qilish */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Mahsulotlar boshqaruvi</CardTitle>
                  <CardDescription className="text-sm">Katalogdagi barcha mahsulotlar</CardDescription>

                  {/* Search and Filter */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Mahsulot qidirish..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Kategoriya" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Barchasi</SelectItem>
                        <SelectItem value="Elektronika">Elektronika</SelectItem>
                        <SelectItem value="Kompyuter">Kompyuter</SelectItem>
                        <SelectItem value="Kiyim">Kiyim</SelectItem>
                        <SelectItem value="Kitob">Kitob</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium text-sm sm:text-base">{product.name}</p>
                            <Badge variant={product.status === "active" ? "default" : "secondary"} className="text-xs">
                              {product.status === "active" ? "Faol" : "Nofaol"}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500">{product.category}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <p className="text-sm font-medium">{formatPrice(product.price)}</p>
                            <p className="text-xs text-gray-500">Zaxira: {product.stock}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleEditProduct(product)}>
                            <Edit className="h-4 w-4" />
                            <span className="hidden sm:inline ml-1">Tahrirlash</span>
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline ml-1">O'chirish</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Buyurtmalar boshqaruvi</CardTitle>
                <CardDescription className="text-sm">Barcha buyurtmalarni ko'rish va boshqarish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-sm sm:text-base">Buyurtma #{order.id}</p>
                          <Badge className={getStatusColor(order.status)} variant="secondary">
                            {order.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <p>Mijoz: {order.customer}</p>
                          <p>Sana: {order.date}</p>
                          <p className="font-medium text-gray-900">{formatPrice(order.total)}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <Select
                          value={order.status}
                          onValueChange={(value) => handleUpdateOrderStatus(order.id, value)}
                        >
                          <SelectTrigger className="w-full sm:w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Yangi">Yangi</SelectItem>
                            <SelectItem value="Jarayonda">Jarayonda</SelectItem>
                            <SelectItem value="Yetkazildi">Yetkazildi</SelectItem>
                            <SelectItem value="Bekor qilindi">Bekor qilindi</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                          <Eye className="h-4 w-4 mr-1" />
                          Ko'rish
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sotuvlar hisoboti</CardTitle>
                  <CardDescription>Oylik sotuvlar tahlili</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Sotuvlar grafigi</p>
                      <p className="text-sm text-gray-400">Chart.js bilan interaktiv grafiklar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kategoriyalar bo'yicha</CardTitle>
                  <CardDescription>Mahsulot kategoriyalari tahlili</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Kategoriyalar diagrammasi</p>
                      <p className="text-sm text-gray-400">Donut chart ko'rinishida</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Foydalanuvchilar boshqaruvi</CardTitle>
                <CardDescription className="text-sm">Barcha foydalanuvchilarni ko'rish va boshqarish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm sm:text-base">{user.name}</p>
                          <Badge variant={user.role === "admin" ? "destructive" : "default"} className="text-xs">
                            {user.role === "admin" ? "Admin" : "Mijoz"}
                          </Badge>
                          <Badge variant={user.status === "active" ? "default" : "secondary"} className="text-xs">
                            {user.status === "active" ? "Faol" : "Nofaol"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-600">
                          <p>{user.email}</p>
                          <p>Qo'shilgan: {user.joinDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                          <span className="hidden sm:inline ml-1">Tahrirlash</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                          <span className="hidden sm:inline ml-1">Sozlamalar</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
