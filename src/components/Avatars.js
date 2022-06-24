import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';

export default function GroupAvatars() {
  return (
    <AvatarGroup style={{'justifyContent': 'left'}}>
    <Tooltip title={"Remy Sharp"}>
        <Avatar alt="Remy Sharp" src="https://picsum.photos/100" />
    </Tooltip>
    <Tooltip title={"Travis Howard"}>
        <Avatar alt="Travis Howard" src="https://picsum.photos/102" />
    </Tooltip>
    <Tooltip title={"Cindy Baker"}>
        <Avatar alt="Cindy Baker" src="https://picsum.photos/104" />
    </Tooltip>
    <Tooltip title={"Agnes Walker"}>
        <Avatar alt="Agnes Walker" src="https://picsum.photos/106" />
    </Tooltip>
    <Tooltip title={"Trevor Henderson"}>
        <Avatar alt="Trevor Henderson" src="https://picsum.photos/108" />
    </Tooltip>
    </AvatarGroup>
  );
}
