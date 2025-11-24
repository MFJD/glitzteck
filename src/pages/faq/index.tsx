"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // FIX: Import Link

import Footer from "../components/footer";
import ScrollToTopButton from "@/components/scrollButton";
import Head from "../components/head";

// Redesigned FAQ for Glitzteck
// - Primary color set to #2c7081 via CSS variable
// - Smaller overall text sizes (text-sm base)
// - New header implemented inline (replaces external Head component so you can preview)
// - Clean, modern UI with card grid, subtle shadows, and micro-interactions

type FAQItem = { id: string; q: string; a: string; tags?: string[] };

const FAQ_DATA: FAQItem[] = [
    { id: "faq-1", q: "What services does Glitzteck provide?", a: `We provide end-to-end software engineering and product services: product discovery & prototyping, full-stack web and mobile apps, design systems, project & delivery management (roadmaps, sprints, KPIs), cloud & DevOps (Kubernetes, serverless, IaC), and cybersecurity (threat modeling, pen‑testing, compliance guidance).`, tags: ["general"] },
    { id: "faq-2", q: "How do you approach product discovery?", a: `We start with stakeholder interviews, user research, and rapid prototyping to validate core assumptions and align on a prioritized roadmap. Deliverables typically include user journeys, clickable prototypes, and a tech feasibility report.`, tags: ["discovery", "process"] },
    { id: "faq-3", q: "Can you build both web and mobile apps?", a: `Yes — our team builds responsive web apps and native-like mobile experiences. We use modern stacks (React/Next.js, React Native or Flutter where appropriate) and follow design system principles so your product feels consistent across platforms.`, tags: ["web", "mobile"] },
    { id: "faq-4", q: "Do you provide design and UX work?", a: `Absolutely. We design crisp, usable interfaces and craft reusable design systems so future features ship faster while staying consistent. Our UX process includes wireframes, high-fidelity mocks, and interactive prototypes.`, tags: ["design"] },
    { id: "faq-5", q: "How do you manage projects and delivery?", a: `We apply Agile/Lean practices with clear roadmaps, sprint planning, and stakeholder ceremonies. We set KPIs and provide transparent reporting so delivery becomes predictable and measurable.`, tags: ["delivery", "process"] },
    { id: "faq-6", q: "Which cloud platforms do you work with?", a: `We work across AWS, Azure, and Google Cloud Platform. We design cloud architectures tailored to your needs — whether that's Kubernetes clusters, serverless functions, or hybrid solutions — with CI/CD pipelines and infrastructure-as-code.`, tags: ["cloud", "devops"] },
    { id: "faq-7", q: "What DevOps practices are included?", a: `We implement CI/CD pipelines, automated testing, IaC (Terraform/CloudFormation), observability (logs, metrics, traces), autoscaling, and runbooks so teams can deploy safely and iterate quickly.`, tags: ["devops"] },
    { id: "faq-8", q: "How do you handle security?", a: `Security is embedded in our lifecycle: threat modeling during design, secure coding practices, periodic penetration testing, remediation, and compliance guidance (GDPR, SOC2-level practices, etc.). We also help set up incident response and monitoring.`, tags: ["security"] },
    { id: "faq-9", q: "Can you integrate with our existing vendors and tooling?", a: `Yes — we coordinate with vendors, integrate APIs, and ensure new systems fit your toolchain. We document decisions and provide clear handoffs so teams can continue without disruption.`, tags: ["integration", "delivery"] },
    { id: "faq-10", q: "What does pricing and engagement look like?", a: `We offer flexible engagement models: fixed-scope projects, time-and-materials, and outcome-focused retainers. Pricing depends on scope, complexity, and delivery timelines — we usually begin with a discovery phase to scope accurately.`, tags: ["pricing"] },
    { id: "faq-11", q: "How long does a typical project take?", a: `Timelines vary. Small MVPs can be delivered in 6–12 weeks; more complex platforms often require several months of iterative delivery. We break work into shippable increments and share a clear roadmap so you always know what's next.`, tags: ["timeline"] },
    { id: "faq-12", q: "Do you provide post-launch support and maintenance?", a: `Yes. We provide SLA-backed support, runbook-driven incident work, and continuous improvement plans. Support can include security patches, feature maintenance, and performance optimizations.`, tags: ["support"] },
    { id: "faq-13", q: "Can you help achieve compliance for regulated industries?", a: `We guide compliance efforts (e.g., GDPR, sector-specific standards) by aligning technical controls, policies, and documentation. For high-regulation use cases we collaborate with legal and compliance specialists.`, tags: ["compliance", "security"] },
    { id: "faq-14", q: "What are your onboarding steps for new clients?", a: `Onboarding usually includes a kickoff workshop, stakeholder alignment, access provisioning, discovery interviews, and an initial sprint plan. We aim for a fast, documented start so work begins smoothly.`, tags: ["onboarding", "process"] },
    { id: "faq-15", q: "How do you measure success?", a: `We set measurable KPIs aligned to your business goals (activation, retention, performance, uptime). Regular reporting and analytics review sessions help us iterate toward those outcomes.`, tags: ["measurement", "kpi"] }
];

