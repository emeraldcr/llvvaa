'use client'

import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Mensaje Enviado</h1>
        <p className="text-gray-600 mb-6">
          Gracias por ponerte en contacto con nosotros. Pronto recibirás una respuesta de nuestro equipo.
        </p>
        <Link href="/">
          <Button className="w-full">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}