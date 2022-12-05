const ADD_READER = 'ADD-READER';

let state = {
	admin: {
		tables: {
			readers: [
				{
					name: 'Sergey Zorya',
					email: 'sergey.zorya@gmail.com',
					phone: '+380935096324',
					status: 'Немає боргів',
					needs: true,
				},
				{
					name: 'Sergey Zorya',
					email: 'sergey.zorya@gmail.com',
					phone: '+380935096324',
					status: 'Немає боргів',
					needs: false,
				},
			],
			books: [
				{
					name: '12 Обручів',
					author: 'Юрій Андрухович',
					number: '15140',
					status: 'У наявності',
					id: 23,
				},
				{
					name: 'Избранные сны',
					author: 'Римма Запесоцька',
					number: '14977',
					status: 'У наявності',
					id: 24,
				},
			],
			applications: [
				{
					name: 'Пащенко Іван Анатолійович',
					book: 'Як опанувати сувору типізацію',
					date: '20.11.2022',
					number: '8345535',
				},
				{
					name: 'Пащенко Іван Анатолійович',
					book: 'Як опанувати сувору типізацію',
					date: '20.11.2022',
					number: '8345535',
				},
			],
		},
	},
	data: {
		books: [
			{
				bookAuthor: "Сергій Жадан, Любко Дереш, Юрій Андрухович",
				id: "trytsylindrovyy-dvyhun-lyubovi",
				bookStatus: "У бібліотеці",
				bookName: "Трициліндровий двигун любові",
				bookImg: "https://drive.google.com/uc?export=view&id=1I6e9S0yWLcKpDrDwCFQW3Ki9a5AxR_uT",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				isPopularBook: true,
				lang: "Українська",
				pageAmount: "219",
				bookType: "Паперова",
				ISBN: "978-966-10-5640-3",
				dateOfPublication: "2008",
				bookDesc: "",
				recBooks: [
					"iz-soho-dna",
					"brat-2",
					"pokhoron-bohiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Юрій Андрухович",
				id: "12-obruchiv",
				bookName: "12 обручів",
				bookImg: "https://drive.google.com/uc?export=view&id=1-Qz85aAQHVPvc5qhGELvKY6Jb0NXeUgy",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				isPopularBook: true,
				lang: "Українська",
				pageAmount: "288",
				bookType: "Паперова",
				ISBN: "978-966-14-4812-3",
				dateOfPublication: "2003",
				bookDesc: "Відень — Львів — Карпати — потойбіччя... Це — маршрут подорожі Карла-Йозефа Цумбруннена, австрійського фотохудожника, услід якому рухається сюжет роману живого класика української літератури. Химерний калейдоскоп із архетипів гуцульського фольклору, богемно-артистичних історій, мафіозної гризні, а над усім – трагічний образ поета Богдана-Ігоря Антонича з його віщими віршами. Однак головною героїнею багатошарового, мов гірський рельєф, роману є власне Україна на зламі ХХ—ХХI століть.",
				recBooks: [
					"trytsylindrovyy-dvyhun-lyubovi",
					"zahovoreno-na-lyubov",
					"yzbrannye-sny"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Римма Запесоцька",
				id: "yzbrannye-sny",
				bookName: "Избранные сны",
				bookImg: "https://drive.google.com/uc?export=view&id=1K4IOE_g3_09T7O8HX5zleCRuUGxiBe8O",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				isPopularBook: true,
				lang: "Російська",
				pageAmount: "320",
				bookType: "Паперова",
				ISBN: "978-617-7390-15-1",
				dateOfPublication: "2007",
				bookDesc: "В книге представлена разнообразная по жанрам проза. В рассказах, написанных от первого лица, сюжеты взяты из жизни и во многом автобиографичны. Здесь же автор делится своими размышлениями о пророческой кинороли гениального актёра и о понятии «покой» в одном знаменитом романе. Очерки, включенные в книгу, — о творцах и их творчестве, о неожиданных параллелях в судьбах личностей, вошедших в историю мировой культуры.",
				recBooks: [
					"zahovoreno-na-lyubov",
					"armahedon-na-maydani",
					"iz-soho-dna"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Катерина Бабкіна",
				id: "zahovoreno-na-lyubov",
				bookName: "Заговорено на любов",
				bookImg: "https://drive.google.com/uc?export=view&id=10KtRm7iX2eEvmbkVFLKFeuo1dYBJDm7y",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				isPopularBook: true,
				lang: "Українська",
				pageAmount: "94",
				bookType: "Паперова",
				ISBN: "9786171234536",
				dateOfPublication: "2017",
				bookDesc: "Нова збірка відомої письменниці та поетесиВірші, що мають бути в кожній жіночій сумочціТри книжки авторки увійшли до довгих списків премії «Книга року BBC»Збірка поезій «Заговорено на любов» — це радше збірка емоцій, щасть, сокровенних таємниць та сердечних ран, аніж вірші. Навіть ті, хто не звик зачитуватися поезіями, знайдуть серед текстів Катерини Бабкіної слова, здатні описати саме їхні любов чи тугу, радість, гіркоту, біль, страхи або надії. Тут із граничною відвертістю постають перед читачем і найсильніші почуття, і сучасна буденність, і свято душі, і війна, котра непомітно, але невідступно пронизує мрії, переживання і вплітається у кожен наш день, у кожну думку, кожен порив серця.Про автора:Катерина Бабкіна — одна з найпомітніших постатей у сучасній українській літературі, авторка збірок поезій, оповідань, повістей для дітей та роману «Соня»; три книжки авторки увійшли до довгих списків «Книги року BBC». Тексти письменниці перекладені польською, німецькою, англійською, шведською, французькою, румунською, чеською, івритом та російською, її книжки виходять друком в Австрії та Німеччині, Франції та Ізраїлі. За сценаріями авторки знято кілька успішних короткометражних стрічок, а написану нею п’єсу «Гамлет. Вавилон» ставили в Києві, Женеві та Відні.",
				recBooks: [
					"pekhota",
					"pokhoron-bohiv",
					"12-obruchiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Василь Базів",
				id: "armahedon-na-maydani",
				bookName: "Армагедон на Майдані",
				bookImg: "https://drive.google.com/uc?export=view&id=1G7En-T1SN9exxirncl1GwvlX1U7IbHEs",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Краєзнавча література",
				isPopularBook: true,
				lang: "Українська",
				pageAmount: "160",
				bookType: "Паперова",
				ISBN: "978-966-2669-57-2",
				dateOfPublication: "2015",
				bookDesc: "Майдан, який пережила Україна взимку цього року, звичайно, не міг не спричинити і своєрідного літературного відгуку. За останні кілька місяців уже видано кілька антологій віршів, присвячених Майдану-2013/2014. Проте нова повість Василя Базіва «Армагеддон на Майдані» – цікава спроба письменника (і водночас дипломата, політика) передати свою версію подій.",
				recBooks: [
					"yzbrannye-sny",
					"iz-soho-dna",
					"pokhoron-bohiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Ярослав Яріш, Ярослава Бакалець",
				id: "iz-soho-dna",
				bookName: "Із сьомого дна",
				bookImg: "https://drive.google.com/uc?export=view&id=1QsUcz7nIvRG0HoYbtLLLBPRb3okU0gsT",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Українська",
				pageAmount: "400",
				bookType: "Паперова",
				ISBN: "978-966-14-1036-6",
				dateOfPublication: "2011",
				bookDesc: "Диявол ніколи не спить! От і послав він трьох чортів в Україну, щоб сіяли ненависть і розбрат між козаками Богдана Хмельницького, які ще вчора воювали разом проти татарів і поляків. У фантастичному обрамленні реальні історичні особи оживають для боротьби із потойбіччям. Одні падають на сьоме дно пекла, інші ж підіймаються на сьоме небо. Битва за України триває... «Із сьомого дна» – переможець «Коронації слова» 2010 року в номінації «Роман».",
				recBooks: [
					"pivyabluka-inshi-pivyabluka",
					"svitlonosets-mech-voli",
					"peremozhtsiv-ne-sudyat"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Беркут Ігор",
				id: "brat-2",
				bookName: "Брат - 2",
				bookImg: "https://drive.google.com/uc?export=view&id=1iIAS2lj3KIm_ke7B1MAtJbZEvPPvfQgz",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Російська",
				pageAmount: "264",
				bookType: "Паперова",
				ISBN: "978-966-2434-24-8",
				dateOfPublication: "2014",
				bookDesc: "В Украине вышла из печати новая книга Игоря Беркута и Романа Василишина «БРАТ-2» – продолжение скандального бестселлера «БРАТ», изданного в 2009 году. Являясь продолжением книги «БРАТ», в которой были представлены возможные международные конфликты сквозь призму интересов России, новая книга «БРАТ-2» раскрывает мировые притязания и интересы другого «старшего брата» Украины – США. В этот раз авторы рассматривают возможные сценарии вооруженных конфликтов, в которые США постараются вовлечь ряд стран, во что выльются и чем закончатся эти конфликты для всего мира и для Украины в частности. «Брат-2» - книга про США.",
				recBooks: [
					"pokhoron-bohiv",
					"zahovoreno-na-lyubov",
					"yzbrannye-sny"
				],
				bookCategories: [
					"detektyvy",
					"dovidkovi-vydannya"
				],
			},
			{
				bookAuthor: "Іван Білик",
				id: "pokhoron-bohiv",
				bookName: "Похорон Богів",
				bookImg: "https://drive.google.com/uc?export=view&id=1PrEfoBj99A7lzXXuw3nxY5d5rw4OLWyw",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Українська",
				pageAmount: "480",
				bookType: "Паперова",
				ISBN: "966-539-477-0",
				dateOfPublication: "2008",
				bookDesc: "Читачів чарує далекий світ наших пращурів, невідомий і загадковий, дізнаємося про мудрого Стана і немудрого Ігоря, про войовничого Святослава і його трьох синів, про Блажія Муромця і його синів. Звичайні воїни і великі воєводи, слов’янські просвітителі Кирило і Мефодій, невільники, які пізніше стали князями, та князі з невільницькими кайданами постають перед очима зацікавленого читача.",
				recBooks: [
					"svitlonosets-mech-voli",
					"brat-2",
					"peremozhtsiv-ne-sudyat"
				],
				bookCategories: [
					"detektyvy",
					"dovidkovi-vydannya"
				],
			},
			{
				bookAuthor: "Євгеній Тищенко",
				id: "svitlonosets-mech-voli",
				bookName: "Светлоносец. Меч Воли",
				bookImg: "https://drive.google.com/uc?export=view&id=1YuwgLPX4SHHmHCn9KaGOy50VbIbpD6C1",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Російська",
				pageAmount: "144",
				bookType: "Паперова",
				ISBN: "978-966-986-145-0",
				dateOfPublication: "2019",
				bookDesc: "Создание отечественного современного героя, несет свет и добро. Для детского круга, - это реальные события и путешествия героя мирами, и борьба с нечистыми силами. Для взрослого круга читателей, - это внутренняя духовная борьба. Меч Свободы, как реальная оружие, и как духовная, содержится в сердцах тех, кто ищет видповиди.Виховання понятия добра «неискаженного». Идея восстановления истинного образа человека в обществе. Путем откровения в дальнейшем фундамента человечности - путем исследования души первозданной, именно первозданной - разумной, что имеет дар рассуждения, что есть добро, а что зло. Только Разум может открыть истинный смысл всех вещей в мире (смысл он непреклонен, он неизменный). Мы, теряя разум, теряем истинный смысл вещей ... Истина в легком сюжете поможет читателю, задуматься и принять сторону света и превратиться в целостную личность.",
				recBooks: [
					"zahovoreno-na-lyubov",
					"yzbrannye-sny",
					"12-obruchiv"
				],
				bookCategories: [
					"detektyvy",
					"dovidkovi-vydannya"
				],
			},
			{
				bookAuthor: "Мартін Брест",
				id: "pekhota",
				bookName: "Пехота",
				bookImg: "https://drive.google.com/uc?export=view&id=1i3G_irKX2T5UXvi6a9XAn3Jm-MyjdN5a",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Російська",
				pageAmount: "384",
				bookType: "Паперова",
				ISBN: "978-966-97622-6-9",
				dateOfPublication: "2017",
				bookDesc: "Эта книга написана о войне на востоке Украины ее непосредственным участником, жителем Донецкой области, сержантом сначала 41омпб, а затем 72 ОМБр Вооруженных Сил Украины, бойцом с позывным \"Мартин Брест\". Автор рассказывает о том, через что ему пришлось пройти за девять месяцев жизни на передовой, рассказывает честно, иронично, смешно и откровенно. О атаки и оборону, о технике и военный быт, и всегда - о людях, хороших и разных, которые воюют за свою страну. Точная, понятная и образная речь Мартина Бреста давно полюбилась десяткам тысяч его читателей в Фейсбуке, а теперь несомненный талант автора можете оценить и вы.",
				recBooks: [
					"pokhoron-bohiv",
					"armahedon-na-maydani",
					"pivyabluka-inshi-pivyabluka"
				],
				bookCategories: [
					"detektyvy",
					"dovidkovi-vydannya"
				],
			},
			{
				bookAuthor: "Есаулов Олександр",
				id: "peremozhtsiv-ne-sudyat",
				bookName: "Переможців не судять",
				bookImg: "https://drive.google.com/uc?export=view&id=1qzjaXYKeUvHsDFOp5MdP4h6flXttWFui",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Краєзнавча література",
				lang: "Українська",
				pageAmount: "336",
				bookType: "Паперова",
				ISBN: "978-966-10-1544-8",
				dateOfPublication: "2011",
				bookDesc: "Складні перипетії людських взаємин, визвольна боротьба підпілля ОУН у період радянської окупації та Другої світової війни на теренах Тернопільщини. Кохання та зрада, мужність і ницість — усе це переплелося в захоплюючій канві роману, що побудований на достовірних фактах.",
				recBooks: [
					"armahedon-na-maydani",
					"brat-2",
					"pekhota"
				],
				bookCategories: [
					"detektyvy",
					"dovidkovi-vydannya"
				],
			},
			{
				bookAuthor: "Галина Вдовиченко",
				id: "pivyabluka-inshi-pivyabluka",
				bookName: "Пів'яблука. Інші пів'яблука",
				bookImg: "https://drive.google.com/uc?export=view&id=1kDneD_RppqKN5d4kOS_dLBWY4Ifh3O0Q",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Українська",
				pageAmount: "472",
				bookType: "Паперова",
				ISBN: "978-617-679-660-2",
				dateOfPublication: "2019",
				bookDesc: "«Пів'яблука. Інші пів'яблука» — історія жіночої дружби, що дозволить читачеві поглянути на звичні речі по-новому, оповідь про долі чотирьох подруг — таких різних, але однаково близьких. Одного разу вони знаходять незвичайний сувенір. Те, що спершу здавалося просто цікавою іграшкою, починає у дивовижний спосіб змінювати життя жінок, виконуючи найпотаємніші бажання кожної з них... Знахідка стане початком нових пригод, вона покаже, чого насправді бажають подруги. Хто зміг створити цей шедевр? І чому майстер Пінзель, найзагадковіший галицький скульптор XVIII століття, що далі помітніше впливає на тих, хто живе у XXI столітті? Дізнайтесь усі таємниці, прочитавши цю чудову книжку.Романи «Пів'яблука» та «Інші пів'яблука», з якими свого часу дебютувала Галина Вдовиченко, — вперше під однією обкладинкою, у новій авторській редакції.",
				recBooks: [
					"peremozhtsiv-ne-sudyat",
					"pekhota",
					"12-obruchiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Автор",
				id: "book-1",
				bookName: "Назва книги",
				bookImg: "",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Українська",
				pageAmount: "13",
				bookType: "Паперова",
				ISBN: "978-617-679-660-2",
				dateOfPublication: "2022",
				bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				recBooks: [
					"peremozhtsiv-ne-sudyat",
					"pekhota",
					"12-obruchiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Автор",
				id: "book-2",
				bookName: "Назва книги",
				bookImg: "",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Українська",
				pageAmount: "13",
				bookType: "Паперова",
				ISBN: "978-617-679-660-2",
				dateOfPublication: "2022",
				bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				recBooks: [
					"peremozhtsiv-ne-sudyat",
					"pekhota",
					"12-obruchiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
			{
				bookAuthor: "Автор",
				id: "book-3",
				bookName: "Назва книги",
				bookImg: "",
				ganreImg: "http://1.smart-library.in.ua/img/icon.png",
				ganreText: "Художня література",
				lang: "Українська",
				pageAmount: "13",
				bookType: "Паперова",
				ISBN: "978-617-679-660-2",
				dateOfPublication: "2022",
				bookDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				recBooks: [
					"peremozhtsiv-ne-sudyat",
					"pekhota",
					"12-obruchiv"
				],
				bookCategories: [
					"detektyvy"
				],
			},
		],
	},
};
export const addReaderActionCreator = () => {
	return {
		type: ADD_READER,
	};
};
export default state;