const ChevronIcon: React.FC<{ open?: boolean }> = ({ open }) => (
    <svg className={`w-4 h-4 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function AboutUsFAQ(): JSX.Element {
    const [openSet, setOpenSet] = useState<Record<string, boolean>>({ [FAQ_DATA[0].id]: true });
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return FAQ_DATA;
        return FAQ_DATA.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q) || (f.tags || []).some(t => t.includes(q)));
    }, [query]);

    function toggleSet(id: string) { setOpenSet(s => ({ ...s, [id]: !s[id] })); }
    function expandAll() { const obj: Record<string, boolean> = {}; filtered.forEach(f => (obj[f.id] = true)); setOpenSet(obj); }
    function collapseAll() { setOpenSet({}); }

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} style={{ ['--primary' as any]: '#2c7081' }} className="min-h-screen bg-gray-50 text-gray-800 font-sans text-sm">
            <ScrollToTopButton />

            <Head />
            <ScrollToTopButton />

            <main className="max-w-6xl mx-auto px-6 pt-28  pb-10">
                <section className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100">
                    <div className="md:flex md:items-start md:justify-between gap-6">
                        <div className="md:flex-1">
                            <h1 className="text-2xl md:text-3xl font-extrabold leading-snug">FAQ — Answers about our services and delivery</h1>
                            <p className="mt-2 text-sm text-gray-600 max-w-2xl">Clear, concise answers about how we work, what we build, and how to get started. Use search to find a topic quickly.</p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <button onClick={expandAll} className="text-sm px-3 py-2 rounded-full border border-gray-200">Expand all</button>
                                <button onClick={collapseAll} className="text-sm px-3 py-2 rounded-full border border-gray-200">Collapse all</button>
                                {/* FIX: Replaced <a> with <Link> */}
                                <Link href="/contact" passHref legacyBehavior>
                                    <a className="text-sm px-3 py-2 rounded-full" style={{ border: '1px solid rgba(44,112,129,0.12)', background: 'rgba(44,112,129,0.06)', color: 'var(--primary)' }}>Get in touch</a>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full md:w-72 mt-4 md:mt-0">
                            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
                            <div className="relative">
                                <input id="faq-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search FAQs..." className="w-full rounded-lg border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2" />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">⌘K</div>
                            </div>
                            <div className="mt-2 text-xs text-gray-500">Showing <span className="font-medium">{filtered.length}</span> results</div>
                        </div>
                    </div>
                </section>

                <section className="mt-8 grid grid-cols-1 gap-4">
                    {filtered.map(item => {
                        const isOpen = !!openSet[item.id];
                        return (
                            <article key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                                <button aria-expanded={isOpen} aria-controls={`${item.id}-panel`} onClick={() => toggleSet(item.id)} className="w-full text-left p-4 md:p-5 flex items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-sm md:text-base font-semibold">{item.q}</h3>
                                        <div className="mt-1 text-xs text-gray-500 line-clamp-2">{item.a}</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="p-2 rounded-full border border-gray-100 shadow-sm" style={{ background: isOpen ? 'linear-gradient(90deg,var(--primary),#3fa0ab)' : 'white', color: isOpen ? 'white' : 'var(--primary)' }}>
                                            <ChevronIcon open={isOpen} />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div id={`${item.id}-panel`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="px-5 pb-5 pt-0 bg-gradient-to-b from-white to-gray-50">
                                            <div className="prose max-w-none text-gray-700 text-sm">
                                                <p>{item.a}</p>
                                            </div>

                                            <div className="mt-3 flex flex-wrap gap-3">
                                                {/* FIX: Replaced <a> with <Link> */}
                                                <Link href="/contact" passHref legacyBehavior>
                                                    <a className="text-sm font-medium underline">Contact our team</a>
                                                </Link>
                                                {/* FIX: Replaced <a> with <Link> */}
                                                <Link href="/services" passHref legacyBehavior>
                                                    <a className="text-sm font-medium underline">Explore services</a>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </article>
                        );
                    })}

                    {filtered.length === 0 && (
                        <div className="text-center py-10 bg-white rounded-xl shadow-sm">
                            {/* FIX: Escaped quotes */}
                            <p className="text-gray-600">No results for &quot;<span className="font-medium">{query}</span>&quot;.</p>
                            {/* FIX: Replaced <a> with <Link> */}
                            <p className="mt-3 text-sm">Try other keywords (e.g., cloud, security, pricing) or <Link href="/contact" passHref legacyBehavior><a className="underline">contact us</a></Link>.</p>
                        </div>
                    )}
                </section>

                <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-white rounded-xl p-5 shadow-md border border-gray-100">
                        <h4 className="text-sm font-semibold">Need a custom answer?</h4>
                        <p className="mt-2 text-xs text-gray-600">If your question is specific to your product or industry, book a short discovery call and we’ll prepare concrete next steps.</p>
                        <div className="mt-4">
                            {/* FIX: Replaced <a> with <Link> */}
                            <Link href="/contact" passHref legacyBehavior>
                                <a className="inline-block px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Schedule a call</a>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <h4 className="text-sm font-semibold">Resources</h4>
                        <ul className="mt-3 text-xs text-gray-600 space-y-2">
                            <li>- Case studies & testimonials</li>
                            <li>- Architecture & compliance whitepapers</li>
                            <li>- Getting started guide for Cloud & DevOps</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <h4 className="text-sm font-semibold">Contact</h4>
                        <p className="mt-2 text-xs text-gray-600">Prefer email? Send us details about your project and we’ll reply within one business day.</p>
                        <div className="mt-3">
                            {/* FIX: Replaced <a> with <Link> */}
                            <Link href="/contact" passHref legacyBehavior>
                                <a className="inline-block text-sm font-medium underline">/contact</a>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
            <div className="h-6" />
        </motion.div>
    );
}