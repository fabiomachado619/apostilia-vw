'use client'

import { useState } from 'react'
import { Check, ChevronDown, ChevronUp, Download, BookOpen, Wrench, Users, Target, Shield, FolderOpen, Zap, HelpCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const scrollToOferta = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">Material Técnico Especializado</Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                Apostila Técnica para Reparo de Módulos Volkswagen – Bosch, Marelli, Siemens
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                Material prático, ilustrado e direto ao ponto para técnicos e iniciantes que querem entender o funcionamento das ECUs da linha Volkswagen e reparar módulos na bancada com segurança.
              </p>
              
              <div className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  Download imediato (PDF)
                </div>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" onClick={scrollToOferta}>
                <Download className="mr-2 h-5 w-5" />
                Baixar Apostila Agora (PDF Digital)
              </Button>
              <p className="text-center text-xs sm:text-sm text-gray-400 mt-3">
                Compatível com celular e computador. Uso direto na bancada.
              </p>
            </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>100% Digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Suporte Técnico</span>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-4 border border-slate-600 overflow-hidden">
                    <img 
                      src="/apostila-tablet.jpg" 
                      alt="Apostila em tablet" 
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <p className="text-center text-xs sm:text-sm mt-2 text-gray-300">Tablet</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-4 border border-slate-600 overflow-hidden">
                    <img 
                      src="/apostila-mobile.jpg" 
                      alt="Apostila em celular" 
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <p className="text-center text-xs sm:text-sm mt-2 text-gray-300">Celular</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 sm:p-4 border border-slate-600 col-span-2 overflow-hidden">
                    <img 
                      src="/apostila-laptop.jpg" 
                      alt="Apostila em notebook" 
                      className="w-full h-24 sm:h-32 lg:h-40 object-cover rounded"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <p className="text-center text-xs sm:text-sm mt-2 text-gray-300">Notebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem é Este Material */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Para Quem é Este Material</h2>
            <p className="text-base sm:text-lg text-gray-600">Identifique se este conteúdo técnico é para você</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-l-4 border-l-blue-500 h-full">
              <CardContent className="p-4 sm:p-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Técnicos em Eletrônica Automotiva</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Profissionais que já atuam na área e buscam aprofundar conhecimentos em módulos VW</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 h-full">
              <CardContent className="p-4 sm:p-6">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Iniciantes em Reparo de ECUs</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Quem está começando e precisa de material didático e prático para aprender</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 h-full">
              <CardContent className="p-4 sm:p-6">
                <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Profissionais de Bancada</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Técnicos que trabalham diretamente com reparo e precisam de referência prática</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 h-full">
              <CardContent className="p-4 sm:p-6">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Entusiastas de Módulos VW</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Quem deseja entender por dentro os módulos da linha Volkswagen</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 text-center border-l-4 border-l-gray-400">
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              Não é sobre promessas. É sobre técnica. É sobre saber o que fazer com cada módulo na bancada.
            </p>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Encontrar na Apostila */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">O Que Você Vai Encontrar na Apostila</h2>
            <p className="text-base sm:text-lg text-gray-600">Recursos técnicos organizados para seu aprendizado</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: BookOpen, title: "Apostila 100% Digital", desc: "Enviada em PDF para acesso imediato" },
              { icon: Target, title: "Linguagem Simples", desc: "Explicativa, com fotos e ilustrações" },
              { icon: Shield, title: "Diagnóstico Preciso", desc: "Com base nas falhas reais" },
              { icon: Wrench, title: "Identificação de Componentes", desc: "Componentes e trilhas detalhados" },
              { icon: FolderOpen, title: "Módulos por Fabricante", desc: "Separados por fabricante e sistema" },
              { icon: Zap, title: "Dicas Práticas", desc: "Procedimentos de bancada testados" },
              { icon: Download, title: "Acesso Imediato", desc: "Receba logo após a compra" },
              { icon: Users, title: "Suporte Técnico", desc: "Dúvidas via WhatsApp" }
            ].map((item, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-4 sm:p-6">
                  <item.icon className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo Demonstrativo */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">🎥 Veja o Material em Uso e Entenda Como Ele Funciona na Prática</h2>
          </div>

          <div className="relative mx-auto max-w-3xl lg:max-w-5xl">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/2T2JWm8TRN8"
                title="Demonstração da Apostila Técnica de Reparo de Módulos Volkswagen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="text-center mt-4 sm:mt-6">
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Explicação direta sobre como a apostila é aplicada na prática, com exemplos reais de uso em bancada.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Completo da Apostila */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <span className="text-xl">📚</span>
              <span className="font-semibold text-blue-900">Total de 18 Módulos Explicados com Aplicações Reais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Conteúdo Completo da Apostila</h2>
            <p className="text-base sm:text-lg text-gray-600">Todos os módulos Volkswagen cobertos em detalhes</p>
          </div>

          {/* Módulos Bosch */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-red-50 border border-red-200 shadow-sm p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded mr-2 sm:mr-3 text-sm sm:text-base flex items-center gap-1">
                  🔧 BOSCH
                </span>
                <span className="text-sm sm:text-base">Módulos Bosch</span>
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { 
                  code: "ME 7.5.30", 
                  vehicles: "Golf 1.6 / 1.8 / 2.0, Polo, Gol, Fox, Voyage, Saveiro, Gol Trend"
                },
                { 
                  code: "ME 7.5.10", 
                  vehicles: "Polo 1.6 / 1.8 / 2.0 / 1.4i"
                },
                { 
                  code: "ME 7.5.20", 
                  vehicles: "Passat, Bora, Jetta 2.0, Crossfox, Gol 1.0 8V Totalflex, Gol 1.6 8V BPA Totalflex, Skoda Roomster, Polo Classic"
                },
                { 
                  code: "ME 7.9.10", 
                  vehicles: "Fox, Gol, Kombi 1.6 8v"
                },
                { 
                  code: "ME 7.9.20", 
                  vehicles: "Golf 2.0, Kombi 1.4 16v"
                }
              ].map((item, index) => (
                <Card key={index} className="border border-red-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex justify-between items-start">
                      <div className="w-full">
                        <Badge variant="outline" className="mb-2 text-red-600 border-red-600 text-xs sm:text-sm font-semibold">{item.code}</Badge>
                        <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed">{item.vehicles}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Módulos Marelli */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-blue-50 border border-blue-200 shadow-sm p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <span className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded mr-2 sm:mr-3 text-sm sm:text-base flex items-center gap-1">
                  ⚡ MARELLI
                </span>
                <span className="text-sm sm:text-base">Módulos Marelli</span>
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { 
                  code: "IAW 4BV", 
                  vehicles: "Gol 1.0 8v / 1.4 8v Mi Flex, Kombi 1.4 8v, Fox 1.0 8V Totalflex"
                },
                { 
                  code: "IAW 4LV", 
                  vehicles: "Gol 1.6 8v, Polo 1.4i"
                },
                { 
                  code: "IAW 4SF", 
                  vehicles: "Parati 1.6 8v"
                },
                { 
                  code: "IAW 4AV", 
                  vehicles: "Fox 1.0, Gol 1.0, Lupo 1.4, Bora 1.4L 16V, Golf 1.4L 16V, Seat Leon 1.4L 16V"
                },
                { 
                  code: "IAW 4TV", 
                  vehicles: "Gol 1.0 16v, Kombi 1.4 16v, Polo 1.4"
                },
                { 
                  code: "IAW 1AV", 
                  vehicles: "Gol 1.6 MI, Gol 1.0 8V, Santana 2.0 8V, Santana 1.6, Skoda Felicia, Seat 1.6"
                }
              ].map((item, index) => (
                <Card key={index} className="border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex justify-between items-start">
                      <div className="w-full">
                        <Badge variant="outline" className="mb-2 text-blue-600 border-blue-600 text-xs sm:text-sm font-semibold">{item.code}</Badge>
                        <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed">{item.vehicles}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Módulos Siemens */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-green-50 border border-green-200 shadow-sm p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded mr-2 sm:mr-3 text-sm sm:text-base flex items-center gap-1">
                  🛠️ SIEMENS
                </span>
                <span className="text-sm sm:text-base">Módulos Siemens</span>
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { 
                  code: "Simos 2PE", 
                  vehicles: "Gol, Santana, Parati"
                },
                { 
                  code: "Simos 3PA", 
                  vehicles: "Gol, Cordoba 1.0, Polo IV 1.2i"
                },
                { 
                  code: "Simos 3PE", 
                  vehicles: "Gol 1.6 8v, Polo 1.2, Polo IV 1.2i"
                },
                { 
                  code: "Simos 2SE", 
                  vehicles: "Santana 1.8 8v"
                },
                { 
                  code: "Simos 3PB", 
                  vehicles: "Gol 1.0, Skoda Fabia 1.4"
                },
                { 
                  code: "Simos 2PB", 
                  vehicles: "Gol MI, Parati, Fox"
                }
              ].map((item, index) => (
                <Card key={index} className="border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex justify-between items-start">
                      <div className="w-full">
                        <Badge variant="outline" className="mb-2 text-green-600 border-green-600 text-xs sm:text-sm font-semibold">{item.code}</Badge>
                        <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed">{item.vehicles}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extras Técnicos Incluídos */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Extras Técnicos Incluídos</h2>
            <p className="text-base sm:text-lg text-gray-600">Conteúdo adicional para potencializar seu aprendizado</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">🛠️</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Componentes mais danificados</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Peças que mais falham e precisam de reparo</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">🧭</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Localização visual</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Componentes e trilhas marcados na placa</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">⚙️</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Procedimentos seguros</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Passos corretos para reparo em bancada</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">📷</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Imagens reais</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Fotos e exemplos práticos de módulos</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">💡</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Linguagem simples</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Explicações claras e aplicadas</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Soluções testadas</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Métodos validados na prática</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bônus Incluso */}
      <section className="py-12 sm:py-16 px-4 bg-blue-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600 px-3 sm:px-4 py-2 rounded-full mb-4">
              <span className="text-xl sm:text-2xl">🎁</span>
              <span className="font-semibold text-sm sm:text-base">BÔNUS EXCLUSIVO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Banco Técnico de Arquivos</h2>
            <p className="text-base sm:text-lg text-blue-800">Ao adquirir a apostila, receba arquivos técnicos para os principais módulos VW</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-white border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <FolderOpen className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Arquivos Organizados</h3>
                <p className="text-blue-700 text-xs sm:text-sm">🗂️ Prontos para uso imediato</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Zap className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Desbloqueios e Resets</h3>
                <p className="text-blue-700 text-xs sm:text-sm">🔓 Para testes em bancada</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <Download className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Acesso Imediato</h3>
                <p className="text-blue-700 text-xs sm:text-sm">⚡ Disponível na hora</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demonstração Visual */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Demonstração Visual</h2>
            <p className="text-base sm:text-lg text-gray-600">Veja como o conteúdo é apresentado na prática</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-100 p-4 sm:p-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <h4 className="font-bold text-gray-900 mb-4 p-4 sm:p-6 pb-0 text-sm sm:text-base">Exemplo de Página - ME 7.5.30</h4>
                    <div className="p-4 sm:p-6 pt-0">
                      <img 
                        src="/apostila-preview-1.jpg" 
                        alt="Página da apostila mostrando placa de circuito ECU" 
                        className="w-full rounded-lg shadow-md"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      <div className="mt-4 bg-blue-50 p-3 sm:p-4 rounded-lg">
                        <p className="text-sm font-semibold text-blue-900 mb-2">📍 Pontos Críticos:</p>
                        <ul className="text-xs text-blue-800 space-y-1">
                          <li>• Driver de ignição - posição Q5</li>
                          <li>• Regulador de tensão - próximo ao conector</li>
                          <li>• Capacitores de filtro - área de alimentação</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-100 p-4 sm:p-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <h4 className="font-bold text-gray-900 mb-4 p-4 sm:p-6 pb-0 text-sm sm:text-base">Visualização Móvel</h4>
                    <div className="p-4 sm:p-6 pt-0">
                      <div className="bg-gray-900 rounded-lg p-3 sm:p-4 max-w-xs sm:max-w-sm mx-auto">
                        <img 
                          src="/apostila-mobile.jpg" 
                          alt="Visualização da apostila em celular" 
                          className="w-full rounded"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      </div>
                      <div className="mt-4 text-center text-gray-600">
                        <p className="text-sm sm:text-base">Interface otimizada para consulta rápida</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Acesso imediato em qualquer dispositivo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-base sm:text-lg text-gray-600">Respostas técnicas diretas para suas dúvidas</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "Essa apostila serve para iniciantes?",
                answer: "Sim. Ela explica os conceitos com linguagem simples e fotos, sendo ideal para quem está começando no reparo de módulos."
              },
              {
                question: "Mostra quais peças devo trocar?",
                answer: "Sim. Mostra o que costuma falhar em cada módulo e como localizar os componentes na placa para reparo direto."
              },
              {
                question: "É física ou digital?",
                answer: "Digital. O material é enviado em formato PDF após o pagamento, para acesso imediato."
              },
              {
                question: "Posso usar ela na bancada?",
                answer: "Sim. Foi criada exatamente para esse tipo de uso prático, com diagramas e referências visuais claras."
              },
              {
                question: "Tem suporte?",
                answer: "Sim. Suporte via WhatsApp disponível após a compra para tirar dúvidas técnicas."
              },
              {
                question: "A apostila mostra trilhas e medições?",
                answer: "Sim. Existem exemplos visuais com trilhas marcadas e pontos críticos indicados."
              },
              {
                question: "Tem indicação de códigos de erro ou sintomas?",
                answer: "Sim, em alguns módulos há referências de falhas comuns e sintomas relacionados à parte eletrônica."
              }
            ].map((faq, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent 
                  className="p-4 sm:p-6"
                  onClick={() => toggleFaq(`faq-${index}`)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mt-1 flex-shrink-0" />
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</h3>
                    </div>
                    {expandedFaq === `faq-${index}` ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  {expandedFaq === `faq-${index}` && (
                    <div className="mt-4 ml-8 sm:ml-9 text-gray-600 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preço e Compra */}
      <section id="oferta" className="py-12 sm:py-16 px-4 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Escolha Seu Plano</h2>
            <p className="text-base sm:text-lg text-blue-100">
              Apostila completa para reparo de módulos Volkswagen
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Card 1 - Plano Básico */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl sm:text-4xl mb-3">📘</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">🔹 Material PDF - Apostila Técnica</h3>
                  <p className="text-green-100 text-sm sm:text-base mb-6">Ideal para quem quer apenas o conteúdo em PDF</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Apostila completa em PDF</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Linguagem simples e ilustrada</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Diagnóstico com falhas comuns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Localização de componentes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Compatível com celular e computador</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Permite imprimir</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-green-100 text-sm sm:text-base">Acesso imediato após o pagamento</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">💰</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-4">R$ 91,90</div>
                  <Button size="lg" className="w-full bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 px-6 py-3 text-base sm:text-lg font-semibold transition-all duration-200" asChild>
                    <a href="https://www.ggcheckout.com/checkout/v2/4eg3hQOt99xb6Ifjea5k" target="_blank" rel="noopener noreferrer">
                      Quero a Apostila Básica
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Plano Combo */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-500 border-2 border-yellow-300 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                🏆 MAIS VENDIDO
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="text-3xl sm:text-4xl mb-3">📚</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">🔸 Material Completo + Combo Avançado</h3>
                  <p className="text-yellow-100 text-sm sm:text-base mb-6">Para quem quer o conteúdo completo e o suporte para aplicar na prática</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-100 text-sm sm:text-base">Tudo do Plano Básico +</span>
                  </div>
                  <div className="flex items-start gap-3 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 shadow-sm">
                    <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-100 text-sm sm:text-base font-semibold">🎁 Banco de Arquivos de Decode e Reset</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-100 text-sm sm:text-base">🎥 Videoaula: Como usar na prática</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-100 text-sm sm:text-base">🔑 Acesso à área de membros exclusiva</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-100 text-sm sm:text-base">🧰 Material de apoio extra</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                    <span className="text-yellow-100 text-sm sm:text-base">📥 Acesso imediato a tudo</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">💎</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">R$ 97,00</div>
                  <div className="text-yellow-200 text-sm mb-4 line-through">R$ 147,00 se separado</div>
                  <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" asChild>
                    <a href="https://www.ggcheckout.com/checkout/v2/PVqFYq2XyJRzXJMlg3iQ" target="_blank" rel="noopener noreferrer">
                      Quero o Combo Completo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-green-100 text-sm sm:text-base mb-4">
              <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="text-yellow-300">💡</span>
                <span>Economia de R$ 50,00 no plano combo</span>
              </span>
            </p>
            <p className="text-green-100 text-xs sm:text-sm">
              Todos os planos são pagamento único, sem mensalidades. Entrega digital imediata após confirmação.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé com Selos */}
      <section className="py-8 px-4 bg-gray-100 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-lg">📄</span>
              <span className="text-sm sm:text-base font-medium">PDF Digital</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-lg">🛠️</span>
              <span className="text-sm sm:text-base font-medium">Suporte via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-lg">📥</span>
              <span className="text-sm sm:text-base font-medium">Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-lg">🔐</span>
              <span className="text-sm sm:text-base font-medium">Compra 100% Segura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Encerramento Técnico */}
      <section className="py-12 sm:py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 border-l-4 border-l-blue-500">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Encerramento Técnico</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Este material é pra quem quer saber o que fazer com cada módulo. Sem achismo. Sem enrolação. Só técnica. 
              Se esse for o seu caso, baixe agora e tenha tudo à mão na bancada.
            </p>
          </div>
          
          <div className="mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm">
            <p className="mb-1">Apostila Técnica Reparo de Módulos Volkswagen</p>
            <p>Conteúdo especializado para profissionais técnicos</p>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </div>
  )
}