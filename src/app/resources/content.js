import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sofia',
    lastName:  'Orellano',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:   'Product Designer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Get in contact with {person.firstName}</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Sofia-UX-UI',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sofiaorellano/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sofia.orellano@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Product Designer</>,
    subline: <>I'm Sofía, a product designer at <InlineCode>OICD</InlineCode>, where I thrive on transforming complex workflows<br/> into user-friendly, leading generative AI<br/> digital solutions.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendly.com/sofia-orellano-/1-1-sofia-orellano'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>For the past 10 years, I’ve been learning through making - as a designer and as a founder. These days, you can find me researching and designing UI for Generative AI experiences.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'OICD',
                timeframe: '2023 - Present',
                role: 'Product Designer',
                achievements: [
                    <>Redesigned the UI/UX for the OICD platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Actively collaborated in the end-to-end design process of a new Generative AI cloud platform for conflict resolution, optimized for use across three devices.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/Fondo-prueba-20.svg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Urbanmento',
                timeframe: '2015 - 2023',
                role: 'Lead Designer & founder',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch new product lines, contributing to a 15% increase in overall company revenue.</>
                ], 
                images: [ 
                    {
                        src: '/images/projects/project-01/cover-001-um.png',
                        alt: 'Urbanmento',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Falmouth University',
                description: <> Master's in User Experience Design with a major project focused on designing applications for Generative AI.</>,
            },
            {
                name: 'Universidad de la Empresa',
                description: <>International Bachelor's in Industrial Design with a focus on entrepreneurship.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/Fondo-prueba-22.svg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/Fondo-prueba-23.svg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Netlify.</>,
                images: [
                    {
                        src: '/images/projects/project-01/Fondo-prueba-24.svg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };