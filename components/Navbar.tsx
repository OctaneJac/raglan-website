"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-white z-50">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        {/* Logo and name */}
        <div className="flex items-center gap-2 mr-8">
          {/* <Laptop className="h-6 w-6" /> */}
          <span className="font-bold text-xl tracking-tight">Raglan</span>
        </div>

        {/* Navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 flex-1">
          <Link
            href="#case-studies"
            className="text-sm font-semibold hover:bg-neutral-100 hover:rounded-lg px-3 py-1 transition duration-300"
          >
            Case Studies
          </Link>
          <Link
            href="#services"
            className="text-sm font-semibold hover:bg-neutral-100 hover:rounded-lg px-3 py-1 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#faqs"
            className="text-sm font-semibold hover:bg-neutral-100 hover:rounded-lg px-3 py-1 transition duration-300"
          >
            FAQs
          </Link>
        </div>

        {/* CTA Button */}
        <Button variant="black" className="ml-auto">
          Book Discovery Call
        </Button>
      </div>
    </nav>
  )
}

