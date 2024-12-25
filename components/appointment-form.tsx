'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Calendar } from '@/components/ui/calendar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

type FormData = {
  name: string
  email: string
  phone: string
  service: string
  date: Date
  time: string
}

const services = [
  'Consulta Geral',
  'Limpeza Dental',
  'Clareamento',
  'Tratamento de Canal',
  'Implante Dentário',
  'Lentes de Contato Dental'
]

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
]

export function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setValue('date', date)
    }
  }

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      
      const formData = {
        'form-name': 'appointment',
        ...data,
        date: data.date ? format(data.date, 'yyyy-MM-dd', { locale: ptBR }) : '',
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      })

      if (!response.ok) throw new Error('Erro no envio do formulário')

      toast({
        title: "Agendamento realizado",
        description: "Entraremos em contato para confirmar sua consulta.",
      })
      reset()
      setSelectedDate(undefined)
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Erro no agendamento",
        description: "Ocorreu um erro ao agendar sua consulta. Por favor, tente novamente.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-blue-600">Preencha seus dados</CardTitle>
          <CardDescription className="text-center">Escolha a data e horário desejados para sua consulta</CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
            data-netlify="true"
            name="appointment"
            method="POST"
          >
            <input type="hidden" name="form-name" value="appointment" />
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" {...register('name', { required: 'Nome é obrigatório' })} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" {...register('email', { required: 'E-mail é obrigatório' })} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" {...register('phone', { required: 'Telefone é obrigatório' })} />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Label htmlFor="service">Serviço</Label>
                <Select onValueChange={(value) => setValue('service', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Data da Consulta</Label>
                <div className="border rounded-md p-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => 
                      date < new Date() || 
                      date.getDay() === 0 || 
                      date.getDay() === 6
                    }
                    locale={ptBR}
                    className="mx-auto"
                  />
                </div>
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>
              <div>
                <Label htmlFor="time">Horário</Label>
                <Select onValueChange={(value) => setValue('time', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Agendando...' : 'Agendar Consulta'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

