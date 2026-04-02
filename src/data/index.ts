export interface ImageField {
  url: string;
  alt?: string;
  dimensions?: { width: number; height: number };
}

export interface LinkField {
  link_type?: string;
  url: string;
  target?: string;
}

export interface RichTextField {
  text?: string;
  html?: string;
  [key: string]: any;
}

export type KeyTextField = string;
export type ColorField = string;

// --- Slices ---

export interface Slice {
  slice_type: string;
  slice_label?: string | null;
  id?: string;
  primary: any;
  items?: any[];
  variation?: string;
}

export type SliceComponentProps<T> = { slice: T };

export interface HeroSlice extends Slice {
  slice_type: "hero";
  primary: {
    first_name: string;
    last_name: string;
    tag_line: string;
  };
}

export interface TechlistSlice extends Slice {
  slice_type: "techlist";
  primary: {
    heading: string;
  };
  items: {
    tech_name: string;
    tech_colour: string;
  }[];
}

export interface ContentIndexSlice extends Slice {
  slice_type: "content_index";
  primary: {
    heading: string;
    content_type: "Blog" | "Project";
    description: RichTextField | string;
    view_more_text: string;
    fallback_item_image: ImageField;
  };
}

export interface ExperienceSlice extends Slice {
  slice_type: "experience";
  primary: {
    heading: string;
  };
  items: {
    title: string;
    time_period: string;
    institution: string;
    description: RichTextField | string;
  }[];
}

export interface BiographySlice extends Slice {
  slice_type: "biography";
  primary: {
    heading: string;
    description: RichTextField | string;
    button_text?: string;
    button_link?: LinkField;
    avatar: ImageField;
  };
}

export interface TextBlockSlice extends Slice {
  slice_type: "text_block";
  primary: {
    text: RichTextField | string;
  };
}

export interface ImageBlockSlice extends Slice {
  slice_type: "image_block";
  primary: {
    image: ImageField;
  };
}

export type ContentSlice =
  | HeroSlice
  | TechlistSlice
  | ContentIndexSlice
  | ExperienceSlice
  | BiographySlice
  | TextBlockSlice
  | ImageBlockSlice;

// --- Documents ---

export interface Settings {
  data: {
    name: string;
    nav_item: { link: LinkField; label: string }[];
    cta_link: LinkField;
    cta_label: string;
    github: LinkField;
    linkedin: LinkField;
    meta_title: string;
    meta_description: string;
    og_image: ImageField;
  };
}

export interface Page {
  uid: string;
  type: "home" | "page" | "blog_post" | "project";
  data: {
    title?: string;
    date?: string;
    hover_image?: ImageField;
    slices: ContentSlice[];
    meta_title: string;
    meta_description: string;
    meta_image: ImageField;
    live_link?: LinkField;
  };
  tags: string[];
}

// --- Hardcoded Data ---

export const settings: Settings = {
  data: {
    name: "Liam Kemp",
    nav_item: [
      { link: { url: "/about" }, label: "About" },
      { link: { url: "/projects" }, label: "Projects" },
      { link: { url: "/contact" }, label: "Contact" },
    ],
    cta_link: { url: "/contact" },
    cta_label: "Get in Touch",
    github: { url: "https://github.com/liamkemp" },
    linkedin: { url: "https://www.linkedin.com/in/liam-kemp-a7820a351/" },
    meta_title: "Liam Kemp - Developer",
    meta_description: "Portfolio of Liam Kemp",
    og_image: { url: "/default-og.jpg" },
  },
};

