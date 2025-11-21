import { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentBody from "@/components/ContentBody";
import { projects } from "@/data";
import { pages } from "@/data";
import SliceZone from "@/components/SliceZone";
import { components } from "@/slices";

export default function ProjectsIndex() {
    const page = pages.find(p => p.uid === "projects" && p.type === "page");

    // Fallback content if "projects" page is not in data
    if (!page) {
        return (
             <div className="min-h-screen pt-20 text-slate-100">
                <div className="container mx-auto px-4">
                   <h1 className="text-4xl font-bold mb-8">Projects</h1>
                   {/* Manually render the project list slice if page data missing */}
                   <SliceZone
                      slices={[
                        {
                           slice_type: "content_index",
                           primary: {
                              heading: "Projects",
                              content_type: "Project",
                              description: "A collection of my work.",
                              view_more_text: "View Project",
                              fallback_item_image: { url: "" }
                           }
                        }
                      ]}
                      components={components}
                   />
                </div>
             </div>
        );
    }

    return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
    const page = pages.find(p => p.uid === "projects" && p.type === "page");
    if (!page) return { title: "Projects" };
    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

