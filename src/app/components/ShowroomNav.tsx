'use client';
import React from 'react';
import Link from 'next/link';

export default function ShowroomNav() {
  return (
    <nav className="fixed top-1/2 right-6 transform -translate-y-1/2 space-y-4 z-50">
      <Link href="#intro" className="block w-2 h-2 bg-white rounded-full" />
      <Link href="#tees"  className="block w-2 h-2 bg-white rounded-full" />
      <Link href="#caps"  className="block w-2 h-2 bg-white rounded-full" />
    </nav>
  );
}
