import type {ContentData} from "../context/ContentContext.tsx";

const DefaultContent: ContentData = {
  about: {
    name: "Foo Bar",
    domain: "example.com",
    description: [
      "Lorem ipsum dolor sit amet et nostrud tempor sed autem feugiat nobis ex duis sit sea invidunt vero est eos autem delenit consetetur exerci ad dolores diam et kasd sea lorem ipsum takimata sit feugiat sit sit tincidunt sit sed"
    ],
    photo: "/images/profile.jpg",
    country: "Country",
    github: {
      text: "Check out my GitHub",
      url: "#"
    },
    cv: {
      text: "Open CV",
      url: "#"
    },
    email: "email@example.com",
    footer: "Lorem ipsum dolor sit amet nostrud labore accusam lorem no ullamcorper vero"
  },
  education: [
    {
      institution: 'University of Example',
      degree: "Bachelor's Degree",
      field: 'Computer Science',
      startDate: '1900',
      endDate: '2000',
      description: 'Lorem ipsum dolor sit amet magna consetetur est magna wisi amet amet consectetuer diam no aliquip invidunt stet at lorem labore labore stet luptatum dolor magna rebum at duis dignissim aliquyam duo ea hendrerit duis blandit qui facilisi eos dolor ipsum sed diam vel et odio kasd vero placerat aliquyam est ipsum lorem ut nisl diam et tincidunt rebum diam',
      grade: '6.0',
      icon: "School",
    },
  ],
  skills: [
    {
      title: 'Programming Languages',
      items: [
        {name: 'Java', level: 5},
        {name: 'Rust', level: 5},
        {name: 'C/C++', level: 5},
        {name: 'Python', level: 5},
        {name: 'TypeScript', level: 5},
      ],
    },
  ],
  projects: [
    {
      title: 'Project One',
      description:
        'Lorem ipsum dolor sit amet nulla labore sanctus sit at autem luptatum diam in vel est amet sea nihil magna',
      techStack: ['React', 'Spring Boot', 'TypeScript'],
      screenshotUrl: "/images/screenshot.jpg",
      githubUrl: '#',
    },
  ]
};

export default DefaultContent;