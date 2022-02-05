import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Main.module.css";
import dummy from "../db/data.json";

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
			{/* {dummy.users.map(user => (
				<h3 key={user.userName} 
					style={
					{
						color: "yellow", 
						backgroundColor: "black"
					}}>
				안녕하세요. {user.userName}({user.age}) 입니다.</h3>
			))} */}
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/product/1"><li>1번상품</li></Link>
				<Link to="/product/2"><li>2번상품</li></Link>
			</ul>
			{/* <h3 className={styles.name_box}>안녕하세요. 갓대희 입니다.</h3> */}
			{/* <button 
				onClick={() => {
					setMyName(myName === "GodDaeHee" ? "KimDaeHee" : "GodDaeHee");
				}}
			>Change</button> */}
			{/* <button 
				onClick={() => {
					setMyName(myName === "GodDaeHee" ? "KimDaeHee" : "GodDaeHee");
				}}
			>Change</button> */}
			{/* <a href="#" onClick={changeName}>Change</a> */}
        </div>
    );
};

export default Main;