import { Header } from "../Header";
import { Lines } from "../Lines";
import { Scrollbar } from "../Scrollbar";
import { useScrollbar } from "src/useScrollbar.hook";

import classes from "./Main.module.scss";
import { CONFIG } from "src/config";

export function Main() {
	const { scrollbarProps, containerProps } = useScrollbar();

	return (
		<main className={classes.container}>
			<div className={classes.content}>
				<Header />
				<Lines {...containerProps} />
			</div>
			<Scrollbar {...scrollbarProps} minHeightPx={CONFIG.minScrollbarHeightPx} />
		</main>
	);
}
