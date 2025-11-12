// Portfolio data for Jithendra Chandra
export const portfolioData = {
  name: 'Jithendra Chandra',
  title: 'AI/ML Engineer',
  education: {
    degree: 'Bachelor\'s in Artificial Intelligence And Data Science',
    institution: 'Annamacharya Institute Of Technology And Sciences, Andhra Pradesh',
    cgpa: '8.6/10',
    description: 'Jithendra has a strong foundation in computer science and AI/ML, with hands-on experience gained through projects and continuous learning. He focuses on practical applications and staying updated with the latest advancements in the field.'
  },
  skills: [
    'Python programming',
    'Machine learning frameworks (TensorFlow, PyTorch)',
    'Data analysis with Pandas and NumPy',
    'Cloud deployment (AWS)',
    'Full-stack development for ML applications',
    'LangChain for LLM integrations'
  ],
  projects: [
    'AI-based customer query assistants',
    'LLM fine-tuning for domain adoption',
    'Dry eye disease detection using ML',
    'Gesture recognition systems',
    'Personalized recommender systems',
    'Financial fraud detection'
  ],
  achievements: [
    'Successfully deploying ML models in production',
    'Contributing to open-source AI projects',
    'Developing innovative solutions with real-world impact',
    'Particularly proud of work in healthcare AI applications'
  ],
  contact: {
    email: 'jithendrachandra20@gmail.com',
    phone: '+91 7416847239',
    location: 'Nellore, Andhra Pradesh, India'
  },
  socials: {
    instagram: 'https://www.instagram.com/vj_ch22?igsh=ZnhvcGZmYXY2YzIy&utm_source=qr',
    twitter: 'https://x.com/jithendra2004?s=21',
    linkedin: 'https://www.linkedin.com/in/jithendra-chandra/',
    github: 'https://github.com/jithendrachandra',
    whatsapp: 'https://wa.me/7416847239'
  },
  technologies: [
    'Python',
    'TensorFlow',
    'PyTorch',
    'AWS services',
    'Docker',
    'Various data science libraries',
    'Web development frameworks for ML applications'
  ],
  advice: 'Focus on building a strong foundation in mathematics and programming, work on real projects, stay curious and keep learning, and don\'t be afraid to experiment. Practical experience and continuous learning are key in this rapidly evolving field.',
  currentFocus: 'Advanced LLM applications, improving model deployment strategies, and exploring new ways to apply AI in healthcare and finance.',
  goals: 'Deepening expertise in agentic AI and large language models, contributing to open-source projects, and working on AI solutions that address global challenges like healthcare and sustainability.',
  hobbies: 'Exploring new technologies, reading about AI advancements, working on personal projects, staying active, and connecting with the tech community through online forums and meetups.'
};

