'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

type FormData = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      
      const formData = {
        'form-name': 'contact',
        ...data
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      })

      if (!response.ok) throw new Error('Erro no envio do formulário')

      toast({
        title: "Mensagem enviada",
        description: "Agradecemos seu contato. Responderemos em breve!",
      })
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      data-netlify="true"
      name="contact"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" {...register('name', { required: 'Nome é obrigatório' })} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" {...register('email', { required: 'E-mail é obrigatório' })} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" {...register('message', { required: 'Mensagem é obrigatória' })} />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  )
}

