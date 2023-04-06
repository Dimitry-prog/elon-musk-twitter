import Button from "@/app/components/UI/Button";

export default function Home() {
  const handleClick = () => {

  }
  return (
    <main className="p-4 flex flex-col gap-4 flex-grow border-x border-slate-500/10 dark:border-slate-800">
      <h1 className="text-4xl font-bold dark:text-white/90">Hello Home!</h1>
      <Button label="Hello"/>
    </main>
  )
}
