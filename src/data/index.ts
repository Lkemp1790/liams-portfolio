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
      meta_description: "Welcome to my portfolio",
      meta_image: { url: "" },
      slices: [
        {
          slice_type: "hero",
          primary: {
            first_name: "Liam",
            last_name: "Kemp",
            tag_line: "Creative Developer",
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Tech Stack" },
          items: [
            { tech_name: "React", tech_colour: "#61DAFB" },
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "Tailwind", tech_colour: "#38B2AC" },
          ],
        },
      ],
    },
  },
  {
    uid: "about",
    type: "page",
    tags: [],
    "data": {
      "meta_title": "About Me",
      "meta_description": "Learn more about me",
      "meta_image": { "url": "" },
      "slices": [
        {
          "slice_type": "biography",
          "primary": {
            "heading": "About Me",
            "description": "As a versatile web and software developer, I thrive in the dynamic intersection of innovation and technology. With a keen eye for detail and a passion for crafting seamless digital experiences, I specialize in utilizing cutting-edge no-code tools, particularly Bubble, to bring ideas to life with efficiency and precision.\n\n<br /><br />\n\nMy journey into the realm of web development began with a fascination for its endless possibilities. Over the years, I have honed my skills in various programming languages and frameworks, including JavaScript and Next.js, allowing me to embrace challenges with confidence and creativity.\n\n<br /><br />\n\nMy expertise lies not only in writing code but also in harnessing the power of visual development platforms like Bubble, where I excel in rapidly prototyping and deploying complex applications without traditional coding barriers. Whether it's crafting intuitive user interfaces or implementing robust backend functionalities, I thrive on pushing the boundaries of what's possible in the digital landscape.\n\n<br /><br />\n\nBeyond coding, I'm deeply passionate about staying at the forefront of technological advancements, particularly the revolutionary capabilities of **Artificial Intelligence (AI)**. I am always eager to explore new tools and methodologies that enable me to deliver solutions that are not just effective but future-proof. By integrating AI where it makes sense, I strive to empower businesses and individuals to unlock their full potential in the digital realm.\n\n<br /><br />\n\nOn a personal note, I am also a **dedicated father**. This role has sharpened my skills in patience, problem-solving, and creative thinking—qualities I find surprisingly valuable in a development context. Being a dad reinforces my commitment to building digital solutions that are intuitive, safe, and truly benefit people's lives.\n\n<br /><br />\n\nI am an avid advocate for collaboration and continuous learning, believing that the most impactful solutions are born from diverse perspectives and collective expertise. As I continue to evolve in my journey as a developer, I look forward to embracing new challenges, pushing boundaries, and contributing to the ever-evolving landscape of technology, both with innovative code and a father's grounded perspective.",
            "avatar": { "url": "/me.jpg" },
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
              time_period: "2025 - Present",
              institution: "Self-Employed",
              description:
                "Spearheaded the development and deployment of high-quality web applications and robust digital solutions for a diverse client base. Focused on translating business objectives into scalable, efficient, and user-centric technical architectures.",
            },
            {
              title: "Lead Developer",
              time_period: "2024 - 2025",
              institution: "Elan Agency",
              description:
                "Executed full-stack development and UX/UI design across a portfolio of agency projects, consistently meeting tight deadlines and high quality standards. Designed, developed, and integrated custom AI-powered tools for clients, resulting in improved operational efficiency and data-driven project insights.",
            },
            {
              title: "Freelance Developer",
              time_period: "2022 - 2024",
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
            heading: "Projects",
            content_type: "Project",
            description: "A showcase of my recent work and experiments.",
            view_more_text: "View Project",
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
            text: {
              text: "InkX Apparel is a visually aggressive e-commerce experience built to showcase limited drops, statement graphics, and a clear brand identity from the first screen. The layout leans heavily into artwork-led merchandising so the products and illustrations do most of the selling.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "This project focused on presenting a distinctive apparel catalogue in a way that still feels easy to browse, with clear navigation, strong visual hierarchy, and a storefront that keeps the brand's energy intact across desktop and mobile.",
            },
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Project Highlights" },
          items: [
            { tech_name: "E-commerce UX", tech_colour: "#A3E635" },
            { tech_name: "Brand Identity", tech_colour: "#F97316" },
            { tech_name: "Merchandising", tech_colour: "#22D3EE" },
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
            text: {
              text: "Elite Whisky Society is a premium-focused brand site built around exclusivity, curated collections, and a members-first proposition. The visual direction uses dark tones, editorial typography, and product-led imagery to position the offer at the luxury end of the market.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "The site balances storytelling with conversion by giving equal weight to the brand narrative and the collection itself. Strong calls to action, clear collection pathways, and polished presentation help the experience feel aspirational without getting in the user's way.",
            },
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Project Highlights" },
          items: [
            { tech_name: "Luxury UI", tech_colour: "#D4AF37" },
            { tech_name: "Membership Funnel", tech_colour: "#C084FC" },
            { tech_name: "Editorial Layout", tech_colour: "#F59E0B" },
            { tech_name: "Responsive Design", tech_colour: "#60A5FA" },
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
            text: {
              text: "Jackson's Temporary Kitchen Pods is a focused service website for a specialist hire business offering fully equipped temporary kitchens. The project is built around clarity: what the pod is, who it is for, and how quickly someone can book when dealing with a renovation or unexpected home damage.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "The design keeps the message direct and practical while still presenting the product professionally. Large photography, concise navigation, and clear booking prompts help the site work as a straightforward lead-generation tool for a niche service.",
            },
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Project Highlights" },
          items: [
            { tech_name: "Lead Generation", tech_colour: "#FB7185" },
            { tech_name: "Service Clarity", tech_colour: "#34D399" },
            { tech_name: "Conversion UX", tech_colour: "#38BDF8" },
            { tech_name: "Responsive Design", tech_colour: "#FBBF24" },
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
            text: {
              text: "Voxenly is an advanced AI voice platform that goes beyond simple voice interaction. It enables businesses to deploy intelligent voice agents that can perform real-world actions, such as scheduling appointments, updating CRM systems, and handling complex customer inquiries without human intervention.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "The platform's core strength lies in its 'Magic Builder,' which allows for the creation of sophisticated conversation flows using natural language instructions. As shown in the dashboard screenshots, users can simply describe how they want their agent to behave, and the AI automatically calibrates its responses and logic.",
            },
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
            text: {
              text: "Beyond the voice capabilities, Voxenly includes a customizable web widget for seamless integration. The dashboard provides a 'Live Preview' and granular control over branding, colors, and behavior, allowing businesses to maintain a consistent professional presence across all customer touchpoints.",
            },
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
            text: {
              text: "FloralCraft is a modern, full-stack e-commerce platform developed specifically for a local florist. It comprises two main components: a beautiful, responsive customer-facing storefront, and a powerful, comprehensive admin dashboard.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "This high-performance platform was constructed using Next.js 14 and React, ensuring optimal speed and SEO. Tailwind CSS was utilized for rapid, utility-first styling, resulting in a responsive and elegant user experience. The integrated admin dashboard provides the client with the tools necessary to manage inventory, track sales analytics, process orders, and streamline all business operations efficiently.",
            },
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
            text: {
              text: "A comprehensive league management platform built for the Saltburn Pool League. This application digitizes the entire league operation, streamlining what was once a manual, paper-heavy process into a seamless digital experience.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "The core of the system is its automation engine. Team captains have access to secure admin pages where they input match scores. The system then automatically calculates and updates the league tables, individual player statistics, and win/loss records in real-time. This automated workflow ensures 100% accuracy and provides players with up-to-date insights immediately after games.",
            },
          },
        },
        {
          slice_type: "image_block",
          primary: {
            image: { url: "/pool1.jpg" },
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Technologies Used" },
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
            text: {
              text: "Enso Labs helps businesses leverage cutting-edge AI technologies to drive efficiency, innovation, and growth. The platform showcases bespoke AI solutions, from CRM and workflow automation to intelligent voice agents and automated SMS/email nurturing systems.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "The website acts as a central hub for their services, detailing their process from discovery and analysis to deployment and training. It highlights real-world case studies in healthcare and finance, demonstrating how custom AI agents can significantly reduce operational costs and improve customer satisfaction.",
            },
          },
        },

        {
          slice_type: "techlist",
          primary: { heading: "Key Technologies" },
          items: [
            { tech_name: "AI Integration", tech_colour: "#FF6B6B" },
            { tech_name: "Automation", tech_colour: "#4ECDC4" },
            { tech_name: "Next.js", tech_colour: "#000000" },
            { tech_name: "Tailwind", tech_colour: "#38B2AC" },
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
            text: {
              text: "The New Marske Institute Club is a central hub for the local community. This project involved redesigning their online presence to better showcase their events, membership benefits, and facilities.",
            },
          },
        },
        {
          slice_type: "text_block",
          primary: {
            text: {
              text: "The website features an easy-to-update events calendar, photo galleries of club renovations, and clear information for members. It serves as the primary digital touchpoint for existing members and new visitors alike.",
            },
          },
        },
        {
          slice_type: "techlist",
          primary: { heading: "Technologies Used" },
          items: [
            { tech_name: "React", tech_colour: "#61DAFB" },
            { tech_name: "Tailwind", tech_colour: "#38B2AC" },
            { tech_name: "Vercel", tech_colour: "#000000" },
          ],
        },
      ],
    },
  },
];
