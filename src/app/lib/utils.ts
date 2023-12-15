import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { stampStyles } from './constants'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function devMark () {
  if (process.env.NODE_ENV === 'development') return
  console.log('%c✨ Developed by: https://www.felipetodev.com', stampStyles)
}

export const normalizeContentfulData = ({ fields }: { fields: any }) => {
  const itemsKeys = Object.keys(fields ?? {})

  return itemsKeys.reduce((acc, key) => {
    const value = fields[key]

    if (Array.isArray(value)) {
      const response: any = value.map((arrItem) => {
        const { sys = {} } = arrItem
        const fields = normalizeContentfulData({ fields: arrItem.fields })

        return { ...fields, id: sys.id }
      })

      return { ...acc, [key]: response }
    }
    if (typeof value === 'object' && (value.sys || key === 'fields')) {
      const response: any = normalizeContentfulData({ fields: value })

      return { ...acc, [key]: response.fields ?? response }
    }

    if (key === 'file') {
      return { ...acc, url: `https:${value.url}` }
    }

    return { ...acc, [key]: value }
  }, {})
}
