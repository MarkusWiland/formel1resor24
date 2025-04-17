'use client'

import { useState } from 'react'
import { products as allProducts } from '@/lib/products'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AffiliateNotice from '@/components/common/affiliate-notice'
import ProductCard from './_components/product-card'
import { usePagination } from '@/hooks/usePagination'
import PaginationControls from '@/components/ui/pagination-controls'

const PER_PAGE = 2

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('popular')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSources, setSelectedSources] = useState<string[]>([])
  const { currentPage, setPage } = usePagination(1)

  const categories = Array.from(new Set(allProducts.map((p) => p.category)))
  const sources = Array.from(new Set(allProducts.map((p) => p.source)))

  const filtered = allProducts
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) =>
      selectedCategories.length > 0
        ? selectedCategories.includes(p.category)
        : true,
    )
    .filter((p) =>
      selectedSources.length > 0 ? selectedSources.includes(p.source) : true,
    )
    .sort((a, b) => {
      if (sort === 'price_asc') return a.price - b.price
      if (sort === 'price_desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const visibleProducts = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  )

  function toggleFilter<T>(list: T[], setList: (val: T[]) => void, item: T) {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
    )
  }

  function resetFilters() {
    setSelectedCategories([])
    setSelectedSources([])
  }

  return (
    <div>
      <AffiliateNotice />
      <div className="container py-12 space-y-10">
        {/* Filter + sort + produkter */}
        <div className="space-y-8">
          {/* Filterkort */}
          <Card>
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-base">Filtrera produkter</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-xs text-muted-foreground"
              >
                Rensa filter
              </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold mb-2">Kategori</h4>
                <ScrollArea className="h-[160px] pr-2">
                  <div className="space-y-3">
                    {categories.map((cat) => {
                      const count = allProducts.filter(
                        (p) => p.category === cat,
                      ).length
                      return (
                        <div
                          key={cat}
                          className="flex items-center justify-between text-sm"
                        >
                          <label className="flex items-center gap-3 cursor-pointer">
                            <Checkbox
                              className="data-[state=checked]:bg-green-600"
                              checked={selectedCategories.includes(cat)}
                              onCheckedChange={() =>
                                toggleFilter(
                                  selectedCategories,
                                  setSelectedCategories,
                                  cat,
                                )
                              }
                            />
                            {cat} ({count})
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Återförsäljare</h4>
                <div className="space-y-3">
                  {sources.map((source) => (
                    <div
                      key={source}
                      className="flex items-center justify-between text-sm"
                    >
                      <label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox
                          className="data-[state=checked]:bg-green-600"
                          checked={selectedSources.includes(source)}
                          onCheckedChange={() =>
                            toggleFilter(
                              selectedSources,
                              setSelectedSources,
                              source,
                            )
                          }
                        />
                        {source}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Sök produkter..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Select onValueChange={setSort} defaultValue="popular">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Välj sortering" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sortera efter</SelectLabel>
                      <SelectItem value="popular">Populärast</SelectItem>
                      <SelectItem value="price_asc">
                        Pris: Lägst först
                      </SelectItem>
                      <SelectItem value="price_desc">
                        Pris: Högst först
                      </SelectItem>
                      <SelectItem value="rating">Betyg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Visar {visibleProducts.length} av {filtered.length} produkter
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center pt-4">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  )
}
