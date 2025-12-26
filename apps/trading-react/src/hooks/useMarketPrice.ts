import { useQuery } from '@tanstack/react-query';
import { getPrice } from '../services/market.service';

export function useMarketPrice(symbol: string) {
  return useQuery({
    queryKey: ['price', symbol],
    queryFn: async () => {
      return await getPrice(symbol);
    },
    refetchInterval: 5000
  });
}
