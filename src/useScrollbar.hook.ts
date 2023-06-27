import { RefObject, UIEvent, useEffect, useRef, useState } from "react";

export function useScrollbar() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState(0);
	const [scrollbarHeight, setScrollbarHeight] = useState(0);

	return {
		scrollbarProps: {
			containerRef,
			position,
			height: scrollbarHeight,
			setHeight: setScrollbarHeight,
		},
		containerProps: {
			ref: containerRef,
			setPosition,
			scrollbarHeight,
		},
	};
}

type Props = {
	setPosition: (arg0: number) => void;
	scrollbarHeight: number;
};

export function useContainerScroll({ setPosition, scrollbarHeight }: Props) {
	function handleScroll(e: UIEvent<HTMLDivElement>) {
		// @ts-ignore
		const containerHeight = e.target.offsetHeight;
		// @ts-ignore
		const contentHeight = e.target.firstChild.offsetHeight;
		// @ts-ignore
		const containerToTop = e.target.scrollTop; // position

		const change = containerToTop / (contentHeight - containerHeight); // position vs content height, corrected with container heigt

		const positionAgainstContainer =
			(containerHeight - scrollbarHeight) * change;

		setPosition(positionAgainstContainer);
	}
	return { handleScroll };
}

export type UseScrollbarHeightProps = {
	containerRef: RefObject<HTMLDivElement>;
	setHeight: (arg0: number) => void;
	minHeightPx: number;
};

export function useScrollbarHeight({
	containerRef,
	minHeightPx,
	setHeight,
}: UseScrollbarHeightProps) {
	function adjustScrollbarHeight() {
		const el = containerRef.current;
		if (!el) return;

		const containerHeight = el.offsetHeight;
		// @ts-ignore -- type mismatch
		const contentHeight = el.firstChild?.offsetHeight ?? 0;

		const newSize = containerHeight * (containerHeight / contentHeight);
		setHeight(newSize < minHeightPx ? minHeightPx : newSize);
	}

	useEffect(() => {
		if (!containerRef.current) return;

		adjustScrollbarHeight();

		window.addEventListener("resize", adjustScrollbarHeight);

		return () => window.removeEventListener("resize", adjustScrollbarHeight);
		// we need only to work with containerRef
	}, [containerRef.current]);
}
