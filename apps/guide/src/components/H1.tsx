import type { HTMLAttributes, PropsWithChildren } from 'react';

export default function H1({ children, className, ...props }: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
	return (
		<h1 className={`group ${className}`} {...props}>
			{children}
		</h1>
	);
}
