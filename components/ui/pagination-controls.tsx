'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className={
              currentPage === 1 ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
        <PaginationItem>
          <span className="text-sm px-3 py-2">
            Sida {currentPage} av {totalPages}
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className={
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
