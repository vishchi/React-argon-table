import React from 'react'

const ProgressBar = ({progress}) => {
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
		backgroundColor: 'whitesmoke',
		borderRadius: 50
	}
	
	const Childdiv = {
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:50,
		textAlign: 'right'
	}
	
	const progresstext = {
		color: 'black',
		fontWeight: 600
	}
		
	return (
	<div style={Parentdiv}>
		<div style={Childdiv}>
			<span style={progresstext}>{`${progress}%`}</span>
		</div>
	</div>
	)
}

export default ProgressBar;