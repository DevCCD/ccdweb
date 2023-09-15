import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang='es'>
				<Head>
					<meta name='robots' content='index, follow' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					{CssBaseline.flush()}
				</Head>
				<body id='__almeyda'>
					<Main />
					<NextScript />
					<div id='ccd-modal'></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
