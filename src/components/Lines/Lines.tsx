import { ForwardedRef, forwardRef } from "react";

import { useContainerScroll } from "src/useScrollbar.hook";

import classes from "./Lines.module.scss";

type Props = {
	setPosition: (arg0: number) => void;
	scrollbarHeight: number;
};

export const Lines = forwardRef(
	(
		{ setPosition, scrollbarHeight }: Props,
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		const { handleScroll } = useContainerScroll({
			setPosition,
			scrollbarHeight,
		});

		return (
			<div ref={ref} className={classes.container} onScroll={handleScroll}>
				<div className={classes.content} />
			</div>
		);
	},
);
