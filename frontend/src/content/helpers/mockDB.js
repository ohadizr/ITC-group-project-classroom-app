const topics = [
  {
    topic_id: "NTk4NTY4MTAwNzU1",
    topic_id_num: "598568100755",
    title: "Testing",
    hash_tags_id_arr: ["JEST", "Unit testing", "Regression Test"],
    lessons: [
      {
        idUrl: "NTk5MzQzMTA0MjE2",
        id: "599343104216",
        title: "15.3.23 L",
        tags: ["#unit_testing", "#jest"],
      },
      {
        idUrl: "NTk4NTY5MTc0MTA1",
        id: "598569174105",
        title: "12.3.23 L",
        tags: ["#some_other_testing", "#some_tag"],
      },
    ],
  },
  {
    topic_id: "NTkyNDcwNDE0NTI0",
    topic_id_num: "592470414524",
    title: "SQL",
    hash_tags_id_arr: ["DB", "Workbench SQL"],
    lessons: [
      {
        idUrl: "NTkzODU5MTkyNjMx",
        id: "593859192631",
        title: "17.2.23 L",
        tags: ["#work_bench", "#join"],
      },
      {
        idUrl: "NTkyODMxMTk1OTg0",
        id: "592831195984",
        title: "12.2.23 L",
        tags: ["#new_table", "#SQL"],
      },
      {
        idUrl: "NTYyODE4MTE3NDU2",
        id: "562818117456",
        title: "10.2.23 L",
        tags: ["#some_tags1", "#some_tags2"],
      },
    ],
  },
  {
    topic_id: "NTg3MTU1MjA2OTcz",
    title: "MongoDB",
    hash_tags_id_arr: ["MongoDB1", "MongoDB2", "MongoDB3"],
    lessons: ['MongoDB', 'DB', 'Node.js'],
  },
  {
    topic_id: "NTgwMTQzNzUzMTM1",
    title: "Node.JS",
    hash_tags_id_arr: ['Server', 'Express', 'AJV', 'POST', 'Auth'],
    lessons: [],
  },
  {
    topic_id: "NTYxMzcxNTU2NDU3",
    title: "React",
    hash_tags_id_arr: ['Client', 'CRA', 'SPA', 'MUI', 'CSS'],
    lessons: [],
  },
  {
    topic_id: "NTM3NjY4MTA4NzUy",
    title: "Info",
    hash_tags_id_arr: ['info'],
    lessons: [],
  },
  {
    topic_id: "NTM4NTM5MjQ3NjI3",
    title: "Git & GitHub",
    hash_tags_id_arr: ['GIT', 'Github', 'Commit', 'Branch'],
    lessons: [],
  },
  {
    topic_id: "NTM3NjY4MDkyNDk4",
    title: "HTML&CSS",
    hash_tags_id_arr: [],
    lessons: [],
  },
  {
    topic_id: "NTM4Nzk2ODcwMzE4",
    title: "JavaScript",
    hash_tags_id_arr: [],
    lessons: [],
  },
];

const lessonsCollection = [
  {
    _id: 2,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "596808189146",
    lesson_name: "3.3.23 M",
    hashtagsIdArr: [],
  },
  {
    _id: 7,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "593859192631",
    lesson_name: "17.2.23 L",
    hashtagsIdArr: [],
  },
  {
    _id: 11,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "588974144477",
    lesson_name: "5.2.23 M",
    hashtagsIdArr: [],
  },
  {
    _id: 12,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "588741245719",
    lesson_name: "3.2.23 L",
    hashtagsIdArr: [],
  },
  {
    _id: 13,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "587283030646",
    lesson_name: "29.1.23 L",
    hashtagsIdArr: [],
  },
  {
    _id: 18,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "583325084708",
    lesson_name: "13.1.23 L",
    hashtagsIdArr: [],
  },
  {
    _id: 21,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "581768074921",
    lesson_name: "6.1.23",
    hashtagsIdArr: [],
  },
  {
    _id: 28,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "540511503970",
    lesson_name: "7.12.22 REDUX L",
    hashtagsIdArr: [],
  },
  {
    _id: 31,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "574972001252",
    lesson_name: "Lecture - 30.11.22",
    hashtagsIdArr: [],
  },
  {
    _id: 35,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "573248234428",
    lesson_name: "18.11.22 L (2 parts)",
    hashtagsIdArr: [],
  },
  {
    _id: 37,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "593338171458",
    lesson_name: "Intro to projecs",
    hashtagsIdArr: [],
  },
  {
    _id: 51,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "537842900519",
    lesson_name: "Intro to html&css",
    hashtagsIdArr: [],
  },
  {
    _id: 15678,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "599343104216",
    lesson_name: "15.3.23 L",
    hashtagsIdArr: ['node.js', 'server', 'mongoDB'],
  },
  {
    _id: 15678,
    course_google_no: "NTM3MzQxMzg4MDMz",
    lesson_id: "598569174105",
    lesson_name: "12.3.23 L",
    hashtagsIdArr: ['node.js', 'SQL'],
  },
];

export default topics;
export { lessonsCollection }
