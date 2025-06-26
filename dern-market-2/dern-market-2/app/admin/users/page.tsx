"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Users, Search, Plus, Edit, Trash2, Shield, User, Mail, Calendar } from "lucide-react"
import Link from "next/link"

const users = [
  {
    id: 1,
    name: "Ali Valiyev",
    email: "ali@example.com",
    role: "customer",
    status: "active",
    joinDate: "2025-01-15",
    lastLogin: "2025-06-20",
    orders: 5,
  },
  {
    id: 2,
    name: "Malika Karimova",
    email: "malika@example.com",
    role: "customer",
    status: "active",
    joinDate: "2025-02-10",
    lastLogin: "2025-06-22",
    orders: 3,
  },
  {
    id: 3,
    name: "Bobur Toshmatov",
    email: "bobur@example.com",
    role: "customer",
    status: "inactive",
    joinDate: "2025-03-05",
    lastLogin: "2025-06-15",
    orders: 1,
  },
  {
    id: 4,
    name: "Dilnoza Rahimova",
    email: "dilnoza@example.com",
    role: "admin",
    status: "active",
    joinDate: "2024-12-01",
    lastLogin: "2025-06-25",
    orders: 0,
  },
  {
    id: 5,
    name: "Sardor Karimov",
    email: "sardor@example.com",
    role: "customer",
    status: "active",
    joinDate: "2025-04-12",
    lastLogin: "2025-06-24",
    orders: 8,
  },
]

export default function UsersManagePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  const handleEditUser = (user) => {
    setSelectedUser(user)
    setIsEditModalOpen(true)
  }

  const handleDeleteUser = (userId) => {
    if (confirm("Foydalanuvchini o'chirishni tasdiqlaysizmi?")) {
      console.log("Foydalanuvchi o'chirildi:", userId)
    }
  }

  const handleStatusChange = (userId, newStatus) => {
    console.log("Foydalanuvchi holati yangilandi:", userId, newStatus)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-blue-600 hover:text-blue-800">
              ← Admin Panel
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Foydalanuvchilar boshqaruvi</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Jami foydalanuvchilar</p>
                  <p className="text-2xl font-bold">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Faol foydalanuvchilar</p>
                  <p className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</p>
                </div>
                <User className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Adminlar</p>
                  <p className="text-2xl font-bold">{users.filter((u) => u.role === "admin").length}</p>
                </div>
                <Shield className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mijozlar</p>
                  <p className="text-2xl font-bold">{users.filter((u) => u.role === "customer").length}</p>
                </div>
                <User className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Foydalanuvchi qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Rol bo'yicha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha rollar</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="customer">Mijoz</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Holat bo'yicha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha holatlar</SelectItem>
                  <SelectItem value="active">Faol</SelectItem>
                  <SelectItem value="inactive">Nofaol</SelectItem>
                </SelectContent>
              </Select>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Yangi foydalanuvchi
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Yangi foydalanuvchi qo'shish</DialogTitle>
                    <DialogDescription>Tizimga yangi foydalanuvchi qo'shing</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">To'liq ism</Label>
                      <Input id="name" placeholder="Ism Familiya" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="role">Rol</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Rol tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="customer">Mijoz</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Foydalanuvchi qo'shish</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle>Foydalanuvchilar ro'yxati</CardTitle>
            <CardDescription>{filteredUsers.length} ta foydalanuvchi topildi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg gap-4"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                      {user.role === "admin" ? (
                        <Shield className="h-6 w-6 text-red-600" />
                      ) : (
                        <User className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm sm:text-base truncate">{user.name}</h3>
                        <Badge variant={user.role === "admin" ? "destructive" : "default"} className="text-xs">
                          {user.role === "admin" ? "Admin" : "Mijoz"}
                        </Badge>
                        <Badge variant={user.status === "active" ? "default" : "secondary"} className="text-xs">
                          {user.status === "active" ? "Faol" : "Nofaol"}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          <span className="truncate">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Qo'shilgan: {user.joinDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>Buyurtmalar: {user.orders}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Oxirgi kirish: {user.lastLogin}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <Select value={user.status} onValueChange={(value) => handleStatusChange(user.id, value)}>
                      <SelectTrigger className="w-full sm:w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Faol</SelectItem>
                        <SelectItem value="inactive">Nofaol</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditUser(user)}>
                        <Edit className="h-4 w-4" />
                        <span className="hidden sm:inline ml-1">Tahrirlash</span>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteUser(user.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="hidden sm:inline ml-1">O'chirish</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
