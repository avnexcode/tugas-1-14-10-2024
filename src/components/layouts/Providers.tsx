'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type ProvidersProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export const Providers: React.FC<ProvidersProps> = (props) => {
    const { children } = props
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}