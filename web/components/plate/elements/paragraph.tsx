import { cn } from '@/lib/style';
import type { PlateElementProps } from '@udecode/plate-common';
import { PlateElement } from '@udecode/plate-common';
import React from 'react';

const ParagraphElement = React.forwardRef<
	React.ElementRef<typeof PlateElement>,
	PlateElementProps
>(({ className, children, ...props }: PlateElementProps, ref) => (
		<PlateElement
			ref={ref}
			className={cn('text-foreground leading-7 relative', className)}
			{...props}
		>
			{children}
		</PlateElement>
	));
ParagraphElement.displayName = 'ParagraphElement';

export { ParagraphElement };
