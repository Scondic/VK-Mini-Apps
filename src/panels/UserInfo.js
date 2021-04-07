import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

import persik from '../img/persik.png';
import './Persik.css';

const UserInfo = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
			right={<PanelHeaderBack onClick={props.onBackClick} />}
		>
			Получение информации о пользователе
		</PanelHeader>
	</Panel>
);

UserInfo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	onBackClick: PropTypes.func.isRequired
};

export default UserInfo;
