"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ShoppingBag, User, Settings, LogOut } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  isLoggedIn?: boolean
  userRole?: "admin" | "customer"
  userName?: string
}

export function MobileNav({ isLoggedIn = false, userRole, userName }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">Dern-Market</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User Info */}
          {isLoggedIn && (
            <div className="py-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{userName || "Foydalanuvchi"}</p>
                  <p className="text-sm text-gray-500 capitalize">{userRole}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 py-4 space-y-2">
            <Link href="/" onClick={handleLinkClick}>
              <Button variant="ghost" className="w-full justify-start">
                Bosh sahifa
              </Button>
            </Link>
            <Link href="/products" onClick={handleLinkClick}>
              <Button variant="ghost" className="w-full justify-start">
                Mahsulotlar
              </Button>
            </Link>
            <Link href="/faq" onClick={handleLinkClick}>
              <Button variant="ghost" className="w-full justify-start">
                FAQ
              </Button>
            </Link>

            {isLoggedIn && userRole === "admin" && (
              <Link href="/admin" onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Admin Panel
                </Button>
              </Link>
            )}

            {!isLoggedIn && (
              <>
                <Link href="/demo" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start">
                    Demo hisoblar
                  </Button>
                </Link>
                <Link href="/login" onClick={handleLinkClick}>
                  <Button variant="ghost" className="w-full justify-start">
                    Kirish
                  </Button>
                </Link>
                <Link href="/register" onClick={handleLinkClick}>
                  <Button className="w-full justify-start">Ro'yxatdan o'tish</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Footer Actions */}
          {isLoggedIn && (
            <div className="pt-4 border-t">
              <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="h-4 w-4 mr-2" />
                Chiqish
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
