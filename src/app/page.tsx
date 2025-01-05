"use client"

import Image from "next/image"
import Link from "next/link"

import { WhatsappIcon } from 'next-share'
import { Testimonials } from './components/testimonials'
import { MainHeader } from './components/header'
import { MainHero } from './components/hero'
import { MainFeatures } from './components/features'
import { MainFooter } from './components/footer'
import { MainProjects } from './components/projects'
import { MainCallToAction } from './components/call-to-action'

export default function ConstructionLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <main className="flex-grow">
        <MainHero />
        <MainFeatures />
        <MainProjects />
        <Testimonials />
        <MainCallToAction />
      </main>

      <MainFooter />

    </div>
  )
}
