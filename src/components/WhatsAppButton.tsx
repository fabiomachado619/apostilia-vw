'use client'

import { useState } from 'react'
import { X, MessageCircle, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório'
    } else if (!/^\(\d{2}\)\s\d{5}-\d{4}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = 'WhatsApp inválido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return value
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value)
    setFormData({ ...formData, whatsapp: formatted })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Enviar dados para o webhook
      const response = await fetch('https://mobile.advogar.site/api/crm/webhook/7312/286252177c2aac7cc5bbb973ac939862d1787b2b51af6e562b8fdeab2ac402f6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          whatsapp: formData.whatsapp,
          origem: 'Landing Page - Apostila Técnica VW'
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar dados')
      }

      // Extrair primeiro nome
      const firstName = formData.nome.split(' ')[0]
      
      // Redirecionar para WhatsApp
      const message = encodeURIComponent(`Olá, meu nome é ${firstName}. Estava vendo sobre a Apostila Técnica para Reparo de Módulos Volkswagen e gostaria de mais informações.`)
      window.open(`https://wa.me/556593272294?text=${message}`, '_blank')
      
      // Fechar pop-up e limpar formulário
      setIsOpen(false)
      setFormData({ nome: '', email: '', whatsapp: '' })
      setErrors({})
      
    } catch (error) {
      console.error('Erro:', error)
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale conosco no WhatsApp
        </span>
      </button>

      {/* Overlay e Pop-up */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Pop-up */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl w-full max-w-md border border-white/10">
            {/* Botão Fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Conteúdo */}
            <div className="p-6 sm:p-8">
              {/* Cabeçalho */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Fale Conosco</h3>
                <p className="text-gray-300">Preencha os dados abaixo e falaremos com você no WhatsApp</p>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-2">
                    Nome *
                  </label>
                  <Input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500"
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-400">{errors.nome}</p>
                  )}
                </div>

                {/* Campo E-mail */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Campo WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-200 mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleWhatsAppChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500"
                    placeholder="(XX) XXXXX-XXXX"
                    maxLength={15}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-400">{errors.whatsapp}</p>
                  )}
                </div>

                {/* Botão de Envio */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar e Ir para o WhatsApp
                    </>
                  )}
                </Button>
              </form>

              {/* Info de Segurança */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  Seus dados estão seguros e serão usados apenas para contato
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}