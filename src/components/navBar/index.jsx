import './navBar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function Nav() {
	const [ opened, setOpened ] = useState(false);
	const history = useHistory();
	function signLink() {
		history.push('/login');
	}

	function homeLink() {
		history.push('/');
	}
	return (
		<nav className="navBar">
			<div onClick={() => setOpened(!opened)}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<h1 onClick={homeLink}>الموجه الاكاديمي 🎓</h1>
			<div className={opened ? 'app_drawer app_drawer--visible ' : 'app_drawer'}>
				<div className="app_drawer__items">
					<ul className="app_drawer__title">
						<li>
							<a href="/fit">ملائمة موضوع</a>
						</li>
						<li>
							<a href="/subjects">مواضيع</a>
						</li>
						<li>
							<a href="/academic_institutes">مؤسسات أكاديمية</a>
						</li>
						<li>
							<a href="/">مرشدين</a>
						</li>
						<li>
							<a href="/blogs">مدونة</a>
						</li>
						<li>
							<a href="/">مقالات</a>
						</li>
						<li>
							<a href="/">منح</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="signImage">
				<img src="/lockB.png" alt="pro" onClick={signLink} />
			</div>
		</nav>
	);
}

export default Nav;
