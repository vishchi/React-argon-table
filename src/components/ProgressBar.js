import React from 'react'

const Progress_bar = ({progress,height}) => {
    let bgcolor = '';
    if(progress === '100')
        bgcolor = 'green';
    else if(progress >= '90')
        bgcolor = '#87CEEB';
    else if(progress >= '70')
        bgcolor = 'red';
    else if(progress >= '60')
        bgcolor = 'orange';
    else if(progress >= '0')
        bgcolor = 'orange';
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 50
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progress_bar;