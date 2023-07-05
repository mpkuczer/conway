import { useState, useEffect } from 'react'

export default function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMousedown = (e) => {
      if (
        !document.querySelector(".drawer").contains(e.target) &&
        !document.querySelector(".controls__explore").contains(e.target)
        ) {
        setIsOpen(false);
      }
      return () => {
      }
    } 
    document.addEventListener("mousedown", handleMousedown)
    return () => document.removeEventListener("mousedown", handleMousedown)
  }, [])

  return [isOpen, setIsOpen]
}