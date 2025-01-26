"use client"

import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react" // Ensure you have lucide-react installed for icons

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto justify-between">
        {/* Footer name */}
        <span className="font-bold text-xl tracking-tight">Raglan</span>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-neutral-900 transition duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-neutral-900 transition duration-300"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
