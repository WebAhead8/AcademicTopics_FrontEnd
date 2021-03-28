import React from 'react';
import Nav from '../../components/navBar';
import './style.css';

const faculties = {
	exact_sciences: {
		title: { ar: 'علوم دقيقة', he: 'מדעים מדויקים' },
		topics: [
			{ ar: 'الرياضيات', he: 'מתמטיקה' },
			{ ar: 'الفيزياء', he: 'פיזיקה' },
			{ ar: 'علم الحاسوب', he: 'מדעי המחשב' },
			{ ar: 'الكيمياء', he: 'כימיה' },
			{ ar: 'البيولوجيا', he: 'ביולוגיה' }
		]
	},

	engineering: {
		title: { ar: 'الهندسة', he: 'הנדסה' },
		topics: [
			{ ar: 'هندسة الكهرباء', he: 'הנדסת חשמל' },
			{ ar: 'هندسة الاّلات', he: 'הנדסת מכונות' },
			{ ar: 'هندسة المواد', he: 'הנדסת חומרים' },
			{ ar: 'هندسة الكيمياء', he: 'הנדסה כימית' },
			{ ar: 'هندسة الطيران', he: 'הנדסת אווירנוטיקה' }
		]
	},

	medicine: {
		title: { ar: 'الطب', he: 'רפואה' },
		topics: [
			{ ar: 'طب عام', he: 'רפואה' },
			{ ar: 'طب أسنان', he: 'רפואת שיניים' },
			{ ar: 'تمريض', he: 'סיעוד' },
			{ ar: 'علاج فيزيائي', he: 'פיזיותרפיה' },
			{ ar: 'علاج وظيفي', he: 'ריפוי בעיסוק' }
		]
	},

	humanities: {
		title: { ar: 'علوم إنسانية', he: 'מדעי הרוח' },
		topics: [
			{ ar: 'لغة عربية', he: 'שפה ערבית' },
			{ ar: 'تاريخ', he: 'היסטוריה' },
			{ ar: 'فلسفة', he: 'פילסופיה' },
			{ ar: 'موسيقى', he: 'מוזיקה' }
		]
	},

	socialAndLaw: {
		title: { ar: 'علوم إجتماعية والقانون', he: 'מדעי החברה ומשפטים' },
		topics: [
			{ ar: 'محاماة', he: 'משפטים' },
			{ ar: 'شؤون إجتماعية', he: 'עבודה סוציאלית' },
			{ ar: 'علم الإجرام', he: 'קרמינולוגיה' }
		]
	}
};

function SubjectsInFaculty({ faculty }) {
	const subjectsList = faculty.topics.map((topic) => {
		return (
			<li className="_topic">
				{topic.ar}&nbsp;&nbsp;&nbsp;{topic.he}
			</li>
		);
	});

	const op1 = <span>&nbsp;&nbsp;</span>;
	const op2 = <br />;
	const option = faculty.title.ar != 'علوم إجتماعية والقانون' ? op1 : op2;

	return (
		<div className="facultyBox">
			<h2 className="faculty">
				{faculty.title.ar}
				{option}
				{faculty.title.he}
			</h2>
			<ul className="subjectsList">{subjectsList}</ul>
		</div>
	);
}

const subjectsToShow = Object.keys(faculties).map((faculty) => {
	return (
		<div>
			<SubjectsInFaculty faculty={faculties[faculty]} />
			<br />
		</div>
	);
});

function Subjects() {
	return (
		<div className="App">
			<Nav />
			<h1 className="subject">مواضيع أكاديمية</h1>
			<div className="subjectsToShow">{subjectsToShow}</div>
		</div>
	);
}

export default Subjects;
