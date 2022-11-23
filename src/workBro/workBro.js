import { Button } from 'antd';
import { useEffect, useState,useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const WorkBro=(props)=>{

    console.log()
    let getRichChild = () => {
		console.log('rich child');
 
		return 'rich child';
	}
 
	let richChild = useMemo(() => {
		//执行相应的函数
		return getRichChild();
	}, [props.name]);
 
	return (
		<div>
			isChild: {props.isChild ? 'true' : 'false'}<br />
			{richChild}
		</div>
	);


}


export default WorkBro