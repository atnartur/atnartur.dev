exports.default = {
	lang: 'ru',
	siteTitle: 'Артур Атнагулов - веб-разработчик и тимлид',
	name: 'Артур Атнагулов',
	subheading: 'Веб-разработчик и тимлид',
	writeTelegram: 'Написать в Telegram',
	writeEmail: 'Написать на почту',
	aboutMe: 'Обо мне',
	aboutMeText: `
		<p>14+ лет опыта в разработке программного обеспечения и управлении командами в стартапах и крупных компаниях 
		в таких областях, как life science, образование, строительство и электронная коммерция. 
		Я привержен созданию высококачественных решений, соответствующих бизнес-целям, уделяя особое внимание четким 
		требованиям и поддержанию атмосферы сотрудничества в команде.</p>

		<p>Имя основной фокус на бэкенд-разработке на Python (FastAPI, Django), также являюсь экспертом во фронтенде 
		(Vue, Angular, React) и DevOps (Gitlab CI, AWS, Terraform, Ansible, Docker), что позволяет мне подходить к 
		проблемам с разных сторон.</p>

		<p>Полное резюме доступно на <a href="https://linkedin.com/in/atnartur" target="_blank">LinkedIn</a>.</p>
        <p>
        	Также я иногда <a href="https://atnartur.ru" target="_blank">пишу в блог</a> и 
        	<a href="https://atnartur.ru/learn" target="_blank">выкладываю образовательные материалы</a>.
        </p>
	`,
	work: "Работа",
	workPlaces: [
		{
			company: 'EMIS Health',
			year: 'since 2024',
			link: 'https://www.emishealth.com/',
			text: 'Lead DevOps Engineer'
		},
		{
			company: 'EPAM Systems',
			year: '2022-2024',
			link: 'https://epam.com',
			text: 'Lead Software Engineer'
		},
		{
			company: 'ИТИС КФУ',
			year: '2020-2024',
			link: 'https://kpfu.ru/itis',
			text: 'преподаю веб-разработку на Python и DevOps практики в Smart Education Lab'
		},
		{
			company: 'Fixtender',
			year: '2021-2022',
			text: `разработка серверной и клиентской части платформы по управлению тендерами в строительстве`
		},
		{
			company: 'Stride',
			year: '2016-2020',
			link: 'https://stride.one',
			text: `разработка проектов на Django + Vue, управление командами разработчиков, поддержка внутренних сервисы (Gitlab, Sentry, Wiki) и серверной инфраструктуру`
		}
	],
	projects: "Проекты",
	projectItems: [
		{
			title: "Memix",
			text: `веселая онлайн игра, где нужно выбрать самый смешной мем к показанной ситуации.`,
			year: "с 2024",
			link: "https://memix.lol"
		},
		{
			title: "UniEnv",
			text: `хостинг платформа для студенческих веб-приложений. 
			Первая версия работала на Gitlab CI и Dokku (похожая на Heroku платформа развертывания).
			Последняя версия запущена на базе Яндекс.Облака с автоматизацией подключения доменов с помощью Terraform.
			Веб-приложения разработаны на Django & Vue с развертыванием в Docker-контейнерах с помощью Ansible и Gitlab CI.
			Также в рамках проекта были написаны статьи по развертыванию и смежным практикам.`,
			year: "2020-2024",
			link: "https://uenv.ru"
		},
		{
			title: "ClienD",
			text: `электронный дневник в мобильном приложении с улучшенным UX. Ежедневная аудитория достигала 60&nbsp;000 пользователей.
			Последняя версия была создана с разработкой кроссплатформенной библиотеки Java и ее интеграцией 
			в приложения Android и iOS. Множество веб-сервисов было разработано на Python, PHP, MySQL and Gitlab CI.`,
			year: "2013 - 2022",
			link: "https://cliend.ru"
		}
	]
};