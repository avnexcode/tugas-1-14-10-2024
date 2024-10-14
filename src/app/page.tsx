'use client'
import { Container } from "@/components/layouts";
import { useQueryUsers } from "@/features/user";

export default function HomePage() {
  const { data } = useQueryUsers()
  console.log(data)
  return (
    <Container className="bg-black min-h-screen">
      <h1 className="text-white">Hello World</h1>
    </Container>
  )
}