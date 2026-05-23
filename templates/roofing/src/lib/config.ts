import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "DISALVO ROOFING",
    tagline: "Roofing Done Right, Every Time.",
    phone: "(702) 934-8599",
    phoneHref: "tel:+17029348599",
    email: "info@disalvoroofing.com",
    address: "123 Main St",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas"],
    license: "NV Lic. #000000",
    since: "2013",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "noir",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Residential Roofing", desc: "Expert installation and repair for all residential roof types.", urgent: false },
    { icon: "briefcase", title: "Commercial Roofing", desc: "Durable and reliable roofing solutions for businesses of all sizes.", urgent: false },
    { icon: "wrench", title: "Roof Repairs", desc: "Fast and effective repairs for leaks, damage, and wear.", urgent: true },
    { icon: "shield-check", title: "Roof Maintenance", desc: "Proactive care to extend your roof's lifespan and prevent issues.", urgent: false },
    { icon: "hammer", title: "Roof Replacement", desc: "Full re-roofing services with quality materials and craftsmanship.", urgent: false },
    { icon: "truck", title: "Emergency Roofing", desc: "24/7 rapid response for urgent roof damage and critical leaks.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Las Vegas", stars: 5, text: "Disalvo Roofing replaced our entire roof last spring. From the initial free estimate to the final inspection, their team was incredibly professional and efficient. They finished the job on time and within budget, and our new roof looks fantastic. Highly recommend their quality work!" },
    { name: "Michael P.", location: "Henderson", stars: 5, text: "Had a persistent leak after a heavy storm. Disalvo Roofing responded quickly, identified the problem area on my tile roof, and fixed it the very next day. The repair was thorough, and I haven't had any issues since. Their emergency service was a lifesaver!" },
    { name: "Emily R.", location: "Summerlin", stars: 5, text: "We've used Disalvo Roofing for maintenance on our commercial property for years. Their team is always punctual, respectful, and does an excellent job keeping our flat roof in top condition. Their preventative approach has saved us from major headaches." }
  ],

  trustBadges: [
    "Licensed & Insured", "GAF Certified Contractor", "10+ Years Experience", "5-Star Rated", "24/7 Emergency Service", "Financing Available"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We provide rapid service and free same-day estimates for your roofing needs." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest quotes with no hidden fees, ensuring you know the cost upfront." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with solid workmanship warranties and a satisfaction promise." },
    { icon: "phone", title: "24/7 Emergency", desc: "Around-the-clock availability for urgent roof repairs and critical situations." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials for efficient service." }
  ],

  formServiceOptions: ["Residential Roofing", "Commercial Roofing", "Roof Repairs", "Roof Maintenance", "Roof Replacement", "Emergency Roofing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!