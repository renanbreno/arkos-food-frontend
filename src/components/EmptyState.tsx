import { SVGAttributes } from "react";
import { Text } from "./Text";

interface EmptyStateProps extends SVGAttributes<HTMLOrSVGElement> {
    textChildren: string
}

export function EmptyState(props: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <object {...props}></object>
            <Text>{props.textChildren}</Text>
        </div>
    )
}