import { Button } from "@/components/ui/button";
import Image from "next/image";
import DoctorImg from "../../../../public/doctor-hero.png"

export default function Home() {
}

export function Hero() {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">

                <main className="flex items-center justify-center">
                    <article className="flex-[2] max-w-2xl space-y-8 flex flex-col justify-center ">

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                            Encontre os melhores profissionais em um unico local
                        </h1>

                        <p className="text-base md:text-lg text-gray-500">
                            nós somos uma plataforma para profissionais da saude com foco
                            em agilizar seu atendimento de forma simplificada e segura.
                        </p>

                        <Button
                            className="bg-emerald-600 text-white hover:bg-emerald-500 w-fit px-6 font-semibold">
                            Encontre um profissional
                        </Button>
                    </article>

                    <div className="hidden lg:block">
                        <Image src={DoctorImg} alt="doctor"
                            width={340}
                            height={400}
                            className="object-contain"
                            quality={100}
                            priority />
                    </div>
                </main>

            </div>
        </section>
    )
}
