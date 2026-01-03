import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import vmh from "@/public/vmh.jpg";

export default function AboutPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col pt-16">
      <NavBar />
      <main className="grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 z-10"></div>
          <div
            className="relative w-full py-24 sm:py-32 flex flex-col items-center justify-center text-center text-white"
            style={{
              backgroundImage: `url(${vmh.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter relative z-20">
              Community-Focused Tax Help, For Free.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-200 relative z-20">
              TerpTax is a student-run, non-profit organization dedicated to
              providing free and reliable tax preparation services to the
              community.
            </p>
          </div>
        </section>

        {/* Mission, Values, and History */}
        <div className="bg-background-alt py-16 sm:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission Statement Card */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white">
                Our Mission
              </h2>
              <p className="mt-4 text-base font-normal leading-normal text-white">
                Our mission is to empower individuals and families in our
                community by providing accessible, high-quality, and free tax
                preparation services. We are committed to alleviating the
                financial burden of tax season and educating the public on
                financial literacy.
              </p>
            </div>

            {/* Our Values */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-primary">
                Our Values
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 24 }}
                    >
                      groups
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">
                    Community
                  </h3>
                  <p className="mt-1 text-sm text-text-primary/70">
                    We are dedicated to serving and strengthening our local
                    community.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 24 }}
                    >
                      verified_user
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">
                    Integrity
                  </h3>
                  <p className="mt-1 text-sm text-text-primary/70">
                    We uphold the highest standards of accuracy and
                    confidentiality.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 24 }}
                    >
                      school
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-text-primary">
                    Education
                  </h3>
                  <p className="mt-1 text-sm text-text-primary/70">
                    We empower clients through financial literacy and tax
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* History Timeline */}
          <div className="container mx-auto px-4 mt-16 sm:mt-24">
            <h2 className="text-center text-3xl font-bold leading-tight tracking-tighter text-text-primary">
              Our History
            </h2>
            <div className="relative mt-12">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-300"
              ></div>
              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="relative flex items-center">
                  <div className="hidden sm:flex sm:w-1/2 sm:pr-8 sm:justify-end">
                    <div className="text-right">
                      <p className="font-bold text-lg text-text-primary">
                        Founded in 2018
                      </p>
                      <p className="text-sm text-text-primary/70">
                        A small group of students launched TerpTax to help
                        fellow students and local residents.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="sm:hidden">
                      <p className="font-bold text-lg text-text-primary">
                        Founded in 2018
                      </p>
                      <p className="text-sm text-text-primary/70">
                        A small group of students launched TerpTax to help
                        fellow students and local residents.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right">
                    <div className="sm:hidden">
                      <p className="font-bold text-lg text-text-primary">
                        100 Returns Filed
                      </p>
                      <p className="text-sm text-text-primary/70">
                        In our second year, we celebrated filing over 100 tax
                        returns for the community, free of charge.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                  <div className="hidden sm:flex sm:w-1/2 sm:pl-8">
                    <div>
                      <p className="font-bold text-lg text-text-primary">
                        100 Returns Filed
                      </p>
                      <p className="text-sm text-text-primary/70">
                        In our second year, we celebrated filing over 100 tax
                        returns for the community, free of charge.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center">
                  <div className="hidden sm:flex sm:w-1/2 sm:pr-8 sm:justify-end">
                    <div className="text-right">
                      <p className="font-bold text-lg text-text-primary">
                        Expanded Services
                      </p>
                      <p className="text-sm text-text-primary/70">
                        We began offering workshops on financial literacy and
                        tax basics to local high schools.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="sm:hidden">
                      <p className="font-bold text-lg text-text-primary">
                        Expanded Services
                      </p>
                      <p className="text-sm text-text-primary/70">
                        We began offering workshops on financial literacy and
                        tax basics to local high schools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-text-primary">
              Meet the Team
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-text-primary/80">
              Our dedicated team of student volunteers and faculty advisors.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Team Member Card */}
              <div className="flex flex-col items-center">
                <Image
                  className="h-32 w-32 rounded-full object-cover"
                  alt="Professional headshot of Jane Doe"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWQpZG8CfLVIONYt5mxRUV4ZfS4KQq8iJlEEdT_9m6Y3ecNIptSSpq36cN__fxd-yNnX26IX3hCj8C64T2JguzaQc-S5uobnZ9rf44Ne_IuStiLQnQVmT65Je8K6S4HpREjZbd3F4M6343mX_dY3T0epNWLnZDGIlkrRmbeRlp4b0ZzgMk65iwr75mIZtQGb_et0enVOXcunFCUowTChrlw9-pp-vkhXiNGCvxLeinmaMn_8onO5-t_medEUUgqG-axgd42xwrg5v5"
                  width={128}
                  height={128}
                  unoptimized
                />
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  Jane Doe
                </h3>
                <p className="text-sm text-primary">Executive Director</p>
              </div>

              {/* Team Member Card */}
              <div className="flex flex-col items-center">
                <Image
                  className="h-32 w-32 rounded-full object-cover"
                  alt="Professional headshot of John Smith"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDurTuecK81f8to6L6xc_ARf6gsZLRsxaMUPjU6cgKwlp2oa_EXCnvJAzdwzsDEa8GBtnnun8j6CSJdrywn6pQCAXeGPgb1DyttHvfnSRJXzqdbP-yhqFtYOrDI7yEKVZ8GEeVUcTI-SI3K_8-qzqdgpXx0kHKre-PIbq1gceOdh3Fcy3Ni6eTmfLS-QSITiLXytNxRQLKyKwDrzKUQuu7f6T7GLEaW5reOaeKUjcHU7M1IIWbV-3aJdcr0gRW-BZyiZCfy4DCFHyUm"
                  width={128}
                  height={128}
                  unoptimized
                />
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  John Smith
                </h3>
                <p className="text-sm text-primary">Volunteer Coordinator</p>
              </div>

              {/* Team Member Card */}
              <div className="flex flex-col items-center">
                <Image
                  className="h-32 w-32 rounded-full object-cover"
                  alt="Professional headshot of Michael Chen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAANuHEdaoRzFmheDP7dzUJjFuCANmfxr7Y_8tm6rn33aRApDdD8BcXk_kBKOuiiy_QT0LGjdONGdcka5oyzBORL0g-duHDK4d-J7NgZCuFre1WAriCvDUlaGJ1vXjcfl_zSe6AGuv1ls_jOqr8OKq9hbnHKs02_3DQCuylpvC1yr0fkgut-ew6FT2uPgfoq3Z2C9X29R7j-UqsWkfnqZT1CcKZ1llgEpdBOV4HPA-L9r-lvsLkqCcHd93FOIGXty6tKamQi_CYeN15"
                  width={128}
                  height={128}
                  unoptimized
                />
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  Michael Chen
                </h3>
                <p className="text-sm text-primary">Faculty Advisor</p>
              </div>

              {/* Team Member Card */}
              <div className="flex flex-col items-center">
                <Image
                  className="h-32 w-32 rounded-full object-cover"
                  alt="Professional headshot of Sarah Lee"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmYlRchQ7qcBx6y5zg5NKgTsZYgGXZEB0jTCGeFc25Y7SyyUuKAkjOmBtKPVO4mxADQ_Zf9RuQCpyBVT3KGsiJ2LuO1T7bxQ-vkK6IoE9Gy4pcxujXCdqj0smPjFFa9MN5UgApvOYDg1I84bYMi48vblbVi02X9KUoDus0FsaohBXU8j62-KfWjCSP9wcmKB9uEdCOH2aH16ACEup_XP9rKOP_k0rALrpqL3w6NWAK0Guol2XasQ0TEDw6yAseuRZ4pXLl5KAig-B"
                  width={128}
                  height={128}
                  unoptimized
                />
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  Sarah Lee
                </h3>
                <p className="text-sm text-primary">Lead Tax Preparer</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background-alt">
          <div className="container mx-auto px-4 py-16 sm:py-24 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-text-primary">
              Ready to Get Involved?
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-text-primary/80">
              Whether you need help with your taxes or want to join our mission,
              we&apos;re here for you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-green-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
              >
                <span className="truncate">Volunteer With Us</span>
              </Link>
              <Link
                href="/booking"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity"
              >
                <span className="truncate">Get Tax Help</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
