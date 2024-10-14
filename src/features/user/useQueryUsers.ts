import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: async () => {
        const response = await axiosInstance.get('/users')
        return response.data
    }
})