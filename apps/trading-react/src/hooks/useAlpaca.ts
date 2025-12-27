import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { alpacaService } from '../services/alpaca.service';

export function useAlpacaAccount() {
	return useQuery({
		queryKey: ['alpaca-account'],
		queryFn: () => alpacaService.getAccount(),
	});
}

export function useAlpacaPositions() {
	return useQuery({
		queryKey: ['alpaca-positions'],
		queryFn: () => alpacaService.getPositions(),
	});
}

export function useAlpacaOrders() {
	return useQuery({
		queryKey: ['alpaca-orders'],
		queryFn: () => alpacaService.getOrders(),
	});
}

export function useSubmitOrder() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (order: Parameters<typeof alpacaService.submitOrder>[0]) =>
			alpacaService.submitOrder(order),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['alpaca-orders'] });
			queryClient.invalidateQueries({ queryKey: ['alpaca-positions'] });
			queryClient.invalidateQueries({ queryKey: ['alpaca-account'] });
		},
	});
}
