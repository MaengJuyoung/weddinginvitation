import { useSuspenseQuery } from '@tanstack/react-query'

import { Wedding } from '@models/wedding'
import { getWedding } from '../api/wedding'

interface WeddingResponse {
  wedding: Wedding
}

function useWedding() {
  const query = useSuspenseQuery({
    queryKey: ['wedding'],

    queryFn: async (): Promise<Wedding> => {
      const response = await getWedding()

      if (!response.ok) {
        throw new Error('청첩장 정보를 불러오지 못했습니다.')
      }

      const data: WeddingResponse = await response.json()

      return data.wedding
    },
  })

  return {
    wedding: query.data,
    error: query.error,
  }
}

export default useWedding
