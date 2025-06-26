"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ShoppingBag, ShoppingCart, User, Settings, LogOut } from "lucide-react"
import { useAuth } from "../contexts/auth-context"
import { useCart } from "../contexts/cart-context"

export function Header() {
  const { user, logout } = useAuth()
  const { getTotalItems } = useCart()

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <span className="text-lg sm:text-xl font-bold text-gray-900">Dern-Market</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
            Mahsulotlar
          </Link>
          <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          {user?.role === "admin" && (
            <Link href="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">
              Admin Panel
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Cart Button */}
          <Link href="/cart">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Savatcha</span>
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </Link>

          {/* User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.firstName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.firstName + " " + user.lastName}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                  <Badge variant={user.role === "admin" ? "destructive" : "default"} className="text-xs mt-1">
                    {user.role === "admin" ? "Admin" : "Mijoz"}
                  </Badge>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Profil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders" className="flex items-center">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Buyurtmalarim
                  </Link>
                </DropdownMenuItem>
                {user.role === "admin" && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="flex items-center">
                      <Settings className="h-4 w-4 mr-2" />
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Chiqish
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Kirish
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Ro'yxat</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
