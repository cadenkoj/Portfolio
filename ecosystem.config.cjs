module.exports = {
	apps: [
		{
			name: 'portfolio',
			script: 'serve',
			instances: 1,
		        env: {
				PM2_SERVE_PATH: "./dist",
				PM2_SERVE_PORT: 5173,
				PM2_SERVE_SPA: "true",
				NODE_ENV: 'production',
			},
			out_file: './logs/out.log',
			error_file: './logs/err.log',
		},
	],
};