export const pages: Page[] = [
  {
    uid: "home",
    type: "home",
    tags: [],
    data: {
      meta_title: "Home",
      meta_description:
        "Full-stack developer building AI-powered web applications and automation systems.",
      meta_image: { url: "" },
      slices: [
        {
          slice_type: "hero",
          primary: {
            first_name: "Liam",
            last_name: "Kemp",
            tag_line:
              "Full-Stack Developer building AI-powered web applications and automation systems",
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Core Expertise" },
          items: [
            { tech_name: "React", tech_colour: "#61DAFB" },
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "TypeScript", tech_colour: "#3178C6" },
            { tech_name: "Node.js", tech_colour: "#339933" },
            { tech_name: "PostgreSQL", tech_colour: "#336791" },
            { tech_name: "WordPress", tech_colour: "#21759B" },
            { tech_name: "AI & Automation", tech_colour: "#10B981" },
          ],
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<h2>How I Work</h2><p>I focus on delivering working solutions quickly rather than over-engineering. My priority is real-world impact—identifying the core bottleneck and building reliable software to solve it. I use modern tools, including AI, to accelerate development cycles while ensuring the underlying architecture is robust.</p>",
          },
        },
      ],
    },
  },
  {
    uid: "about",
    type: "page",
    tags: [],
    data: {
      meta_title: "About Me",
      meta_description: "Learn more about my background, skills, and how I work.",
      meta_image: { url: "" },
      slices: [
        {
          slice_type: "biography",
          primary: {
            heading: "About Me",
            description: "I am a self-taught Full-Stack Developer with a background in running my own business. This combination means I don't just write code—I build systems designed to solve actual operational problems.\n\n<br /><br />\n\nHaving run a business, I understand that software needs to deliver measurable value. I focus heavily on automation, efficiency, and reducing manual work, ensuring the tools I build directly impact the bottom line.\n\n<br /><br />\n\nMy core expertise lies in React, TypeScript, and Node.js, combined with a deep interest in AI workflow systems and automation pipelines. Whether it's streamlining a complex CRM process or building a high-converting customer portal, my goal is always to deliver robust, scalable, and production-ready solutions.",
            avatar: { url: "/me.jpg" },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<h2>How I Work</h2><p>I focus on delivering working solutions quickly rather than over-engineering. My priority is real-world impact—identifying the core bottleneck and building reliable software to solve it. I use modern tools, including AI, to accelerate development cycles while ensuring the underlying architecture is robust. Being comfortable across the entire stack means I can design a database schema, build a secure API, and implement a polished user interface without needing handoffs.</p>",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<h2>Current Focus</h2><p>I am actively deepening my expertise in scalable Node.js backend systems, advanced API architecture, and performance optimization within React and Next.js applications. By mastering strict TypeScript patterns and state management strategies, I ensure the systems I build today remain maintainable and performant as they scale tomorrow.</p>",
          },
        },
        {
          slice_type: "experience",
          primary: {
            heading: "Experience",
          },
          items: [
            {
              title: "Freelance Developer",
              time_period: "Jan 2026 - Present",
              institution: "Self-Employed",
              description:
                "Spearheaded the development and deployment of high-quality web applications and robust digital solutions for a diverse client base. Focused on translating business objectives into scalable, efficient, and user-centric technical architectures.",
            },
            {
              title: "Lead Developer",
              time_period: "March 2022 - December 2025",
              institution: "Elan Agency",
              description:
                "Executed full-stack development and UX/UI design across a portfolio of agency projects, consistently meeting tight deadlines and high quality standards. Designed, developed, and integrated custom AI-powered tools for clients, resulting in improved operational efficiency and data-driven project insights.",
            },
            {
              title: "Freelance Developer",
              time_period: "2020 - 2022",
              institution: "Self-Employed",
              description:
                "Established a successful freelance business foundation by delivering bespoke websites and custom applications for small business clients. Managed the entire project lifecycle, from initial concept and requirements gathering to final deployment and support.",
            },
          ],
        },
      ],
    },
  },
  {
    uid: "projects",
    type: "page",
    tags: [],
    data: {
      meta_title: "Projects",
      meta_description: "A collection of my work",
      meta_image: { url: "" },
      slices: [
        {
          slice_type: "content_index",
          primary: {
            heading: "Case Studies",
            content_type: "Project",
            description: "A showcase of real-world systems, applications, and business solutions.",
            view_more_text: "View Case Study",
            fallback_item_image: { url: "" },
          },
        },
      ],
    },
  },
];

