"use client"

import { useState, useEffect } from 'react'

interface UseInViewOptions {
  once?: boolean
  margin?: string
  amount?: 'some' | 'all' | number
}

export function useInView(
  elementRef: React.RefObject<Element>,
  options: UseInViewOptions = {}
) {
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    
    const { once = false, margin = '0px', amount = 'some' } = options
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else {
          if (!once) setIsInView(false)
        }
      },
      {
        rootMargin: margin,
        threshold: typeof amount === 'number' ? amount : amount === 'all' ? 1 : 0.1,
      }
    )
    
    observer.observe(element)
    
    return () => {
      observer.disconnect()
    }
  }, [elementRef, options])
  
  return isInView
}