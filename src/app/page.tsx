'use client'

import { useState, useEffect } from 'react'
import { Star, Check, Users, Heart, MessageCircle, Phone, Mail, ArrowRight, Play, Shield, Clock, Zap, Circle, Menu, X, BookOpen, Target, Lightbulb, Award, MapPin } from 'lucide-react'

export default function VitaSaudeLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCTAClick = () => {
    // Redireciona para gateway de pagamento
    window.open('https://pay.hotmart.com/seu-produto', '_blank')
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5584991087204?text=Olá! Quero saber mais sobre o método VITA SAUDE!', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Header com Logo Centralizada */}
      <header className="bg-gradient-to-r from-slate-800 to-blue-800 shadow-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo Centralizada */}
            <div className="flex-1 flex justify-center">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30">
                  <h1 className="text-2xl md:text-4xl font-black text-white tracking-wide">
                    VITA SAÚDE
                  </h1>
                  <div className="text-lg md:text-xl font-bold text-blue-100">
                    & EMAGRECIMENTO
                  </div>
                  <div className="text-xs md:text-sm text-white/90 italic mt-1">
                    Transformou mais de 800 vidas
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 absolute right-8">
              <button
                onClick={() => setShowAbout(true)}
                className="text-white hover:text-blue-200 font-semibold transition-colors duration-200 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                Sobre
              </button>
              <button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg"
              >
                Comprar Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white absolute right-4"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setShowAbout(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-white hover:text-blue-200 font-semibold text-left bg-white/10 px-4 py-2 rounded-full"
                >
                  Sobre
                </button>
                <button
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-semibold w-fit"
                >
                  Comprar Agora
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Modal Sobre */}
      {showAbout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sobre a VITA</h2>
                <button
                  onClick={() => setShowAbout(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Nossa Missão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A VITA SAÚDE & EMAGRECIMENTO nasceu com o propósito de transformar vidas através de um método revolucionário e cientificamente comprovado de emagrecimento. Nossa missão é ajudar pessoas a alcançarem seus objetivos de forma saudável, sustentável e definitiva.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Nossa História</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fundada por especialistas em nutrição e metabolismo, a VITA desenvolveu um método único que já transformou mais de 800 vidas. Nosso diferencial está na abordagem científica que acelera o metabolismo naturalmente, sem dietas restritivas ou exercícios extremos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Nossos Valores</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      Resultados comprovados cientificamente
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      Métodos 100% naturais e seguros
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      Suporte completo durante toda jornada
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      Transparência e honestidade em tudo que fazemos
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Por que escolher a VITA?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Diferente de outros métodos no mercado, a VITA oferece uma abordagem holística que considera não apenas a perda de peso, mas o bem-estar completo. Nosso método é baseado em pesquisas das melhores universidades do mundo e já provou sua eficácia em centenas de casos reais.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Nosso Compromisso</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>"Perca até 15kgs até o verão com este método"</strong> não é apenas nosso slogan, é nossa promessa. Estamos comprometidos em fornecer todas as ferramentas, conhecimento e suporte necessários para que você alcance seus objetivos de forma definitiva.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setShowAbout(false)
                    handleCTAClick()
                  }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  Quero Conhecer o Método VITA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>

      {/* TOPO DO FUNIL - HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-blue-800 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Slogan */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl text-white font-bold italic bg-blue-900/80 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block">
                "Perca até 15kgs até o verão com este método"
              </p>
            </div>

            {/* Headline Principal */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">DESCUBRA O MÉTODO SECRETO</span><br />
              Que Já Transformou Mais de <span className="text-6xl md:text-7xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-black">800</span> Vidas
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              <strong className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">SEM DIETAS MALUCAS, SEM EXERCÍCIOS EXTREMOS, SEM REMÉDIOS!</strong><br />
              O único sistema comprovado cientificamente que acelera seu metabolismo em até 300%
            </p>

            {/* Timer de Urgência */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-2xl mb-8 max-w-2xl mx-auto shadow-2xl">
              <p className="text-lg font-bold mb-4">⚠️ OFERTA LIMITADA EXPIRA EM:</p>
              <div className="flex justify-center gap-4 text-3xl font-bold">
                <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
                  {String(timeLeft.hours).padStart(2, '0')}
                  <div className="text-sm">HORAS</div>
                </div>
                <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
                  {String(timeLeft.minutes).padStart(2, '0')}
                  <div className="text-sm">MIN</div>
                </div>
                <div className="bg-white text-red-600 px-4 py-2 rounded-lg">
                  {String(timeLeft.seconds).padStart(2, '0')}
                  <div className="text-sm">SEG</div>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-2xl font-bold py-6 px-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl mb-8"
            >
              🔥 QUERO EMAGRECER AGORA! 🔥
              <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </button>

            <p className="text-sm text-blue-200">
              ✅ Acesso imediato após o pagamento | ✅ Garantia de 7 dias | ✅ Suporte via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE IMAGEM MOTIVACIONAL COM GATILHOS */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem Motivacional */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&h=800&fit=crop" 
                alt="Transformação de emagrecimento" 
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-2xl font-bold mb-2">
                  "Sua transformação começa HOJE!"
                </p>
                <p className="text-lg opacity-90">
                  Não deixe para amanhã o que pode mudar sua vida hoje
                </p>
              </div>
            </div>

            {/* Frases Motivacionais com Gatilhos */}
            <div className="text-white space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  ✨ IMAGINE SUA VIDA DAQUI A 30 DIAS...
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-3">💪 VOCÊ VAI SE SENTIR:</h4>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">✨</span>
                      Confiante e poderosa em qualquer lugar
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">✨</span>
                      Orgulhosa do seu reflexo no espelho
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">✨</span>
                      Cheia de energia e disposição
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="text-2xl font-bold text-pink-400 mb-3">👗 VOCÊ VAI PODER:</h4>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">🎯</span>
                      Usar qualquer roupa que quiser
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">🎯</span>
                      Postar fotos sem filtros
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-3">🎯</span>
                      Ser admirada por onde passar
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm p-6 rounded-2xl border border-red-400/30">
                  <h4 className="text-2xl font-bold text-red-400 mb-3">⚠️ MAS SE VOCÊ NÃO AGIR HOJE:</h4>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">❌</span>
                      Vai continuar se sentindo insatisfeita
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">❌</span>
                      Vai perder mais uma oportunidade
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-400 mr-3">❌</span>
                      Vai se arrepender de não ter tentado
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse"
                >
                  🚀 EU QUERO ESSA TRANSFORMAÇÃO!
                </button>
                <p className="text-yellow-300 mt-4 text-lg font-semibold">
                  ⏰ Não deixe essa oportunidade passar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social Inicial */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Mais de <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">800 pessoas</span> já transformaram suas vidas!
            </h3>
            <div className="flex justify-center items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
              <span className="text-xl font-bold text-blue-100 ml-2">4.9/5 (800 avaliações)</span>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                age: "34 anos",
                result: "Perdeu 18kg em 3 meses",
                text: "Nunca pensei que fosse possível! O método VITA mudou minha vida completamente. Perdi 18kg sem sofrimento!",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Ana Costa",
                age: "28 anos", 
                result: "Perdeu 12kg em 2 meses",
                text: "Incrível! Finalmente encontrei algo que funciona de verdade. Minha autoestima voltou!",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
              },
              {
                name: "Carla Mendes",
                age: "41 anos",
                result: "Perdeu 22kg em 4 meses", 
                text: "Depois dos 40 achei que seria impossível. O método VITA provou que eu estava errada!",
                image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.age}</p>
                    <p className="text-blue-600 font-bold">{testimonial.result}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">VITA SAÚDE & EMAGRECIMENTO</h4>
          <p className="text-blue-200 mb-6">"Perca até 15kgs até o verão com este método"</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              contato@vitasaude.com.br
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              (84) 99108-7204
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              NATAL-RN - ARENA DAS DUNAS, ESCRITÓRIO
            </div>
          </div>
          
          <p className="text-sm text-blue-300">
            © 2024 VITA SAÚDE & EMAGRECIMENTO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}