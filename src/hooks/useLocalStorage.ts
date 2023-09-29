import { useEffect, useState } from "react"

export const useLocalStorage = () => {
  const [localValues, setLocalValues] = useState<Record<string, any>>({})

  const updateData = (key: string, val: any) => {
    const updatedData = JSON.stringify({ ...localValues, [key]: val });
    localStorage.setItem("sportia", updatedData)
    setLocalValues({...JSON.parse(updatedData)})
  }

  const readLocalValues = (key: string) => {
    return localStorage.getItem(key);
  }

  useEffect(() => {
    setLocalValues(JSON.parse(readLocalValues("sportia") ?? "{}"));
  }, [])

  return {localValues, updateData}
}