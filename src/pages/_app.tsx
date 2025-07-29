import type { AppType } from "next/app";
import Layout from "~/components/Layout";
import { Provider } from "~/components/ui/provider";
import { api } from "~/utils/api";
import { firaSansCondensed, marianne } from "@/utils/font";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<div className={`${firaSansCondensed.variable} ${marianne.variable} `}>
			<Provider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</div>
	);
};

export default api.withTRPC(MyApp);
