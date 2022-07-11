const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/BhavikSojitra/Reactfolio',
  title: 'BS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bhavik Sojitra',
  role: 'Software Engineer',
  description:
    'Introduction about me!',
  resume: 'https://www.linkedin.com/in/bhavik-sojitra/',
  social: {
    linkedin: 'https://www.linkedin.com/in/bhavik-sojitra/',
    github: 'https://github.com/BhavikSojitra',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'To-Do Plus App',
    description:
      'a todo react app to take all the todos and can also manage all todos including themes.',
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/BhavikSojitra/To-Do-Plus-App',
    livePreview: 'https://bhaviksojitra.github.io/To-Do-Plus-App/',
  },
  {
    name: 'Netflix-Clone',
    description:
      'A Netflix Clone App built using React.Js including all the additional functionalities.',
    stack: ['ReactJS', 'JavaScript', 'Redux', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/BhavikSojitra/Netflix-Clone',
    livePreview: 'https://netflix-clone-297f5.web.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Bootstrap',
  'tailwindcss',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bhaviksojitra01@gmail.com',
}

export { header, about, projects, skills, contact }
