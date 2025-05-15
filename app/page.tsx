"use client"

import Wrapper from "@/components/layout/wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { skillsItems } from "@/data/skills";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <>
      <main className="mt-[65px]">
        <section id="home" className="scroll-mt-[65px]">
          <Wrapper className="py-20 flex flex-col-reverse gap-y-20 md:flex-row">
            <div className="flex-1/2">
              <h1 className="font-audiowide font-extrabold text-2xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mamadou Baillo Diallo</h1>
              <h2 className="mt-2 mb-4 text-xl md:text-2xl font-bold text-secondary">
                <ReactTyped
                  strings={[
                    "Développeur Web",
                    "Développeur Mobile",
                    "Passionné par l'IA"
                  ]}
                  typeSpeed={60}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </h2>

              <p>
                Spécialisé en <Badge variant="secondary">Django</Badge>, <Badge variant="secondary">Next.js</Badge> et <Badge variant="secondary" >Expo</Badge>. Je crée des applications modernes, intuitives et performantes. Passionné par l{"'"}IA, je m{"'"}efforce d{"'"}intégrer des technologies de pointe dans mes projets pour repousser les limites du possible.
              </p>

              <div className="mt-5 flex gap-5">
                <Link href="#projects" className={buttonVariants({ size: "lg" })}>
                  Voir mes projets
                </Link>
                <Link href="#contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="flex-1/2 flex items-center justify-center">
              <Image src="/baillo.png" alt="Mamadou Baillo Diallo" width={320} height={320} className="rounded-full" />
            </div>
          </Wrapper>
        </section>

        <section id="skills" className="scroll-mt-[65px] min-h-svh bg-foreground/5">
          <Wrapper className="py-16">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">Compétences</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {skillsItems.map((skill) => (
                <Card key={skill.title}>
                  <CardHeader>
                    <div className="mb-4">{skill.icon}</div>
                    <CardTitle>{skill.title}</CardTitle>
                    <CardDescription className="mt-2 text-xs md:text-sm">{skill.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>


          </Wrapper>

        </section>

        <section id="projects" className="scroll-mt-[65px] min-h-svh">
          <Wrapper className="py-16">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary text-center mb-10">
              Projets
            </h2>
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <Card className="group relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain blur-sm group-hover:blur-none transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center gap-2 text-gray-100 group-hover:opacity-0 transition-opacity duration-300">
                        <CardHeader className="text-xl md:text-2xl font-bold">
                          {project.title}
                        </CardHeader>
                        <CardContent className="text-xs md:text-sm leading-7">
                          {project.description}
                        </CardContent>
                        <CardFooter>
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="mr-2">{tech}</Badge>
                          ))}
                        </CardFooter>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </Wrapper>

        </section>

        <section id="about" className="scroll-mt-[65px] min-h-svh bg-foreground/5">
          <Wrapper className="py-16">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">A propos</h2>

          </Wrapper>
        </section>

        <section id="contact" className="scroll-mt-[65px] min-h-svh">

          <Wrapper className="py-16">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">Me contacter</h2>

          </Wrapper>
        </section>
      </main >
    </>
  );
}