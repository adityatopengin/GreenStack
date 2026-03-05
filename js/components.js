/**
 * GreenStack Fuels - Modular Component Injector
 * This file replaces the React rendering engine with simple JS injection.
 */

const injectComponents = () => {
    // 1. HERO COMPONENT
    const heroHTML = `
        <div class="glass-panel p-8 h-full flex flex-col justify-center relative">
            <div class="relative z-10">
                <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-brand-emerald uppercase bg-brand-emerald/10 rounded-full border border-brand-emerald/20">
                    Zero-Coal Alternative
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
                    Powering Maharashtra's <span class="text-brand-emerald">Industrial Future.</span>
                </h1>
                <p class="text-brand-muted text-lg leading-relaxed mb-8 max-w-md">
                    We are building the state's most advanced biomass pellet hub. Delivering high-calorific, carbon-neutral fuel to replace coal and empower local farmers.
                </p>
                <button class="bg-brand-emerald text-brand-dark px-6 py-3 rounded-lg font-bold w-max hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                    Join the Waitlist
                </button>
            </div>
            <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl -z-10"></div>
        </div>
    `;

    [span_0](start_span)// 2. SPECS COMPONENT[span_0](end_span)
    const specsHTML = `
        <div class="glass-panel p-6 h-full flex flex-col justify-between">
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-xl font-bold text-brand-text">Target Specifications</h3>
                <span class="text-xs font-medium bg-brand-emerald/10 text-brand-emerald px-2 py-1 rounded-full border border-brand-emerald/20">MNRE Standard</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-start space-x-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                    <div class="p-2 bg-brand-dark rounded-lg border border-white/5"><i data-lucide="flame" class="w-4 h-4 text-brand-emerald"></i></div>
                    <div><p class="text-xs text-brand-muted uppercase">Calorific Value</p><p class="font-semibold text-sm">3,800 - 4,200 kcal/kg</p></div>
                </div>
                <div class="flex items-start space-x-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                    <div class="p-2 bg-brand-dark rounded-lg border border-white/5"><i data-lucide="wind" class="w-4 h-4 text-brand-emerald"></i></div>
                    <div><p class="text-xs text-brand-muted uppercase">Ash Content</p><p class="font-semibold text-sm">&lt; 3%</p></div>
                </div>
                <div class="flex items-start space-x-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                    <div class="p-2 bg-brand-dark rounded-lg border border-white/5"><i data-lucide="droplets" class="w-4 h-4 text-brand-emerald"></i></div>
                    <div><p class="text-xs text-brand-muted uppercase">Moisture</p><p class="font-semibold text-sm">&lt; 10%</p></div>
                </div>
                <div class="flex items-start space-x-3 bg-brand-dark/40 p-3 rounded-xl border border-white/5">
                    <div class="p-2 bg-brand-dark rounded-lg border border-white/5"><i data-lucide="leaf" class="w-4 h-4 text-brand-emerald"></i></div>
                    <div><p class="text-xs text-brand-muted uppercase">Raw Material</p><p class="font-semibold text-sm">Agri-Waste</p></div>
                </div>
            </div>
        </div>
    `;

    [span_1](start_span)// 3. ROADMAP COMPONENT[span_1](end_span)
    const roadmapHTML = `
        <div class="glass-panel p-6 h-full">
            <h3 class="text-xl font-bold text-brand-text mb-1">Project Roadmap</h3>
            <p class="text-xs text-brand-muted mb-6">Targeting full commercial capacity.</p>
            <div class="timeline-container space-y-6">
                <div class="relative pl-6">
                    <div class="timeline-dot active"></div>
                    <p class="text-sm font-bold text-brand-text">Site Acquisition</p>
                    [span_2](start_span)<p class="text-xs text-brand-muted">Q1 2026[span_2](end_span)</p>
                </div>
                <div class="relative pl-6">
                    <div class="timeline-dot"></div>
                    <p class="text-sm font-bold text-brand-emerald">Machinery Setup</p>
                    [span_3](start_span)<p class="text-xs text-brand-muted">Q2 2026[span_3](end_span)</p>
                </div>
                <div class="relative pl-6">
                    <div class="timeline-dot opacity-30"></div>
                    <p class="text-sm font-bold text-brand-muted">Pilot Run</p>
                    [span_4](start_span)<p class="text-xs text-brand-muted">Q3 2026[span_4](end_span)</p>
                </div>
            </div>
        </div>
    `;

    // 4. CONTACT COMPONENT
    const contactHTML = `
        <div id="contact-inner" class="glass-panel p-6 h-full flex flex-col justify-center">
            <h3 class="text-xl font-bold text-brand-emerald mb-2">Partner With Us</h3>
            <p class="text-xs text-brand-muted mb-6">Secure your 2026 biomass supply.</p>
            <form id="contact-form" class="space-y-4">
                <input type="text" placeholder="Company Name" required class="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-brand-emerald">
                <select class="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-2 text-sm text-brand-muted focus:border-brand-emerald appearance-none">
                    <option>Monthly Need (Tons)</option>
                    <option>50-200 Tons</option>
                    <option>200-500 Tons</option>
                    <option>500+ Tons</option>
                </select>
                <input type="tel" placeholder="Phone / WhatsApp" required class="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-brand-emerald">
                <button type="submit" class="w-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/50 hover:bg-brand-emerald hover:text-brand-dark font-bold py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
                    Request Quote <i data-lucide="send" class="w-4 h-4"></i>
                </button>
            </form>
        </div>
    `;

    [span_5](start_span)// 5. IMPACT COMPONENT[span_5](end_span)
    const impactHTML = `
        <div class="glass-panel p-8 mt-4 border-t border-brand-emerald/20 text-center">
            <h3 class="text-2xl font-bold text-brand-text mb-2 uppercase tracking-wide">The Waste-to-Wealth Cycle</h3>
            [span_6](start_span)<p class="text-brand-muted text-sm max-w-2xl mx-auto mb-8">Empowering Maharashtra by turning agricultural liability into industrial asset.[span_6](end_span)</p>
            <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                <div class="flex flex-col items-center bg-brand-dark/40 p-5 rounded-2xl border border-white/5 w-48">
                    <div class="bg-brand-emerald/10 p-3 rounded-full mb-3"><i data-lucide="tractor" class="text-brand-emerald"></i></div>
                    <h4 class="font-bold text-sm">Agri-Waste</h4>
                </div>
                <div class="arrow-connector hidden md:flex"><i data-lucide="arrow-right"></i></div>
                <div class="flex flex-col items-center bg-brand-dark/40 p-5 rounded-2xl border border-white/5 w-48">
                    <div class="bg-brand-emerald/10 p-3 rounded-full mb-3"><i data-lucide="factory" class="text-brand-emerald"></i></div>
                    <h4 class="font-bold text-sm">GreenStack</h4>
                </div>
                <div class="arrow-connector hidden md:flex"><i data-lucide="arrow-right"></i></div>
                <div class="flex flex-col items-center bg-brand-dark/40 p-5 rounded-2xl border border-white/5 w-48">
                    <div class="bg-brand-emerald/10 p-3 rounded-full mb-3"><i data-lucide="power" class="text-brand-emerald"></i></div>
                    <h4 class="font-bold text-sm">Clean Energy</h4>
                </div>
            </div>
        </div>
    `;

    // Inject into index.html
    document.getElementById('hero-container').innerHTML = heroHTML;
    document.getElementById('specs-container').innerHTML = specsHTML;
    document.getElementById('roadmap-container').innerHTML = roadmapHTML;
    document.getElementById('contact-container').innerHTML = contactHTML;
    document.getElementById('impact-container').innerHTML = impactHTML;

    // Handle Form Submission State
    document.getElementById('contact-form').onsubmit = (e) => {
        e.preventDefault();
        document.getElementById('contact-inner').innerHTML = `
            <div class="flex flex-col items-center justify-center text-center py-8">
                <i data-lucide="check-circle" class="text-brand-emerald w-12 h-12 mb-4"></i>
                <h4 class="text-lg font-bold">Request Received</h4>
                <p class="text-xs text-brand-muted mt-2">Our team will contact you shortly.</p>
            </div>
        `;
        lucide.createIcons();
    };

    // Initialize icons
    if (window.lucide) {
        lucide.createIcons();
    }
};

document.addEventListener('DOMContentLoaded', injectComponents);

