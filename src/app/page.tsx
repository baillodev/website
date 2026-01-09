"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/layout/wrapper";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { skillsItems } from "@/data/skills";
import { projects } from "@/data/projects";
import { Filter, Search, SquareArrowOutUpRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cisco, coursera, odc } from "@/data/certifications";
import { useState } from "react";
import { Background } from "@/components/layout/background";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères.",
  }),
  email: z.string().email("Le format de l'adresse e-mail est invalide"),
  message: z
    .string()
    .min(10, {
      message: "Le message doit comporter au moins 10 caractères.",
    })
    .max(200, {
      message: "Le message ne doit pas dépasser 200 caractères.",
    }),
});

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok)
        throw new Error(
          result?.error || "Une erreur est survenue côté serveur."
        );

      setStatus("success");
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      console.log(err);
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <>
      <main className="mt-16">
        <Background />
        <section id="home" className="scroll-mt-16">
          <Wrapper className="relative py-20 flex flex-col-reverse gap-y-20 md:flex-row">
            <div className="flex-1/2">
              <h1 className="font-audiowide font-extrabold text-2xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mamadou Baillo Diallo
              </h1>
              <h2 className="mt-2 mb-4 text-xl md:text-2xl font-bold text-secondary">
                <ReactTyped
                  strings={[
                    "Développeur Web",
                    "Développeur Mobile",
                    "Intégrateur de solutions IA",
                  ]}
                  typeSpeed={60}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </h2>

              <p className="text-sm md:text-base leading-8">
                Je conçois des solutions modernes, performantes et ancrées dans
                le réel. Passionné par l&apos;IA et l&apos;impact social du numérique, je
                développe des produits utiles et durables pour demain, avec une
                stack solide et une vision claire.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row justify-start gap-5">
                <Link
                  href="#projects"
                  className={buttonVariants({ size: "lg" })}
                >
                  Voir mes projets
                </Link>
                <Link
                  href="#contact"
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  Me contacter
                </Link>
              </div>
            </div>

            <div className="flex-1/2 flex items-center justify-center">
              <Image
                src="/baillo.png"
                alt="Mamadou Baillo Diallo"
                width={280}
                height={280}
                className="rounded-full"
                priority
              />
            </div>
          </Wrapper>
        </section>

        <section id="skills" className="scroll-mt-16 bg-foreground/5">
          <Wrapper className="py-16">
            <div className="flex justify-between">
              <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">
                Compétences
              </h2>

              <div className="flex gap-4">
                <Search />
                <Filter />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {skillsItems.map((skill) => (
                <Card
                  key={skill.title}
                  className="bg-card/50 hover:border-primary"
                >
                  <CardHeader>
                    <div className="mb-4">{skill.icon}</div>
                    <CardTitle>{skill.title}</CardTitle>
                    <CardDescription className="mt-2 text-xs md:text-sm">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Badge variant="secondary">{skill.category}</Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Wrapper>
        </section>

        <section id="projects" className="scroll-mt-16">
          <Wrapper className="relative py-16">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">
              Projets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {projects.map((project) => (
                <Card key={project.title} className="bg-card/50">
                  <CardHeader>
                    <div className="mb-4 relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="mt-2 text-xs md:text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col items-stretch gap-2">
                    <div className="flex justify-start">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      {project.websiteLink && (
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          className={buttonVariants({
                            variant: "link",
                            size: "lg",
                          })}
                        >
                          Voir le site
                          <SquareArrowOutUpRight />
                        </a>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Wrapper>
        </section>

        <section id="about" className="scroll-mt-16 bg-foreground/5">
          <Wrapper className="py-16 flex flex-col">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">
              A propos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src="/photo.jpg"
                    alt="Portrait de Baillo"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl mask-radial-at-top mask-radial-from-10%"
                  />
                  <Card className="absolute top-2 left-2">
                    <CardContent>
                      <code className="text-xs space-y-2">
                        <div>
                          <span className="text-primary">Name</span>:
                          <span className="text-foreground ml-1 before:content-['\''] after:content-['\'']">
                            Mamadou Baillo Diallo
                          </span>
                        </div>
                        <div>
                          <span className="text-primary font-semibold">
                            Role
                          </span>
                          :
                          <span className="text-foreground ml-1">
                            [&apos;Web&apos;, &apos;Mobile&apos;, &apos;AI&apos;]
                          </span>
                        </div>
                        <div>
                          <span className="text-primary font-semibold">
                            Stack
                          </span>
                          :
                          <span className="text-foreground ml-1">
                            [&apos;Django&apos;, &apos;Next.js&apos;, &apos;Expo&apos;]
                          </span>
                        </div>
                      </code>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="space-y-4 w-full max:w-md md:h-[448px] md:overflow-y-auto hide-scrollbar">
                <p className="leading-7 text-xs sm:text-sm italic">
                  Je m&apos;appelle Baillo. Je suis spécialisé en développement web, mobile et en intelligence artificielle. J&apos;utilise Django, Next.js, Expo, ainsi que des modèles d&apos;IA pour concevoir des expériences modernes, fluides et orientées impact.
                </p>
                <p className="leading-7 text-xs sm:text-sm italic">
                  Je poursuis des études en génie logiciel, mais mon apprentissage va bien au-delà. Je complète avec des projets concrets, de la veille active et des formations ciblées pour rester sharp.
                </p>
                <p className="leading-7 text-xs sm:text-sm italic">
                  L&apos;IA n’est pas un gadget pour moi. Je l&apos;intègre quand elle fait sens : classification, prédiction, personnalisation… Mon objectif, c&apos;est de créer des apps plus intelligentes, pas plus compliquées.
                </p>
                <p className="leading-7 text-xs sm:text-sm italic">
                  Ligne par ligne, je trace ma route. Rigueur, intention, créativité. J&apos;écris du code pour résoudre, pour transmettre, et pour construire ce qui vient après.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-audiowide font-semibold text-xl md:text-2xl text-secondary mb-16">
                🎓 Formations
              </h3>
              <div className="flex flex-wrap gap-24">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="-mt-1 h-[200px]">
                    {coursera.map((item, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                          <Card className="group relative aspect-video overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain blur-sm group-hover:blur-none transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center gap-2 text-gray-100 group-hover:opacity-0 transition-opacity duration-300">
                              <CardHeader className="text-base font-bold">
                                {item.title}
                              </CardHeader>
                              <CardContent className="text-xs leading-6">
                                {item.description}
                              </CardContent>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="-mt-1 h-[200px]">
                    {odc.map((item, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                          <Card className="group relative aspect-video overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain blur-sm group-hover:blur-none transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center gap-2 text-gray-100 group-hover:opacity-0 transition-opacity duration-300">
                              <CardHeader className="text-base font-bold">
                                {item.title}
                              </CardHeader>
                              <CardContent className="text-xs leading-6">
                                {item.description}
                              </CardContent>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

                <Carousel
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
                  className="w-full max-w-xs"
                >
                  <CarouselContent className="-mt-1 h-[200px]">
                    {cisco.map((item, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                          <Card className="group relative aspect-video overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain blur-sm group-hover:blur-none transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center gap-2 text-gray-100 group-hover:opacity-0 transition-opacity duration-300">
                              <CardHeader className="text-base font-bold">
                                {item.title}
                              </CardHeader>
                              <CardContent className="text-xs leading-6">
                                {item.description}
                              </CardContent>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </Wrapper>
        </section>

        <section id="contact" className="scroll-mt-16">
          <Wrapper className="relative py-16">
            <h2 className="font-audiowide font-bold text-2xl md:text-4xl text-secondary mb-10">
              Me contacter
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-md space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Entrez votre nom complet"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Entrez votre email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Ecrivez votre message..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <Button type="submit">
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </Button>
                {status === "success" && (
                  <p className="text-green-600">
                    ✅ Message envoyé avec succès !
                  </p>
                )}
                {status === "error" && (
                  <p className="text-destructive">
                    ❌ Une erreur est survenue.
                  </p>
                )}
              </form>
            </Form>
          </Wrapper>
        </section>
      </main>
    </>
  );
}
