db.Departments.drop()
db.Faculties.drop()
db.Teachers.drop()
db.Subjects.drop()

//-----------------------Departments-----------------------------------------

let FDT_math_dept = db.Departments.insertOne({
	"name": "Кафедра высшей математики",
}) 
let FDT_isct_dept = db.Departments.insertOne({
	"name": "Кафедра информационных систем и цифровых технологий",
}) 
let FDT_fiz_dept = db.Departments.insertOne({
	"name": "Кафедра физики",
}) 
let FL_dept1 = db.Departments.insertOne({
	"name": "Кафедра государственно-правовых дисциплин",
}) 
let FL_dept2 = db.Departments.insertOne({
	"name": "Кафедра гражданско-правовых дисциплин",
}) 
let FL_dept3 = db.Departments.insertOne({
	"name": "Кафедра уголовно-правовых дисциплин",
}) 
let FEM_dept1 = db.Departments.insertOne({
	"name": "Кафедра менеджмента и государственного муниципального управления",
}) 
let FEM_dept2 = db.Departments.insertOne({
	"name": "Кафедра финансов, бухгалтерского учета и экономической безопасности",
}) 
let FBF_dept1 = db.Departments.insertOne({
	"name": "Кафедра биологии и ихтиологии",
}) 
let FBF_dept2 = db.Departments.insertOne({
	"name": "Кафедра экологии и природопользования",
}) 
let FFTB_dept1 = db.Departments.insertOne({
	"name": "Кафедра цифровой нутрициологии, гостиничного и ресторанного сервиса",
}) 
let FFTB_dept2 = db.Departments.insertOne({
	"name": "Кафедра биотехнологий продуктов питания из растительного и животного сырья",
}) 

//-----------------------FACULTIES-----------------------------------------------------------------------------

let Facult_Digital_Technologies = db.Faculties.insertOne({ 
	"name": "Факультет Цифровых Технологий",
	"departments": [
		db.Departments.findOne({"_id": FDT_math_dept.insertedId}),
		db.Departments.findOne({"_id": FDT_isct_dept.insertedId}),
		db.Departments.findOne({"_id": FDT_fiz_dept.insertedId})		
	],
	"groups": [
	{
		"number": 204,
		"direction": "Фундаментальная информатика и информационные технологии",
		"course_number": 3,
	},
	{
		"number": 215,
		"direction": "Математическое обеспечение",
		"course_number": 2,
	},
	{
		"number": 194,
		"direction": "Фундаментальная информатика и информационные технологии",
		"course_number": 4,
	},
	]
})
let Faculty_Law = db.Faculties.insertOne({ 
	"name": "Юридический факультет",
	"departments": [
		db.Departments.findOne({"_id": FL_dept1.insertedId}),
		db.Departments.findOne({"_id": FL_dept2.insertedId}),
		db.Departments.findOne({"_id": FL_dept3.insertedId})	
	],
	"groups": [
	{
		"number": 1922,
		"direction": "Юриспруденция",
		"course_number": 4,
	},
	]
})
let Faculty_Economics_and_Management = db.Faculties.insertOne({ 
	"name": "Факультет экономики и управления",
	"departments": [
		db.Departments.findOne({"_id": FEM_dept1.insertedId}),
		db.Departments.findOne({"_id": FEM_dept2.insertedId}),
	],
	"groups": [

	]
})	
let Faculty_Biotechnology_and_Fisheries = db.Faculties.insertOne({ 
	"name": "Факультет биотехнологий и рыбного хозяйства ",
	"departments": [
		db.Departments.findOne({"_id": FBF_dept1.insertedId}),
		db.Departments.findOne({"_id": FBF_dept2.insertedId}),
	],
	"group": [

	]
})
let Faculty_Food_Technology_and_Bioengineering = db.Faculties.insertOne({ 
	"name": "Факультет пищевых технологий и биоинженерии",
	"departments": [
		db.Departments.findOne({"_id": FFTB_dept1.insertedId}),
		db.Departments.findOne({"_id": FFTB_dept2.insertedId}),
	],
	"group": [

	]
})

//-----------------------TEACHERS-----------------------------------------------------------------------------