// FAQ data with semantic matching keywords
export const faqData = [
  {
    keywords: ['education', 'study', 'learn', 'degree', 'qualification', 'academic', 'school', 'university', 'bachelor', 'bachelors', 'college', 'graduated', 'completed', 'diploma', 'course', 'training', 'background', 'educational'],
    question: 'What is Jithendra\'s educational background?',
    answer: ` He completed his ${portfolioData.education.degree} from ${portfolioData.education.institution} with a CGPA of ${portfolioData.education.cgpa}, which provided him with a solid base in programming, algorithms, and software development.`
  },
  {
    keywords: ['education', 'study', 'learn', 'degree', 'qualification', 'academic', 'school', 'university', 'bachelor', 'bachelors', 'college', 'graduated', 'completed', 'diploma', 'course', 'training', 'background', 'educational'],
    question: 'Where did he completed his bachelors?',
    answer: ` He completed his ${portfolioData.education.degree} from ${portfolioData.education.institution} with a CGPA of ${portfolioData.education.cgpa}, which provided him with a solid base in programming, algorithms, and software development.`
  },
  {
    keywords: ['college', 'university', 'school', 'institution', 'where did he study', 'which college'],
    question: 'Which college did Jithendra attend?',
    answer: `Jithendra completed his ${portfolioData.education.degree} from ${portfolioData.education.institution}.`
  },
  {
    keywords: ['cgpa', 'grade', 'marks', 'percentage', 'score', 'academic performance'],
    question: 'What is Jithendra\'s CGPA?',
    answer: `Jithendra achieved a CGPA of ${portfolioData.education.cgpa} in his ${portfolioData.education.degree} from ${portfolioData.education.institution}.`
  },
  {
    keywords: ['motivate', 'motivation', 'drive', 'passion', 'inspire', 'why', 'reason', 'push', 'inspiration', 'what drives', 'why does he'],
    question: 'What motivates Jithendra?',
    answer: 'Jithendra is motivated by the endless possibilities of AI and machine learning to solve real-world problems. The thrill of turning complex data into actionable insights and creating intelligent systems that can make a positive impact drives him every day.'
  },
  {
    keywords: ['challenge', 'problem', 'solve', 'difficult', 'overcome', 'issue', 'trouble', 'fix', 'handle', 'how did he', 'solution'],
    question: 'How did Jithendra solve a challenge in a project?',
    answer: 'In one of his projects, Jithendra faced a challenge with model overfitting on a small dataset. He overcame it by implementing data augmentation techniques, using regularization methods like dropout, and applying transfer learning with pre-trained models, which significantly improved the model\'s generalization.'
  },
  {
    keywords: ['passionate', 'love', 'interest', 'enjoy', 'favorite', 'like', 'care', 'excited', 'enthusiastic', 'what does he love'],
    question: 'What is Jithendra passionate about?',
    answer: 'Jithendra is passionate about AI/ML engineering, particularly in developing end-to-end solutions that combine cutting-edge technology with practical applications. He loves exploring new frameworks, optimizing models, and seeing how AI can transform industries like healthcare and finance.'
  },
  {
    keywords: ['career', 'background', 'experience', 'journey', 'start', 'begin', 'path', 'professional', 'work', 'how did he start'],
    question: 'Tell me about Jithendra\'s career background.',
    answer: 'Jithendra started his journey in AI/ML during his studies, focusing on Python, TensorFlow, and PyTorch. Over time, he\'s worked on various projects involving computer vision, NLP, and deployment of ML models in production environments using cloud platforms like AWS.'
  },
  {
    keywords: ['skill', 'expertise', 'strength', 'good at', 'specialize', 'proficient', 'know', 'able', 'competent', 'what can he do'],
    question: 'What are Jithendra\'s key skills?',
    answer: `Jithendra's key skills include: ${portfolioData.skills.join(', ')}. He also has experience with LangChain for LLM integrations.`
  },
  {
    keywords: ['project', 'work', 'portfolio', 'example', 'built', 'create', 'develop', 'made', 'done', 'what has he built'],
    question: 'Can you tell me about Jithendra\'s projects?',
    answer: `Jithendra has worked on several projects including: ${portfolioData.projects.join(', ')}. Check out his portfolio for more details!`
  },
  {
    keywords: ['goal', 'future', 'plan', 'aspire', 'want', 'aim', 'target', 'objective', 'vision', 'what does he want'],
    question: 'What are Jithendra\'s future goals?',
    answer: portfolioData.goals
  },
  {
    keywords: ['contact', 'reach', 'email', 'connect', 'talk', 'message', 'get in touch', 'communicate', 'speak', 'how to contact'],
    question: 'How can I contact Jithendra?',
    answer: `You can reach Jithendra via email at <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a> or connect with him on <a href="${portfolioData.socials.linkedin}" target="_blank">LinkedIn</a>. He's always open to discussing new opportunities, collaborations, or just chatting about AI/ML!`
  },
  {
    keywords: ['email', 'mail', 'gmail', 'contact email'],
    question: 'What is Jithendra\'s email?',
    answer: `Jithendra's email is <a href="mailto:${portfolioData.contact.email}">${portfolioData.contact.email}</a>.`
  },
  {
    keywords: ['phone', 'mobile', 'number', 'call', 'contact number', 'mobile number'],
    question: 'What is Jithendra\'s phone number?',
    answer: `You can reach Jithendra at <a href="tel:${portfolioData.contact.phone}">${portfolioData.contact.phone}</a>.`
  },
  {
    keywords: ['location', 'where', 'live', 'based', 'city', 'place', 'address'],
    question: 'Where is Jithendra located?',
    answer: `Jithendra is located in ${portfolioData.contact.location}.`
  },
  {
    keywords: ['linkedin', 'professional network', 'social'],
    question: 'What is Jithendra\'s LinkedIn?',
    answer: `Jithendra's LinkedIn profile is: <a href="${portfolioData.socials.linkedin}" target="_blank">${portfolioData.socials.linkedin}</a>`
  },
  {
    keywords: ['github', 'code', 'repository', 'open source'],
    question: 'What is Jithendra\'s GitHub?',
    answer: `Jithendra's GitHub is: <a href="${portfolioData.socials.github}" target="_blank">${portfolioData.socials.github}</a>`
  },
  {
    keywords: ['instagram', 'social media', 'photo'],
    question: 'What is Jithendra\'s Instagram?',
    answer: `Jithendra's Instagram is: <a href="${portfolioData.socials.instagram}" target="_blank">${portfolioData.socials.instagram}</a>`
  },
  {
    keywords: ['twitter', 'x', 'tweet'],
    question: 'What is Jithendra\'s Twitter?',
    answer: `Jithendra's Twitter is: <a href="${portfolioData.socials.twitter}" target="_blank">${portfolioData.socials.twitter}</a>`
  },
  {
    keywords: ['whatsapp', 'message', 'chat'],
    question: 'What is Jithendra\'s WhatsApp?',
    answer: `You can message Jithendra on WhatsApp: <a href="${portfolioData.socials.whatsapp}" target="_blank">${portfolioData.socials.whatsapp}</a>`
  },
  {
    keywords: ['social media', 'socials', 'links', 'profiles', 'accounts', 'all social'],
    question: 'What are Jithendra\'s social media links?',
    answer: `Jithendra's social media profiles: <a href="${portfolioData.socials.linkedin}" target="_blank">LinkedIn</a>, <a href="${portfolioData.socials.github}" target="_blank">GitHub</a>, <a href="${portfolioData.socials.instagram}" target="_blank">Instagram</a>, <a href="${portfolioData.socials.twitter}" target="_blank">Twitter</a>, <a href="${portfolioData.socials.whatsapp}" target="_blank">WhatsApp</a>.`
  },
  {
    keywords: ['hobby', 'free time', 'relax', 'outside work', 'personal', 'fun', 'leisure', 'activity', 'what does he do'],
    question: 'What does Jithendra do in his free time?',
    answer: portfolioData.hobbies
  },
  {
    keywords: ['achievement', 'accomplish', 'success', 'proud', 'milestone', 'accomplishment', 'highlight', 'what has he achieved'],
    question: 'What are some of Jithendra\'s achievements?',
    answer: `Some of Jithendra's key achievements include: ${portfolioData.achievements.join(', ')}.`
  },
  {
    keywords: ['technology', 'tech', 'tool', 'framework', 'language', 'software', 'platform', 'stack', 'what does he use'],
    question: 'What technologies does Jithendra work with?',
    answer: `Jithendra works with a variety of technologies including: ${portfolioData.technologies.join(', ')}.`
  },
  {
    keywords: ['advice', 'tip', 'recommend', 'suggest', 'help', 'guidance', 'mentor', 'learn', 'how to become'],
    question: 'What advice would Jithendra give to aspiring AI/ML engineers?',
    answer: portfolioData.advice
  },
  {
    keywords: ['current', 'now', 'working', 'focus', 'recent', 'latest', 'present', 'today', 'what is he doing'],
    question: 'What is Jithendra working on currently?',
    answer: portfolioData.currentFocus
  },
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'welcome'],
    question: 'Hello!',
    answer: 'Hello! Nice to meet you! I\'m Jithendra\'s AI assistant. How can I help you learn more about his work and experience?'
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'take care', 'bye bye', 'see you later'],
    question: 'Goodbye!',
    answer: 'Goodbye! It was great chatting with you. Feel free to come back anytime if you have more questions about Jithendra\'s portfolio!'
  },
  {
    keywords: ['how are you', 'how do you do', 'how\'s it going', 'what\'s up', 'how are things', 'how is he'],
    question: 'How are you?',
    answer: 'I\'m doing great, thank you for asking! As an AI assistant, I\'m always ready to help. How about you? What would you like to know about Jithendra?'
  },
  {
    keywords: ['thank you', 'thanks', 'thank', 'appreciate', 'grateful', 'much obliged'],
    question: 'Thank you!',
    answer: 'You\'re very welcome! I\'m glad I could help. If you have any more questions, don\'t hesitate to ask!'
  },
  {
    keywords: ['nice', 'cool', 'awesome', 'great', 'amazing', 'impressive', 'wonderful', 'excellent'],
    question: 'That sounds nice!',
    answer: 'Thank you! Jithendra works hard to create innovative AI solutions. Is there anything specific you\'d like to explore further?'
  },
  {
    keywords: ['help', 'assist', 'support', 'aid', 'guide', 'can you'],
    question: 'Can you help me?',
    answer: 'Absolutely! I\'m here to help you learn about Jithendra\'s background, skills, projects, and career. What would you like to know?'
  },
  {
    keywords: ['name', 'who are you', 'what are you', 'introduce', 'yourself', 'who is this'],
    question: 'Who are you?',
    answer: 'I\'m an AI assistant created to help visitors learn about Jithendra Chandra\'s portfolio. I can answer questions about his career, projects, skills, and more. What would you like to know?'
  },
  {
    keywords: ['sorry', 'apologize', 'pardon', 'excuse', 'forgive', 'my bad'],
    question: 'Sorry!',
    answer: 'No need to apologize! I\'m here to help. Feel free to ask anything about Jithendra\'s work and experience.'
  },
  {
    keywords: ['yes', 'yeah', 'yep', 'sure', 'okay', 'alright', 'correct'],
    question: 'Yes!',
    answer: 'Great! I\'m glad we\'re on the same page. What else would you like to explore?'
  },
  {
    keywords: ['no', 'nope', 'nah', 'not really', 'negative'],
    question: 'No!',
    answer: 'No problem at all! If you change your mind or have other questions, I\'m here to help anytime.'
  }
];

export const fallbackMessage = "I'm sorry, I don't have a specific answer for that. Try asking about my motivation, projects, skills, or challenges. Or feel free to contact me directly!";