export const projects: Page[] = [
  {
    uid: "inkx-apparel",
    type: "project",
    tags: ["E-commerce", "Apparel", "Brand Site"],
    data: {
      title: "InkX Apparel",
      date: "2026-03-12",
      hover_image: { url: "/inkxapparel.png" },
      meta_title: "InkX Apparel - Alternative Apparel Brand",
      meta_description:
        "A bold apparel storefront built around strong artwork, merchandise discovery, and a high-contrast brand identity.",
      meta_image: { url: "/inkxapparel.png" },
      live_link: { url: "https://www.inkxapparel.com/", target: "_blank" },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Problem:</strong> InkX Apparel needed an online storefront that could match the energy and attitude of their brand without sacrificing usability. Generic e-commerce templates made the product look cheap and buried the artwork that drives their audience.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Solution:</strong> Built a custom storefront with a layout designed around artwork-led merchandising. Strong visual hierarchy, high-contrast design, and a streamlined browse-to-purchase flow ensure the brand energy is felt from the first screen without getting in the way of conversion.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Impact:</strong> The site launched with a cohesive brand presence across desktop and mobile, with a product display approach that puts the artwork front and centre — directly supporting the drop-based sales model.",
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Tech Used" },
          items: [
            { tech_name: "WordPress", tech_colour: "#21759B" },
            { tech_name: "WooCommerce", tech_colour: "#7F54B3" },
            { tech_name: "Custom Theme", tech_colour: "#F97316" },
            { tech_name: "Responsive Design", tech_colour: "#FACC15" },
          ],
        },
      ],
    },
  },
  {
    uid: "elite-whisky-society",
    type: "project",
    tags: ["Luxury Brand", "Membership", "E-commerce"],
    data: {
      title: "Elite Whisky Society",
      date: "2026-03-11",
      hover_image: { url: "/elite-whisky-society.png" },
      meta_title: "Elite Whisky Society - Premium Whisky Membership Site",
      meta_description:
        "A premium whisky brand and membership site designed to sell exclusivity, curation, and high-value collections.",
      meta_image: { url: "/elite-whisky-society.png" },
      live_link: {
        url: "https://www.elitewhiskysociety.com/",
        target: "_blank",
      },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Problem:</strong> Elite Whisky Society had a premium product and a strong brand story but no digital presence capable of reflecting either. Their audience expects a luxury experience online — a generic template would immediately undermine the brand's credibility.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Solution:</strong> Designed and built a high-end brand site around editorial-style typography, dark tones, and product-led photography. The site gives equal weight to storytelling and conversion — guiding visitors through the brand narrative before presenting the collection and membership offer.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Impact:</strong> Delivered a polished launch platform that positions Elite Whisky Society at the luxury end of the market. Clear collection pathways and strong calls to action support membership sign-ups without disrupting the aspirational feel of the site.",
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Tech Used" },
          items: [
            { tech_name: "WordPress", tech_colour: "#21759B" },
            { tech_name: "WooCommerce", tech_colour: "#7F54B3" },
            { tech_name: "Custom Theme", tech_colour: "#D4AF37" },
            { tech_name: "Membership Funnel", tech_colour: "#C084FC" },
          ],
        },
      ],
    },
  },
  {
    uid: "jacksons-temporary-kitchen-pod",
    type: "project",
    tags: ["Service Website", "Lead Generation", "Local Business"],
    data: {
      title: "Jackson's Temporary Kitchen Pods",
      date: "2026-03-10",
      hover_image: { url: "/jacksons-temporary-kitchen-pod.png" },
      meta_title: "Jackson's Temporary Kitchen Pods - Kitchen Pod Hire UK",
      meta_description:
        "A service-led website for temporary kitchen pod hire, built to explain the offer clearly and convert renovation and emergency enquiries.",
      meta_image: { url: "/jacksons-temporary-kitchen-pod.png" },
      live_link: {
        url: "https://www.jacksonstemporarykitchenpod.co.uk/",
        target: "_blank",
      },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Problem:</strong> Jackson's offered a highly practical service — temporary kitchen pods for renovations and emergencies — but had no web presence to explain the offer or capture leads. Potential customers searching in urgent situations had no way to find or contact them quickly.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Solution:</strong> Built a focused, conversion-first service site on WordPress with large product photography, a clear explanation of what the pods include, and prominent contact/booking prompts throughout. Every page element is designed to reduce friction for someone in an urgent situation.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Impact:</strong> Gave the business its first professional digital presence, enabling them to be found online for local search terms and convert visitors into enquiries directly from the site. The focused layout reduced drop-off and guided users straight to the contact form.",
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Tech Used" },
          items: [
            { tech_name: "WordPress", tech_colour: "#21759B" },
            { tech_name: "Local SEO", tech_colour: "#34D399" },
            { tech_name: "Conversion UX", tech_colour: "#38BDF8" },
            { tech_name: "Lead Generation", tech_colour: "#FB7185" },
          ],
        },
      ],
    },
  },
  {
    uid: "voxenly",
    type: "project",
    tags: ["AI Voice", "Automation", "Next.js", "Tailwind"],
    data: {
      title: "Voxenly",
      date: "2026-01-03",
      hover_image: { url: "/voxenly.jpg" },
      meta_title: "Voxenly - AI Voice Agents That Take Action",
      meta_description:
        "The AI Voice Platform that takes action. Automate workflows with intelligent voice agents that schedule appointments, update CRMs, and handle complex requests 24/7.",
      meta_image: { url: "" },
      live_link: { url: "https://voxenly.com/", target: "_blank" },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "Voxenly is an advanced AI voice platform that goes beyond simple voice interaction. It enables businesses to deploy intelligent voice agents that can perform real-world actions, such as scheduling appointments, updating CRM systems, and handling complex customer inquiries without human intervention.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "The platform's core strength lies in its 'Magic Builder,' which allows for the creation of sophisticated conversation flows using natural language instructions. As shown in the dashboard screenshots, users can simply describe how they want their agent to behave, and the AI automatically calibrates its responses and logic.",
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/voxenly2.jpg" },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "Beyond the voice capabilities, Voxenly includes a customizable web widget for seamless integration. The dashboard provides a 'Live Preview' and granular control over branding, colors, and behavior, allowing businesses to maintain a consistent professional presence across all customer touchpoints.",
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/voxenly3.jpg" },
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Core Technologies" },
          items: [
            { tech_name: "AI Voice", tech_colour: "#FF6B6B" },
            { tech_name: "Workflow Automation", tech_colour: "#4ECDC4" },
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "Tailwind CSS", tech_colour: "#38B2AC" },
          ],
        },
      ],
    },
  },
  {
    uid: "floralcraft",
    type: "project",
    tags: ["React", "Next.js", "Tailwind"],
    data: {
      title: "FloralCraft",
      date: "2025-11-21",
      hover_image: { url: "/floralcraft-client.jpg" },
      meta_title: "FloralCraft - E-commerce Solution",
      meta_description:
        "A full-stack e-commerce solution for a floral business, featuring a customer site and a complete admin dashboard.",
      meta_image: { url: "" },
      live_link: {
        url: "https://floralcraft-mono-client.vercel.app/",
        target: "_blank",
      },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "FloralCraft is a modern, full-stack e-commerce platform developed specifically for a local florist. It comprises two main components: a beautiful, responsive customer-facing storefront, and a powerful, comprehensive admin dashboard.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "This high-performance platform was constructed using Next.js 14 and React, ensuring optimal speed and SEO. Tailwind CSS was utilized for rapid, utility-first styling, resulting in a responsive and elegant user experience. The integrated admin dashboard provides the client with the tools necessary to manage inventory, track sales analytics, process orders, and streamline all business operations efficiently.",
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/floralcraft.jpg" },
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Technologies Used" },
          items: [
            { tech_name: "React", tech_colour: "#61DAFB" },
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "Tailwind", tech_colour: "#38B2AC" },
            { tech_name: "TypeScript", tech_colour: "#3178C6" },
          ],
        },
      ],
    },
  },
  {
    uid: "saltburn-pool-league",
    type: "project",
    tags: ["Next.js", "Supabase", "Automation"],
    data: {
      title: "Saltburn Pool League",
      date: "2024-09-01",
      hover_image: { url: "/pool2.jpg" },
      meta_title: "Saltburn Pool League - League Management",
      meta_description:
        "Automated pool league management system with captain portals.",
      meta_image: { url: "" },
      live_link: { url: "https://saltburnpool.com/", target: "_blank" },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Problem:</strong> A local sports league was manually processing hundreds of match results on paper, leading to errors, delayed league tables, and frustrated players who wanted instant updates.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Solution:</strong> Developed a full-stack automated league management system using Next.js and Supabase. Team captains input scores via secure portals, which triggers real-time calculations for league standings and individual player statistics.",
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/pool1.jpg" },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Impact:</strong> Eliminated 100% of manual data entry for administrators. Provided players with instant, error-free updates immediately after matches, modernizing the league's entire operation.",
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Tech Used" },
          items: [
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "Supabase", tech_colour: "#3ECF8E" },
            { tech_name: "Tailwind", tech_colour: "#38B2AC" },
            { tech_name: "TypeScript", tech_colour: "#3178C6" },
          ],
        },
      ],
    },
  },
  {
    uid: "enso-labs",
    type: "project",
    tags: ["AI Automation", "Web Development", "Business Solutions"],
    data: {
      title: "Enso Labs",
      date: "2024-12-01",
      hover_image: { url: "/enso.jpg" },
      meta_title: "Enso Labs - AI Automation Solutions",
      meta_description:
        "Tailored AI automation solutions for business efficiency and growth.",
      meta_image: { url: "" },
      live_link: { url: "https://www.enso-labs.com/", target: "_blank" },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Problem:</strong> Growth teams were losing hours daily juggling disconnected tools for lead generation, campaign delivery, mailbox operations, and SMS follow-ups. The lack of a unified system caused inefficiencies and poor deliverability control.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Solution:</strong> Architected and built a centralised internal admin platform using Next.js and Node.js. It manages lead pipelines, AI-personalised email campaigns, DNS/mailbox provisioning, warmup recovery, and automated SMS sequences from a single unified dashboard.",
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/screenshot-2026-04-02_08-29-05.png" },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Impact:</strong> Replaced 4+ disjointed SaaS tools, reducing manual campaign setup time by 80% while providing tighter operational control over email deliverability at scale. The system enables real operators to manage quality without getting bogged down in manual tasks.",
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/screenshot-2026-04-02_08-35-45.png" },
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Tech Used" },
          items: [
            { tech_name: "AI Personalisation", tech_colour: "#FF6B6B" },
            { tech_name: "Email + SMS Automation", tech_colour: "#4ECDC4" },
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "Operational Dashboards", tech_colour: "#38B2AC" },
          ],
        },
      ],
    },
  },
  {
    uid: "new-marske-club",
    type: "project",
    tags: ["React", "Events", "Community"],
    data: {
      title: "New Marske Club",
      date: "2024-06-01",
      hover_image: { url: "/marske.jpg" },
      meta_title: "New Marske Club - Community Hub",
      meta_description: "Official website for the New Marske Institute Club.",
      meta_image: { url: "" },
      live_link: { url: "https://www.newmarskeclub.co.uk/", target: "_blank" },
      slices: [
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Problem:</strong> New Marske Institute Club had an outdated website that didn't reflect the recent renovations or the club's active events schedule. Members couldn't easily find information and new visitors had no reason to engage with the digital presence.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Solution:</strong> Rebuilt the site in React with a clean, modern design. Added a structured events section, renovation photo galleries, and clear information pages for both members and prospective visitors. The layout is easy to navigate on any device and straightforward for the club to maintain.",
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: "<strong>Impact:</strong> The club now has a polished digital home that accurately reflects what they offer. Members have a reliable place to check events, and new visitors get a clear picture of the facilities and community before walking through the door.",
          },
        },
        {
          slice_type: "techlist",
          slice_label: "compact",
          primary: { heading: "Tech Used" },
          items: [
            { tech_name: "React", tech_colour: "#61DAFB" },
            { tech_name: "Tailwind CSS", tech_colour: "#38B2AC" },
            { tech_name: "Vercel", tech_colour: "#6366F1" },
          ],
        },
      ],
    },
  },
];
