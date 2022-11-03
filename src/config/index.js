export const appConfig = {
	debug: true,
	devUrl: 'http://localhost:3000',
	devServerUrl: 'http://localhost:3001',
	prodUrl: 'https://www.abc.com',
};

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl;

export const imgServerUrl = appConfig.debug ? appConfig.devServerUrl : appConfig.prodUrl;
