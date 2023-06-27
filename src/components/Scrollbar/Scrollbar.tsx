import {
	UseScrollbarHeightProps,
	useScrollbarHeight,
} from "src/useScrollbar.hook";

import classes from "./Scrollbar.module.scss";

type Props = {
	position: number;
	height: number;
};

export function Scrollbar({
	containerRef,
	position,
	height,
	setHeight,
	minHeightPx,
}: Props & UseScrollbarHeightProps) {
	useScrollbarHeight({
		containerRef,
		setHeight,
		minHeightPx,
	});

	return (
		<div className={classes.container}>
			<span
				className={classes.bar}
				style={{
					height: `${height}px`,
					transform: `translateY(${position}px)`,
				}}
			/>
		</div>
	);
}
