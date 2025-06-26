"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Users, Globe, Code, Plus, Edit, Trash2, Eye, ArrowLeft, Settings, Bell } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  name: string
  description: string
  status: "active" | "completed" | "pending"
  technology: string[]
  createdAt: string
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Zamonaviy onlayn do'kon platformasi",
      status: "active",
      technology: ["React", "Node.js", "PostgreSQL"],
      createdAt: "2025-01-15",
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Shaxsiy portfolio sayti",
      status: "completed",
      technology: ["Next.js", "Tailwind CSS"],
      createdAt: "2025-01-10",
    },
    {
      id: 3,
      name: "CRM System",
      description: "Mijozlarni boshqarish tizimi",
      status: "pending",
      technology: ["React", "Express", "MongoDB"],
      createdAt: "2025-01-20",
    },
  ])

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    technology: "",
  })

  const [isAddingProject, setIsAddingProject] = useState(false)

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      const project: Project = {
        id: projects.length + 1,
        name: newProject.name,
        description: newProject.description,
        status: "pending",
        technology: newProject.technology.split(",").map((t) => t.trim()),
        createdAt: new Date().toISOString().split("T")[0],
      }
      setProjects([...projects, project])
      setNewProject({ name: "", description: "", technology: "" })
      setIsAddingProject(false)
    }
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Faol"
      case "completed":
        return "Tugallangan"
      case "pending":
        return "Kutilmoqda"
      default:
        return status
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
                <span>Orqaga</span>
              </Link>
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Jami Loyihalar</CardTitle>
              <Globe className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{projects.length}</div>
              <p className="text-xs text-gray-400">+2 o'tgan oydan</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Faol Loyihalar</CardTitle>
              <BarChart3 className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {projects.filter((p) => p.status === "active").length}
              </div>
              <p className="text-xs text-gray-400">Hozirda ishlanmoqda</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Tugallangan</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <p className="text-xs text-gray-400">Muvaffaqiyatli yakunlangan</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Kutilayotgan</CardTitle>
              <Code className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {projects.filter((p) => p.status === "pending").length}
              </div>
              <p className="text-xs text-gray-400">Boshlanishini kutmoqda</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="bg-white/5 border-white/10">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300"
            >
              Loyihalar
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300"
            >
              Analitika
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300"
            >
              Sozlamalar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            {/* Projects Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Loyihalar</h2>
                <p className="text-gray-300">Barcha loyihalaringizni boshqaring</p>
              </div>
              <Button
                onClick={() => setIsAddingProject(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Yangi Loyiha
              </Button>
            </div>

            {/* Add Project Form */}
            {isAddingProject && (
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Yangi Loyiha Qo'shish</CardTitle>
                  <CardDescription className="text-gray-300">Yangi loyiha ma'lumotlarini kiriting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Loyiha nomi
                      </Label>
                      <Input
                        id="name"
                        value={newProject.name}
                        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                        className="bg-white/5 border-white/10 text-white"
                        placeholder="Loyiha nomini kiriting"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="technology" className="text-gray-300">
                        Texnologiyalar
                      </Label>
                      <Input
                        id="technology"
                        value={newProject.technology}
                        onChange={(e) => setNewProject({ ...newProject, technology: e.target.value })}
                        className="bg-white/5 border-white/10 text-white"
                        placeholder="React, Node.js, PostgreSQL"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-gray-300">
                      Tavsif
                    </Label>
                    <Textarea
                      id="description"
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="Loyiha haqida qisqacha ma'lumot"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleAddProject} className="bg-green-600 hover:bg-green-700 text-white">
                      Qo'shish
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsAddingProject(false)}
                      className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black"
                    >
                      Bekor qilish
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-gray-300 mt-1">{project.description}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(project.status)}>{getStatusText(project.status)}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Texnologiyalar:</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technology.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-purple-500/20 text-purple-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">
                          {new Date(project.createdAt).toLocaleDateString("uz-UZ")}
                        </span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                            onClick={() => handleDeleteProject(project.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Loyihalar Analitikasi</CardTitle>
                <CardDescription className="text-gray-300">Loyihalaringizning statistik ma'lumotlari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {Math.round((projects.filter((p) => p.status === "completed").length / projects.length) * 100)}%
                    </div>
                    <p className="text-gray-300">Tugallanish foizi</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {projects.reduce((acc, p) => acc + p.technology.length, 0)}
                    </div>
                    <p className="text-gray-300">Jami texnologiyalar</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{new Date().getFullYear() - 2023}</div>
                    <p className="text-gray-300">Yillik tajriba</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Sozlamalar</CardTitle>
                <CardDescription className="text-gray-300">Dashboard sozlamalarini boshqaring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-300">
                    Foydalanuvchi nomi
                  </Label>
                  <Input id="username" defaultValue="admin" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="rahimovilyosbek63@gmail.com"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Saqlash
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
