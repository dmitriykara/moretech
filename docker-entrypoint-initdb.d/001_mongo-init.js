db.Users.insertMany([
  {
    department: "R&D",
    login: "fabakumov",
    name: "Абакумов Фёдор",
  },
  {
    department: "PR",
    login: "apetrova",
    name: "Петрова Анастасия",
  },
  {
    department: "IT",
    login: "mvasutkina",
    name: "Васюткина Марина",
  },
  {
    department: "HR",
    login: "pshumov",
    name: "Шумов Пётр",
  },
  {
    department: "CEO",
    login: "kgolovanov",
    name: "Голованов Кирилл",
  },
  {
    department: "CTO",
    login: "gabramov",
    name: "Абрамов Геннадий",
  },
  {
    department: "FinDept",
    login: "ukomarova",
    name: "Комарова Ульяна",
  },
])

db.Polls.insertMany([
  {
    answers: [
      {
        isFinal: true,
        result: true,
        text: "Я люблю 4 сыра",
        user: "gabramov",
      },
      {
        isFinal: false,
        result: true,
        text: "Я тоже люблю 4 сыра",
        user: "kgolovanov",
      },
      {
        isFinal: false,
        result: false,
        text: "Не люблю сырные пиццы",
        user: "ukomarova",
      },
      {
        isFinal: false,
        result: true,
        text: "Мой начальники любят 4 сыра, а я нет",
        user: "fabakumov",
      },
    ],
    description: "Все согласны на '4 сыра'?",
    partitipants: [
      "gabramov",
      "kgolovanov",
      "ukomarova",
      "fabakumov",
    ],
    theme: "Заказ пиццы",
  }
])

db.Polls.insertMany([
  {
    answers: [
      {
        isFinal: true,
        result: true,
        text: "Всё устраивает",
        user: "gabramov",
      },
      {
        isFinal: true,
        result: false,
        text: "Не согласен со сроками разработки",
        user: "kgolovanov",
      },
      {
        isFinal: false,
        result: false,
        text: "Сроки разработки слишком маленькие",
        user: "mvasutkina",
      },
      {
        isFinal: false,
        result: false,
        text: "Нужно сначала провести оценку рентабельности проекта",
        user: "fabakumov",
      },
    ],
    description: "Согласны ли Вы с ТЗ проекта?",
    partitipants: [
      "gabramov",
      "kgolovanov",
      "mvasutkina",
      "fabakumov",
    ],
    theme: "Разработка нового программного продукта",
  }
])