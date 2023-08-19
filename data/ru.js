exports.default = {
	lang: 'ru',
	siteTitle: 'Артур Атнагулов - веб-разработчик и тимлид',
	name: 'Артур Атнагулов',
	subheading: 'Веб-разработчик и тимлид',
	writeTelegram: 'Написать в Telegram',
	writeEmail: 'Написать на почту',
	aboutMe: 'Обо мне',
	aboutMeText: `
		<p>Разносторонний разработчик с 12-летним опытом работы с backend, frontend и devops. 
		Мой опыт руководства включает в себя управление Agile-командами до 8 разработчиков.</p>

		<p>Сейчас я использую Python для разработки бекенда, ранее в проектах я работал с Java, NodeJS, PHP, C# и Go. 
		Имею опыт работы с Vue, Angular и React. Для настройки CI/CD предпочитаю Gitlab CI, Docker, Ansible и Terraform.</p>

		<p>Полное резюме доступно на <a href="https://linkedin.com/in/atnartur" target="_blank">LinkedIn</a>.</p>
        <p>
        	Также я иногда <a href="https://atnartur.ru" target="_blank">пишу в блог</a> и 
        	<a href="https://atnartur.ru/learn" target="_blank">выкладываю образовательные материалы</a>.
        </p>
	`,
	work: "Работа",
	workPlaces: [
		{
			company: 'EPAM Anywhere',
			year: 'since 2022',
			link: 'https://anywhere.epam.com/en',
			text: 'Senior Software Engineer'
		},
		{
			company: 'ИТИС КФУ',
			year: 'c 2020',
			link: 'https://kpfu.ru/itis',
			text: 'преподаю веб-разработку на Python и DevOps практики в Smart Education Lab'
		},
		{
			company: 'Releven',
			year: '2022',
			link: 'https://releven.co',
			text: `разработка серверной и клиентской частей для платформы изучения английского языка с интеграцией платформ Twilio Video и Chatwoot`
		},
		{
			company: 'Fixtender',
			year: '2021-2022',
			link: 'https://fixtender.com',
			text: `разработка серверной и клиентской части платформы по управлению тендерами в строительстве`
		},
		{
			company: 'Stride',
			year: '2016-2020',
			link: 'https://stride.one',
			text: `разработка проектов на Django + Vue, управление командами разработчиков, поддержка внутренних сервисы (Gitlab, Sentry, Wiki) и серверной инфраструктуру`
		},
		{
			company: 'RVMarket',
			year: '2014-2016',
			link: null,
			text: 'разработка серверной части и административной панели для плеера для 3D-визуализации мебели'
		},
		{
			company: 'Need4Speak',
			year: '2015-2016',
			link: 'https://need4speak.com',
			text: 'разработка веб-сайта и CRM-системы для школы иностранных языков'
		},
		{
			company: 'SmartHead',
			year: '2014',
			link: 'https://smarthead.ru',
			text: 'поддержка административной панели существущего проекта в рамках стажировки'
		},
	],
	projects: "Проекты",
	projectItems: [
		{
			title: "UniEnv",
			text: `хостинг платформа для студенческих веб-приложений. 
			Первая версия работала на Gitlab CI и Dokku (похожая на Heroku платформа развертывания).
			Последняя версия запущена на базе Яндекс.Облака с автоматизацией подключения доменов с помощью Terraform.
			Веб-приложения разработаны на Django & Vue с развертыванием в Docker-контейнерах с помощью Ansible и Gitlab CI.
			Также в рамках проекта были написаны статьи по развертыванию и смежным практикам.`,
			year: "с 2020",
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