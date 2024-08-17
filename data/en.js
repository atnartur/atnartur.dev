exports.default = {
	lang: 'en',
	siteTitle: 'Artur Atnagulov - senior software engineer & teamlead',
	name: 'Artur Atnagulov',
	subheading: 'Senior software engineer & teamlead',
	writeTelegram: 'Write to Telegram',
	writeEmail: 'Write an email',
	aboutMe: 'About me',
	aboutMeText: `
		<p>As an experienced senior software engineer, I possess a robust skill set cultivated over 12 years, 
		characterized by proficiency across backend, frontend, and DevOps domains. My leadership understanding is 
		demonstrated through successfully guiding agile teams of up to 8 developers, ensuring project delivery within 
		allocated timeframes and budgets.</p>

		<p>While my current technical focus centres on Python, my extensive project history encompasses Java, 
		NodeJS, PHP, C#, and Go. In frontend development, I excel in Vue, Angular, and React frameworks. Additionally, 
		I am adept at crafting efficient CI/CD pipelines utilizing tools such as Gitlab CI, Docker, Ansible, and Terraform.</p>

		<p>Complete CV is available on <a href="https://linkedin.com/in/atnartur" target="_blank">LinkedIn</a>.</p>
	`,
	work: "Career",
	workPlaces: [
		{
			company: 'EPAM Systems',
			year: 'since 2022',
			link: 'https://epam.com',
			text: 'Lead Software Engineer'
		},
		{
			company: 'Kazan Federal University',
			year: '2020-2024',
			link: 'https://kpfu.ru/itis',
			text: 'taught web development and DevOps practices in Smart Education Lab of Institute of information technologies and intellectual systems'
		},
		{
			company: 'Fixtender',
			year: '2021-2022',
			text: `developed backend & frontend of construction procurement and tender platform`
		},
		{
			company: 'Stride',
			year: '2016-2020',
			link: 'https://stride.one',
			text: `developed projects on Django + Vue, managed teams up to 8 developers, supported internal services (Gitlab, Sentry, Wiki) & server infrastucture`
		},
	],
	projects: "Projects",
	projectItems: [
		{
			title: "Memix",
			text: `is an online collaborative game where people select funny memes for the displayed situations and have fun.`,
			year: "since 2024",
			link: "https://memix.lol"
		},
		{
			title: "UniEnv",
			text: `is a hosting platform for student developed web applications. 
            First version was based on Gitlab CI and Dokku, Heroku like platform for building and deploying applications.
            Latest version is running on Yandex Cloud and automated domains management with Terraform. 
            Web applications created with Django & Vue with Docker, Ansible & Gitlab CI deployment.
            Project also includes articles about deployment and related practices.`,
			year: "2020 - 2024",
			link: "https://uenv.ru"
		},
		{
			title: "ClienD",
			text: `is a digital diary mobile application with improved UX experince. 
			Daily active users was up to 60&nbsp;000. A latest version was created with Java crossplatform 
			library development and its integration to Android and iOS applications. Numerous of web services were implemented 
			with Python, PHP, MySQL and Gitlab CI.`,
			year: "2013 - 2022",
			link: "https://cliend.ru"
		}
	]
};