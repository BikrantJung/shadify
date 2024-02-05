import { Icons } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex">
      <div className="container mt-16 flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-2xl font-semibold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl">
          Paste the color and get your data
        </h1>
      </div>
    </main>
  )
}
