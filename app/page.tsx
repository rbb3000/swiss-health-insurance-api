'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ApiDocs = () => {
	return (
		<div style={{width: '100%', height: '100vh'}}>
			<SwaggerUI url="/swagger.yaml" />
		</div>
	);
};

export default ApiDocs;
