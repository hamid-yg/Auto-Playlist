'use client'
import { Link } from '@chakra-ui/next-js'
import React from "react";

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/landing">Landing</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/dashboard">dashboard</Link>
      </li>
    </ul>
  )
}
