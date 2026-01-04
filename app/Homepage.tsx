import React from "react";
import NavBar from "./components/NavBar";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col pt-16">
      <NavBar />
      <div className="layout-container flex h-full grow flex-col px-4">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col flex-1 w-full">
            <main>
              <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-16 @[480px]:gap-8 @[864px]:flex-row @[864px]:items-center">
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-4 text-left">
                      <h1 className="text-text-primary text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Free, Simple Tax Help for the UMD Community.
                      </h1>
                      <h2 className="text-text-primary/80 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
                      We are a non-profit affiliated with UMD.
                      Under the guidance of Professor Samuel Handwerger, CPA, TerpTax provides free tax preparation services to low to mid-income individuals in the University of Maryland, College Park community according to VITA/TCE guidelines. We will be taking appointments from February 10, 2026, through April 14, 2026.
                      </h2>
                    </div>
                    <button className="flex w-fit min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
                      <span className="truncate">
                        <Link href="/booking">Book Your Free Appointment</Link>
                      </span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                    data-alt="A diverse group of students collaborating in a friendly environment."
                    style={{
                      backgroundImage: `url("/accountant.webp")`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="bg-background-alt">
                <div className="flex flex-col gap-10 px-4 py-16 @container w-full">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-text-primary tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      How It Works
                    </h1>
                    <p className="text-text-primary/80 text-base font-normal leading-normal">
                      Getting your taxes done with TerpTax is easy. Follow these
                      simple steps to get started with our free service.
                    </p>
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-0">
                    <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 bg-background-light p-4 flex-col">
                      <div
                        className="text-primary"
                        data-icon="CheckCircle"
                        data-size="24px"
                        data-weight="regular"
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 32 }}
                        >
                          checklist
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          1. Check Eligibility
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          Find out if you qualify for our free tax preparation
                          services based on income and tax situation.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 bg-background-light p-4 flex-col">
                      <div
                        className="text-primary"
                        data-icon="Calendar"
                        data-size="24px"
                        data-weight="regular"
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 32 }}
                        >
                          calendar_month
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          2. Book Appointment
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          Easily schedule a convenient time to meet with one of
                          our certified volunteers.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-3 rounded-xl border border-slate-200 bg-background-light p-4 flex-col">
                      <div
                        className="text-primary"
                        data-icon="FileText"
                        data-size="24px"
                        data-weight="regular"
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ fontSize: 32 }}
                        >
                          description
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-text-primary text-lg font-bold leading-tight">
                          3. Get Your Taxes Done
                        </h2>
                        <p className="text-text-primary/70 text-sm font-normal leading-normal">
                          Bring your documents and let our team guide you
                          through the filing process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-10 px-4 py-16 @container items-center">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="flex-1 w-full">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                      data-alt="TerpTax volunteers helping a student with their taxes."
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuArONH8LjzNujlept3LUBBobwLKH5vKEIBdkVL7nBpXcmhNwf2-Ez-cCPMe9jTXShz9jniy4UahDxb6c7tqORC1XFrxm9gOOW9Kanzv1iW7IuI61z8fjdjY9oVlydPDhWvp7OP6s3Gmi0uQwYpSk2Vv0IpxjCDVPWVKAaZ9H6djXMKzljIaglxMiLkO2IYprDUTaVlUiTcMSwwC6tgwPKw-dJKWiQr1ToChlQkNf6N9wsgd2kLvrHRFwkEySnJYX6mWYhgosJgifOAs")`,
                      }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-text-primary tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Our Mission
                      </h1>
                      <p className="text-text-primary/80 text-base font-normal leading-normal">
                        TerpTax is a student-run, nonprofit organization
                        committed to providing free and reliable tax assistance.
                        We aim to empower the UMD community by simplifying the
                        tax filing process and promoting financial literacy.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] w-fit hover:bg-primary/30 transition-colors">
                      <span className="truncate">
                        <Link href="/about">Learn More About Us</Link>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-background-alt">
                <div className="flex flex-col gap-10 px-4 py-16 w-full">
                  <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-text-primary text-[32px] font-bold leading-tight tracking-[-0.015em]">
                      What Our Clients Say
                    </h2>
                    <p className="text-text-primary/80 text-base font-normal leading-normal">
                      Hear from members of the UMD community who have used our
                      free service.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-background-light p-6">
                      <p className="text-text-primary/80 text-base font-normal">
                        TerpTax made filing my taxes so much less stressful. The
                        volunteers were incredibly helpful and patient!
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full bg-center bg-cover"
                          data-alt="Profile picture of Sarah L."
                          style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAc2sAoee6e8YLAQIwYlBIkW-MaayiyW8H67kZsDggw8g2n6tH7Yh2fq2cUL9m0XEcsjVz5ahjOtdXs1XmlH5Bx8stqu63l5S2D7NGBB4xG9KrgXy_uarZ2YRRCz6Kalo2tHGPQW477sTy1oP4186pS2Lw5QH-6X0ywo2f2YGt3SeeR2Gu1u6coiyIrOrQrAbR30MGTZ8TFbwL1nSPOquZnHZa7i346Yb2dAOg-z43tatzzwdh35qglOy9FCIulLi7aEncCNvCujaim')`,
                          }}
                        ></div>
                        <p className="text-text-primary text-sm font-bold">
                          Sarah L. - Grad Student
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-background-light p-6">
                      <p className="text-text-primary/80 text-base font-normal">
                        As an international student, I had no idea where to
                        start. TerpTax guided me through the entire process.
                        Highly recommend!
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full bg-center bg-cover"
                          data-alt="Profile picture of David C."
                          style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0pu0IJzk6job8kjOkT8B4XFd50Fg3pjynhZi9CWBIQjCn5oK6rfou--s5FprzaZvKAZPgC3ZtXjzsNm-vLKd0PEzVkQydhFcLhpyRHUkZVXyEFT9yHvMTUQYt7yKy7vjLQE1czpwgR1VfO_dBKl3XLQpKmjsOKGl3iPJyBMBlhgixf3IQR3ChqXa9_aV8iRDPvGf-9uYaFxVk_OhG2nr6a3RrbCkZPqYbkwuA_2oVQCNfclfIdyzlxu8279jq9l3sCOfjAMR-NnNu')`,
                          }}
                        ></div>
                        <p className="text-text-primary text-sm font-bold">
                          David C. - Undergraduate
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-background-light p-6">
                      <p className="text-text-primary/80 text-base font-normal">
                        I was amazed that a service this professional was
                        completely free. A fantastic resource for the UMD
                        community.
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full bg-center bg-cover"
                          data-alt="Profile picture of Emily R."
                          style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHd2or6wlPZrPYbn9SZNVvmWmCLqLS3Rbv12JCWGtycGMAlHClUsB7GYy4HCHIx-vM0Q71JDQszDLXF6QxwlSBBpAMlt-SMpOAkfcJWPEdtal9pYjNikNfrmGZop3r7w54AQZVo9wNTocd8gGdTtq_HAJet8V9ealpVeV3HUJi6jre1vZwGrHfk0pMKEoOGQ5kUWXTPt3sqSSozK7iH3iFhSaeEolysRVjF8iABSCEBxpJzObkVEwpyy4xzQStj_KQQCNGmx0OhO5-')`,
                          }}
                        ></div>
                        <p className="text-text-primary text-sm font-bold">
                          Emily R. - UMD Staff
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-16">
                <div className="bg-text-primary text-white rounded-xl flex flex-col items-center gap-6 p-10 text-center">
                  <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">
                    Ready to file with confidence?
                  </h2>
                  <p className="text-white/80 max-w-lg">
                    Schedule your free appointment today and let our certified
                    volunteers handle the rest. It&apos;s simple, secure, and
                    completely free.
                  </p>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
                    <span className="truncate">
                      <Link href="/booking">Book Your Appointment Now</Link>
                    </span>
                  </button>
                </div>
              </div>

              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
