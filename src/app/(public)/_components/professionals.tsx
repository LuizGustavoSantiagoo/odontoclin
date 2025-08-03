import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import fotoImage from '../../../../public/foto1.png'
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Professionals() {

    return (
        <section className="bg-gray-200 [py-16] py-6">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center mb-12 font-bold">
                    Clinicas Disponíveis
                </h2>

                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    <Card className="overflow-hidden p-0">

                        <CardContent className="p-0">

                            <div>
                                <div className="relative h-48">
                                    <Image
                                        src={fotoImage}
                                        alt="foto-dr"
                                        fill
                                        className="object-cover "
                                        quality={100}
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clinica Centro
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Rua x, centro, campo grande - MS
                                        </p>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 text-emerald-500 flex items-center justify-center">.</div>
                                </div>

                                <Link
                                    href="/"
                                    className="bg-emerald-500 w-full hover:bg-emerald-400 text-white flex items-center justify-center py-2
                                    text-sm 
                                    font-medium rounded-md
                                    lg:text-base">
                                    Agende seu horário
                                    <ArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden p-0">

                        <CardContent className="p-0">

                            <div>
                                <div className="relative h-48">
                                    <Image
                                        src={fotoImage}
                                        alt="foto-dr"
                                        fill
                                        className="object-cover "
                                        quality={100}
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clinica Centro
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Rua x, centro, campo grande - MS
                                        </p>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 text-emerald-500 flex items-center justify-center">.</div>
                                </div>

                                <Link
                                    href="/"
                                    className="bg-emerald-500 w-full hover:bg-emerald-400 text-white flex items-center justify-center py-2
                                    text-sm 
                                    font-medium rounded-md
                                    lg:text-base">
                                    Agende seu horário
                                    <ArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden p-0">

                        <CardContent className="p-0">

                            <div>
                                <div className="relative h-48">
                                    <Image
                                        src={fotoImage}
                                        alt="foto-dr"
                                        fill
                                        className="object-cover "
                                        quality={100}
                                    />
                                </div>
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Clinica Centro
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Rua x, centro, campo grande - MS
                                        </p>
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 text-emerald-500 flex items-center justify-center">.</div>
                                </div>

                                <Link
                                    href="/"
                                    className="bg-emerald-500 w-full hover:bg-emerald-400 text-white flex items-center justify-center py-2
                                    text-sm 
                                    font-medium rounded-md
                                    lg:text-base">
                                    Agende seu horário
                                    <ArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                </section>
            </div>

        </section>
    );
}

