import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

const UserInfo = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
			style={{fontWeight: 600}}
		>
			Получение информации о пользователе
		</PanelHeader>
	</Panel>
);

UserInfo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default UserInfo;
