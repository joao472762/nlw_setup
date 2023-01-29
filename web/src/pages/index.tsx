
import { Header } from "@/components/Header";
import { SumaryTable } from "@/components/SumaryTable";


export default function Home() {
  return (
    <div className="w-full max-w-5xl flex gap-y-16 flex-col items-center p-6">
      <Header/>
   
      <SumaryTable/>
    </div>
  )
}
