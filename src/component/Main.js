import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	// let myName = "GodDaeHee"; // useState를 사용하여 변경
	const [ myName, setMyName ] = useState("GodDaeHee") 
    function changeName(e) {
        /*
		myName = myName === "GodDaeHee" ? "KimDaeHee" : "GodDaeHee";
        console.log(myName);
        document.getElementById("name").indderText = myName;
		*/
		e.preventDefault();
		setMyName(myName === "GodDaeHee" ? "KimDaeHee" : "GodDaeHee");
    }

    return (
        <div>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/product/1"><li>1번상품</li></Link>
				<Link to="/product/2"><li>2번상품</li></Link>
			</ul>
        </div>
    );
};

export default Main;