let Teacher_FDT_1 = db.Teachers.insertOne({
	"first_name": "Арсений",
	"last_name": "Никонов",
	"phone_number": "7(495)868-61-75",
	"date_birth": new Date("1981-11-11T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 2,
	"academic_title": "Доцент",
	"defended_dissertations": [
	{
		"name": "Название диссертации",
		"type": "Докторская",
		"date_defence": new Date("2005-05-22T16:00:00Z"),
	}
	],
	"post": "Доцент",
	"salary": 45000,
	"department": db.Departments.findOne({"_id": FDT_isct_dept.insertedId}),
})

let Teacher_FDT_2 = db.Teachers.insertOne({
	"first_name": "Виктор",
	"last_name": "Сидоров",
	"phone_number": "7(495)999-33-95",
	"date_birth": new Date("1989-11-11T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 2,
	"academic_title": null,
	"defended_dissertations": [
	{
		"name": "Название кандидатской диссертации",
		"type": "Кандидатская",
		"date_defence": new Date("2011-03-29T16:00:00Z"),
	}
	],
	"post": "Преподователь",
	"salary": 38000,
	"department": db.Departments.findOne({"_id": FDT_isct_dept.insertedId}),
})

let Teacher_FDT_3 = db.Teachers.insertOne({
	"first_name": "Алексей",
	"last_name": "Поздняков",
	"phone_number": "7(495)007-76-04",
	"date_birth": new Date("1995-08-24T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"academic_title": null,
	"defended_dissertations": null,
	"post": "Старший преподователь",
	"salary": 35000,
	"department": db.Departments.findOne({"_id": FDT_isct_dept.insertedId}),
})
let Teacher_FDT_4 = db.Teachers.insertOne({
	"first_name": "Владимир",
	"last_name": "Коновалов ",
	"phone_number": "7(495)606-78-65",
	"date_birth": new Date("1966-05-18T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 3,
	"academic_title": "Профессор",
	"defended_dissertations": [{
		"name": "Название докторской диссертации",
		"type": "Докторская",
		"date_defence": new Date("1998-05-01T16:00:00Z"),
	}
	],
	"post": "Профессор",
	"salary": 52500,
	"department": db.Departments.findOne({"_id": FDT_fiz_dept.insertedId}),
})
let Teacher_FDT_5 = db.Teachers.insertOne({
	"first_name": "Яна",
	"last_name": "Лапшина",
	"phone_number": "7(495)606-78-88",
	"date_birth": new Date("1997-01-01T16:00:00Z"),
	"gender": "Жен.",
	"amount_children": 1,
	"academic_title": null,
	"defended_dissertations": null,
	"post": "Ассистент",
	"salary": "",
	"department": db.Departments.findOne({"_id": FDT_fiz_dept.insertedId}),
})
let Teacher_FDT_6 = db.Teachers.insertOne({
	"first_name": "Иван",
	"last_name": "Колпинский",
	"phone_number": "7(495)356-45-18",
	"date_birth": new Date("1985-12-13T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 1,
	"academic_title": "Доцент",
	"defended_dissertations": [
	{
		"name": "Название докторской диссертации",
		"type": "Докторская",
		"date_defence": new Date("2015-08-01T16:00:00Z"),
	}
	],
	"post": "Доцент",
	"salary": 48500,
	"department": db.Departments.findOne({"_id": FDT_math_dept.insertedId}),
})
let Teacher_FEM_1 = db.Teachers.insertOne({
	"first_name": "Татьяна",
	"last_name": "Маркова",
	"phone_number": "7(495)606-78-83",
	"date_birth": new Date("1970-06-06T16:00:00Z"),
	"gender": "Жен.",
	"amount_children": 3,
	"academic_title": "Профессор",
	"defended_dissertations": [
	{
		"name": "Название докторской диссертации",
		"type": "Докторская",
		"date_defence": new Date("1999-05-27T16:00:00Z"),
	}
	],
	"post": "Профессор",
	"salary": 50500,
	"department": db.Departments.findOne({"_id": FEM_dept2.insertedId}),
})
let Teacher_FBF_1 = db.Teachers.insertOne({
	"first_name": "Марина",
	"last_name": "Тарина",
	"phone_number": "7(495)842-16-33",
	"date_birth": new Date("1968-11-19T16:00:00Z"),
	"gender": "Жен.",
	"amount_children": 2,
	"academic_title": "Профессор",
	"defended_dissertations": [
	{
		"name": "Название кандидатской диссертации",
		"type": "Кандидатская",
		"date_defence": new Date("1988-09-12T16:00:00Z"),
	},
	{
		"name": "Название докторской диссертации",
		"type": "Докторская",
		"date_defence": new Date("1991-02-17T16:00:00Z"),
	}
	],
	"post": "Профессор",
	"salary": 53500,
	"department": db.Departments.findOne({"_id": FBF_dept1.insertedId}),
})

//-----------------------SUBJECTS-----------------------------------------------------------------------------

let Subject1 = db.Subjects.insertOne({
	"name": "Физика",
	"form_control": "Экзамен",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FDT_4.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_4.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "168",
	},
	{
		"type_subject": "Практическое занятие",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_5.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "168",
	},
	]
})
let Subject2 = db.Subjects.insertOne({
	"name": "Программирование",
	"form_control": "Экзамен",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "98",
	},
	{
		"type_subject": "Лабораторная",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_2.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "98",
	},
	]
})
let Subject3 = db.Subjects.insertOne({
	"name": "Программирование",
	"form_control": "Зачёт",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "98",
	},
	{
		"type_subject": "Лабораторная",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_3.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "168",
	},
	]
})
let Subject4 = db.Subjects.insertOne({
	"name": "Экономика",
	"form_control": "Экзамен",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "64",
	},
	{
		"type_subject": "Семинар",
		"teacher": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "32",
	},
	]
})
let Subject5 = db.Subjects.insertOne({
	"name": "Экономика",
	"form_control": "Зачет",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Семинар",
		"teacher": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "168",
	},
	]
})
let Subject6 = db.Subjects.insertOne({
	"name": "Программирование на Python",
	"form_control": "Зачет",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "168",
	},
	{
		"type_subject": "Лабораторная",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_3.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "168",
	},
	]
})
let Subject7 = db.Subjects.insertOne({
	"name": "Биология",
	"form_control": "Экзамен",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FBF_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FBF_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "128",
	},
	{
		"type_subject": "Семинар",
		"teacher": db.Teachers.findOne({"_id": Teacher_FBF_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "128",
	},
	]
})
let Subject8 = db.Subjects.insertOne({
	"name": "Математический анализ",
	"form_control": "Экзамен",
	"main_teacher": db.Teachers.findOne({"_id": Teacher_FDT_6.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	"hours": [
	{
		"type_subject": "Практическое занятие",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_6.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "128",
	},
	{
		"type_subject": "Лекция",
		"teacher": db.Teachers.findOne({"_id": Teacher_FDT_6.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
		"hours": "128",
	},
	]
})

//-----------------------STUDENTS-----------------------------------------------------------------------------

let Student_204_1 = db.Students.insertOne({
	"first_name": "Марина",
	"last_name": "Колесникова",
	"phone_number": "7(495)336-48-82",
	"date_birth": new Date("2002-06-26T16:00:00Z"),
	"gender": "Жен.",
	"amount_children": 0,
	"group_number": 204,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject8.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		}
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject7.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 2500,
})
let Student_204_2 = db.Students.insertOne({
	"first_name": "Иван",
	"last_name": "Жуков",
	"phone_number": "7(495)355-32-84",
	"date_birth": new Date("2002-05-12T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 204,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject8.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		}
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject7.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 0,
})
let Student_204_3 = db.Students.insertOne({
	"first_name": "Татьяна",
	"last_name": "Русикова",
	"phone_number": "7(495)444-41-87",
	"date_birth": new Date("2002-08-05T16:00:00Z"),
	"gender": "Жен.",
	"amount_children": 0,
	"group_number": 204,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject8.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		}
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject7.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 5500,
})
let Student_194_1 = db.Students.insertOne({
	"first_name": "Кирилл",
	"last_name": "Кузькин",
	"phone_number": "7(495)336-55-84",
	"date_birth": new Date("2001-06-11T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 194,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject8.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		}
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject7.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 5,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 6,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	],
	"scolarship_amount": 2500,
	"graduate_thesis": {
		"name": "Название диплома",
		"scietific_supervisor": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	},
})
let Student_194_2 = db.Students.insertOne({
	"first_name": "Алина",
	"last_name": "Волчанина",
	"phone_number": "7(495)446-55-84",
	"date_birth": new Date("2001-03-09T16:00:00Z"),
	"gender": "Жен.",
	"amount_children": 1,
	"group_number": 194,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject8.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 2,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		}
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject7.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 2,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 5,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 6,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	],
	"scolarship_amount": 0,
	"graduate_thesis": {
		"name": "Название диплома",
		"scietific_supervisor": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	},
})
let Student_194_3 = db.Students.insertOne({
	"first_name": "Илья",
	"last_name": "Габидин",
	"phone_number": "7(495)336-55-84",
	"date_birth": new Date("2001-06-11T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 194,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject8.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		}
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject7.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 5,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 6,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		]
	},
	],
	"scolarship_amount": 0,
	"graduate_thesis": {
		"name": "Название диплома",
		"scietific_supervisor": db.Teachers.findOne({"_id": Teacher_FDT_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	},
})
let Student_205_3 = db.Students.insertOne({
	"first_name": "Марк",
	"last_name": "Вилкин",
	"phone_number": "7(495)888-22-14",
	"date_birth": new Date("2002-02-18T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 205,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 0,
})
let Student_205_1 = db.Students.insertOne({
	"first_name": "Данил",
	"last_name": "Ложкин",
	"phone_number": "7(495)148-22-14",
	"date_birth": new Date("2002-12-18T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 205,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 5500,
})
let Student_205_2 = db.Students.insertOne({
	"first_name": "Алексей",
	"last_name": "Ножкин",
	"phone_number": "7(495)475-22-14",
	"date_birth": new Date("2002-04-22T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 205,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 2,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 0,
})
let Student_1922_1 = db.Students.insertOne({
	"first_name": "Сергей",
	"last_name": "Ходаков",
	"phone_number": "7(495)683-51-18",
	"date_birth": new Date("2001-04-20T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 1922,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 2,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
		{
		"number_semestr": 5,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 6,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 0,
	"graduate_thesis": {
		"name": "Название диплома",
		"scietific_supervisor": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	},
})
let Student_1922_2 = db.Students.insertOne({
	"first_name": "Максим",
	"last_name": "Худяков",
	"phone_number": "7(495)914-11-13",
	"date_birth": new Date("2001-09-20T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 1922,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 4,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
		{
		"number_semestr": 5,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 6,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 2500,
	"graduate_thesis": {
		"name": "Название диплома",
		"scietific_supervisor": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	},
})
let Student_1922_3 = db.Students.insertOne({
	"first_name": "Аркадий",
	"last_name": "Паровозов",
	"phone_number": "7(495)699-51-18",
	"date_birth": new Date("2001-06-17T16:00:00Z"),
	"gender": "Муж.",
	"amount_children": 0,
	"group_number": 1922,
	"report_card": [
	{
		"number_semestr": 1,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject2.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 2,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject4.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 2,
		},
		]
	},
	{
		"number_semestr": 2,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject5.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 3,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": false,
		},
		]
	},
	{
		"number_semestr": 4,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 3,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
		{
		"number_semestr": 5,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject6.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	{
		"number_semestr": 6,
		"education_performance": 
		[
		{
		"subject": db.Subjects.findOne({ "_id": Subject1.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"mark": 5,
		},
		{
		"subject": db.Subjects.findOne({ "_id": Subject3.insertedId}, { "_id": 1, "name": 1, "form_control": 1, "main_teacher": 1}),
		"pass": true,
		},
		]
	},
	],
	"scolarship_amount": 0,
	"graduate_thesis": {
		"name": "Название диплома",
		"scietific_supervisor": db.Teachers.findOne({"_id": Teacher_FEM_1.insertedId}, {"_id": 1, "first_name": 1, "last_name": 1}),
	},
})