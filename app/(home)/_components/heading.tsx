'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-w-3xl sm:text-5xl md:text-6xl font-bold">
        Suas Ideias, Documentos e Planos unificados. Bem vindo ao{' '}
        <span className="underline">MeuNotion</span>
      </h1>
      <h3 className=" text-base sm:text-xl md:text-2xl font-medium">
        MeuNotion é a área de trabalho conectada onde os melhores e mais rápidos
        trabalhos acontecem.
      </h3>
      <Button>
        Enter MeuNotion
        <ArrowRight />
      </Button>
    </div>
  )
}
