import { useEffect, useState } from "react";
import axios from "axios";

const gitHubUrl = "https://api.github.com/users/deekshasharma";

const Subpage1 = () => {

	const[userData,setUserData] = useState({});

	useEffect(()=>{
		getGitHubUserWithFeatch()
	})
	const getGitHubUserWithFeatch = async() =>{
		const response = await fetch(gitHubUrl)
		const jsonData = await response.json();
		setUserData(jsonData)
	}

	const getGitHubUserWithAxios = async() =>{
		const response = await axios.get(gitHubUrl);
		setUserData(response.data)
	}
	return (
		<div className="app">
            git hub user jsonData
			<div>{userData.name}</div>
			<div>{userData.location}</div>
			<div>{userData.blog}</div>
			<div>{userData.company}</div>
	   </div>
	);
};

export default Subpage1;
