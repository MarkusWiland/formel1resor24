'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export function usePagination(defaultPage = 1) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pageParam = searchParams.get('page')
  const currentPage = Math.max(
    1,
    parseInt(pageParam || `${defaultPage}`, 10) || defaultPage,
  )

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams)

    // Ta bort ?page om vi är på första sidan (renare URL)
    if (newPage === 1) {
      params.delete('page')
    } else {
      params.set('page', newPage.toString())
    }

    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return {
    currentPage,
    setPage,
    searchParams,
  }
}
