import React from 'react';
import Nav from '../../components/navBar';
import './style.css';

const academicInstitutes_array = [
	{ imgName: 'haifa', url: 'https://www.haifa.ac.il' },
	{ imgName: 'technion', url: 'https://www.technion.ac.il' },
	{ imgName: 'tau', url: 'https://www.tau.ac.il' },
	{ imgName: 'huji', url: 'https://www.huji.ac.il' },
	{ imgName: 'bgu', url: 'https://www.bgu.ac.il' }
];

function LogoOfInstitute({ imgName, url }) {
	const logo = `images/uni_icons/${imgName}.png`;
	return (
		<a href={url} target="_blank">
			<img className="instituteImg" src={logo} alt={imgName} />
		</a>
	);
}

const academicInstitutes_toShow = academicInstitutes_array.map((institute) => {
	return (
		<div>
			<LogoOfInstitute imgName={institute.imgName} url={institute.url} />
			<br />
		</div>
	);
});

function AcademicInstitutes() {
	return (
		<div className="App">
			<Nav />
			<h1 className="academic">مؤسسات أكاديمية</h1>
			<h3 className="links">أنقر على الصورة لتتصفح موقع المؤسسة</h3>
			<div className="institutes">{academicInstitutes_toShow}</div>
		</div>
	);
}

export default AcademicInstitutes;
